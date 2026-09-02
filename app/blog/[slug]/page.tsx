import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug, type BlogPost } from '@/lib/blog'
import { committedCollectionEntry } from '@/lib/remolder/data'
import __remolderContent from '@/remolder/published.json'
import { formatDate } from '@/lib/utils'
import TableOfContents from '@/components/blog/TableOfContents'
import ShareButtons from '@/components/blog/ShareButtons'
import NewsletterSection from '@/components/ui/NewsletterSection'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import { overlayEntry } from '@/lib/remolder/data'

type Props = {
  params: Promise<{ slug: string }>
}

// [Remolder] Tags publiés = chaîne "a, b, c" (la forme des données appartient au
// site) ; le gabarit attend un tableau. On normalise sans jamais casser.
function toTags(v: unknown, fallback: string[]): string[] {
  if (typeof v === 'string') return v.split(',').map((t) => t.trim()).filter(Boolean)
  if (Array.isArray(v)) return v as string[]
  return fallback
}

function estReadingTime(content: string): string {
  const words = (content || '').trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min de lecture`
}

// [Remolder] Article résolu : version publiée (repo) superposée à la source MDX
// d'origine. Un article édité dans le Studio prime ; sinon on garde le fichier.
function resolvePost(slug: string): BlogPost | null {
  const fsPost = getPostBySlug(slug)
  const pub = overlayEntry(committedCollectionEntry(__remolderContent, 'blog', slug), __remolderContent, "blog", slug)
  if (!pub) return fsPost
  const base = fsPost ?? ({} as BlogPost)
  return {
    ...base,
    ...(pub as Partial<BlogPost>),
    slug,
    tags: toTags((pub as { tags?: unknown }).tags, base.tags ?? []),
    content: (pub.content as string) ?? base.content ?? '',
    readingTime: base.readingTime || estReadingTime((pub.content as string) ?? base.content ?? ''),
  } as BlogPost
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = overlayEntry(resolvePost(slug), __remolderContent, "blog", slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: `/og?title=${encodeURIComponent(post.title)}&sub=${encodeURIComponent(post.category)}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://www.reekko.com/blog/${post.slug}`,
    },
  }
}

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const headings: { id: string; text: string; level: number }[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()

    headings.push({ id, text, level })
  }

  return headings
}

const mdxComponents = {
  h2: ({ children, id, ...props }: any) => (
    <h2 id={id} {...props} className="text-2xl font-bold text-white mt-12 mb-4 scroll-mt-20">
      {children}
    </h2>
  ),
  h3: ({ children, id, ...props }: any) => (
    <h3 id={id} {...props} className="text-xl font-semibold text-white mt-8 mb-3 scroll-mt-20">
      {children}
    </h3>
  ),
  h4: ({ children, id, ...props }: any) => (
    <h4 id={id} {...props} className="text-lg font-semibold text-zinc-100 mt-6 mb-2 scroll-mt-20">
      {children}
    </h4>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="not-italic my-8 border-l-4 border-indigo-500 bg-indigo-500/5 rounded-r-xl px-6 py-5">
      <div className="text-zinc-200 font-medium leading-relaxed [&>p]:m-0 [&>p]:text-zinc-200">
        {children}
      </div>
    </blockquote>
  ),
  hr: () => (
    <div className="my-10 flex items-center gap-3">
      <div className="flex-1 h-px bg-zinc-800" />
      <div className="flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-violet-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
      </div>
      <div className="flex-1 h-px bg-zinc-800" />
    </div>
  ),
  table: ({ children }: any) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-zinc-800/60">
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="border-b border-zinc-700 bg-zinc-900/60">{children}</thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-zinc-800/60">{children}</tbody>
  ),
  tr: ({ children }: any) => (
    <tr className="hover:bg-zinc-900/30 transition-colors">{children}</tr>
  ),
  th: ({ children }: any) => (
    <th className="text-left font-semibold text-zinc-200 py-3 px-4">{children}</th>
  ),
  td: ({ children }: any) => (
    <td className="py-3 px-4 text-zinc-400">{children}</td>
  ),
  img: ({ src, alt }: any) => (
    <span className="block my-8 rounded-xl overflow-hidden border border-zinc-800/60">
      <Image
        src={src}
        alt={alt ?? ''}
        width={800}
        height={450}
        className="w-full h-auto"
        loading="lazy"
      />
    </span>
  ),
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = overlayEntry(resolvePost(slug), __remolderContent, "blog", slug)

  if (!post) {
    notFound()
  }

  const headings = extractHeadings(post.content)
  const postUrl = `https://www.reekko.com/blog/${post.slug}`
  const relatedPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 2)

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.reekko.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.reekko.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
    ],
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.description,
    image: `https://www.reekko.com/og?title=${encodeURIComponent(post.title)}&sub=${encodeURIComponent(post.category)}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Reekko',
      url: 'https://www.reekko.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reekko',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.reekko.com/logo.svg',
      },
    },
    keywords: post.tags.join(', '),
    url: postUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-zinc-950 pt-16">
        {/* Article Header */}
        <header className="relative py-16 sm:py-20 overflow-hidden border-b border-zinc-800/50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
          </div>
          <ParallaxGrid opacity={0.05} strength={10} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Retour au blog
            </Link>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-6">
                <Tag className="w-3.5 h-3.5 text-zinc-600" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs text-zinc-500 bg-zinc-800/60 border border-zinc-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <article className="flex-1 min-w-0 max-w-3xl">
              <div className="prose prose-lg prose-invert max-w-none">
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug],
                    },
                  }}
                />
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <ShareButtons title={post.title} url={postUrl} />
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                  Retour au blog
                </Link>
              </div>

              {/* Newsletter */}
              <div className="mt-12">
                <NewsletterSection />
              </div>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12 pt-8 border-t border-zinc-800/50">
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                      Pour aller plus loin
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5 hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-200"
                      >
                        <span className="text-xs font-medium text-indigo-400 mb-2 block">
                          {related.category}
                        </span>
                        <h4 className="text-sm font-semibold text-white leading-snug mb-2 group-hover:text-indigo-300 transition-colors">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-1 text-zinc-500 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{related.readingTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8">
                <h3 className="text-xl font-bold text-white mb-3">
                  Prêt à automatiser votre acquisition ?
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  Réservez un appel stratégique gratuit pour découvrir comment
                  mettre en place un système d'acquisition automatisé adapté à
                  votre entreprise.
                </p>
                <Button href="/contact">
                  Réserver un appel gratuit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <TableOfContents headings={headings} />
                )}

                {/* CTA Card */}
                <div className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    Automatisez votre acquisition B2B
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Réservez un appel gratuit pour obtenir un plan d'action
                    personnalisé.
                  </p>
                  <Button href="/contact" size="sm" className="w-full">
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}
