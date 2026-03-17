'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import BlogCard from '@/components/blog/BlogCard'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogFilterProps {
  posts: BlogPostMeta[]
  categories: string[]
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [active, setActive]   = useState<string>('Tout')
  const [query,  setQuery]    = useState<string>('')

  const filtered = posts.filter((p) => {
    const matchCat   = active === 'Tout' || p.category === active
    const q          = query.trim().toLowerCase()
    const matchQuery = q === ''
      || p.title.toLowerCase().includes(q)
      || p.tags?.some((t) => t.toLowerCase().includes(q))
      || p.excerpt?.toLowerCase().includes(q)
    return matchCat && matchQuery
  })

  return (
    <>
      {/* Barre de recherche + filtres catégorie */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">

        {/* Recherche */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article..."
            className="w-full pl-9 pr-8 py-2 rounded-xl bg-zinc-900/60 border border-zinc-700/50 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Effacer la recherche"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filtres catégorie */}
        {categories.length > 1 && (
          <div className="flex items-center flex-wrap gap-2">
            <span className="text-sm text-zinc-500 mr-1">Filtrer :</span>

            <button
              onClick={() => setActive('Tout')}
              className={
                active === 'Tout'
                  ? 'px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/25'
                  : 'px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 hover:border-zinc-600/60 hover:text-zinc-300 transition-colors'
              }
            >
              Tout
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  active === cat
                    ? 'px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/25'
                    : 'px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-800/60 text-zinc-400 border border-zinc-700/40 hover:border-zinc-600/60 hover:text-zinc-300 transition-colors'
                }
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grille d'articles */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} featured />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-zinc-500">
            Aucun article trouvé
            {query && <> pour <span className="text-zinc-300">"{query}"</span></>}.
          </p>
          {(query || active !== 'Tout') && (
            <button
              onClick={() => { setQuery(''); setActive('Tout') }}
              className="mt-3 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>
      )}
    </>
  )
}
