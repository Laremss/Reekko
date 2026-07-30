import type { Metadata } from 'next'
import { getAllPosts, getAllCategories, type BlogPostMeta } from '@/lib/blog'
import { committedCollectionList } from '@/lib/remolder/data'
import __remolderContent from '@/remolder/published.json'
import BlogFilter from '@/components/blog/BlogFilter'
import NewsletterSection from '@/components/ui/NewsletterSection'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export const metadata: Metadata = {
  title: 'Blog | Growth Marketing & Acquisition B2B',
  description:
    'Ressources, stratégies et conseils pour automatiser votre acquisition B2B, maîtriser le growth marketing et générer plus de leads qualifiés.',
  alternates: {
    canonical: 'https://www.reekko.com/blog',
  },
}



// [Remolder] Liste éditable : on préfère les articles PUBLIÉS (édités dans le
// Studio) à la source d'origine (fichiers MDX). Le design (BlogFilter/BlogCard)
// est conservé — on ne fait que changer la source des données. Tags : publiés en
// chaîne "a, b" → tableau ; temps de lecture recalculé si absent.
function toTags(v: unknown, fallback: string[]): string[] {
  if (typeof v === 'string') return v.split(',').map((t) => t.trim()).filter(Boolean)
  if (Array.isArray(v)) return v as string[]
  return fallback
}
function estReadingTime(content: string): string {
  const words = (content || '').trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min de lecture`
}

export default function BlogPage() {
  const published = committedCollectionList(__remolderContent, 'blog')
  const posts: BlogPostMeta[] = published
    ? published
        .map((e) => ({
          slug: e.slug,
          title: (e.title as string) ?? '',
          description: (e.description as string) ?? '',
          date: (e.date as string) ?? '',
          author: (e.author as string) ?? 'Rémi Bitouzé',
          category: (e.category as string) ?? 'Growth Marketing',
          tags: toTags(e.tags, []),
          coverImage: (e.coverImage as string) ?? '/images/blog/default.jpg',
          readingTime: estReadingTime((e.content as string) ?? ''),
          excerpt: (e.excerpt as string) ?? '',
        }))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    : getAllPosts()
  const categories = published
    ? Array.from(new Set(posts.map((p) => p.category).filter(Boolean)))
    : getAllCategories()

  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Hero */}
      <section className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
        </div>
        <ParallaxGrid opacity={0.05} strength={12} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ressources & insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Blog Growth Marketing
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
              & Acquisition B2B
            </span>
          </h1>
          <p className="text-lg font-light text-zinc-400 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            Stratégies, outils et conseils pour automatiser votre acquisition et
            générer plus d'opportunités commerciales.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">Aucun article pour le moment.</p>
            <p className="text-zinc-600 text-sm mt-2">Revenez bientôt !</p>
          </div>
        ) : (
          <BlogFilter posts={posts} categories={categories} />
        )}

        {/* Newsletter */}
        <div className="mt-16">
          <NewsletterSection />
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Passez à l'action
          </h2>
          <p className="text-zinc-400 mb-7 max-w-md mx-auto">
            La théorie c'est bien, la mise en pratique c'est mieux. Réservez un
            appel pour discuter de votre acquisition.
          </p>
          <Button href="/contact">
            Réserver un appel stratégique
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
