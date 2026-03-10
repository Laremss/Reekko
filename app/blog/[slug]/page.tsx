import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { formatDate } from '@/lib/utils'
import TableOfContents from '@/components/blog/TableOfContents'
import ShareButtons from '@/components/blog/ShareButtons'
import Button from '@/components/ui/Button'
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Tag,
  ArrowRight,
} from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
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
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://reekko.fr/blog/${post.slug}`,
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
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const headings = extractHeadings(post.content)
  const postUrl = `https://reekko.fr/blog/${post.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://reekko.fr',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reekko',
      url: 'https://reekko.fr',
    },
    keywords: post.tags.join(', '),
    url: postUrl,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-zinc-950 pt-16">
        {/* Article Header */}
        <header className="relative py-16 sm:py-20 overflow-hidden border-b border-zinc-800/50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[400px] h-[300px] rounded-full bg-indigo-600/6 blur-[80px]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

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
