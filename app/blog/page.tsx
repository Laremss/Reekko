import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import BlogCard from '@/components/blog/BlogCard'
import { ArrowRight, BookOpen } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export const metadata: Metadata = {
  title: 'Blog — Growth Marketing & Acquisition B2B',
  description:
    'Ressources, stratégies et conseils pour automatiser votre acquisition B2B, maîtriser le growth marketing et générer plus de leads qualifiés.',
  alternates: {
    canonical: 'https://www.reekko.com/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const [featuredPost, ...otherPosts] = posts

  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Hero */}
      <section className="relative pt-10 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
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
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-5 rounded-full bg-gradient-to-b from-indigo-500 to-violet-500" />
                  <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                    Article à la une
                  </h2>
                </div>
                <BlogCard post={featuredPost} featured />
              </div>
            )}

            {/* Category filter */}
            {categories.length > 1 && (
              <div className="flex items-center flex-wrap gap-2 mb-10">
                <span className="text-sm text-zinc-500 mr-1">Filtrer :</span>
                <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                  Tout
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 hover:border-zinc-600/60 hover:text-zinc-300 transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Other Posts */}
            {otherPosts.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1 h-5 rounded-full bg-gradient-to-b from-zinc-600 to-zinc-700" />
                  <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                    Tous les articles
                  </h2>
                </div>
                <div className="space-y-4">
                  {otherPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-10 text-center">
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
