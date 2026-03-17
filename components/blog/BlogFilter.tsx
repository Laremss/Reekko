'use client'

import { useState } from 'react'
import BlogCard from '@/components/blog/BlogCard'
import type { BlogPostMeta } from '@/lib/blog'

interface BlogFilterProps {
  posts: BlogPostMeta[]
  categories: string[]
}

export default function BlogFilter({ posts, categories }: BlogFilterProps) {
  const [active, setActive] = useState<string>('Tout')

  const filtered = active === 'Tout'
    ? posts
    : posts.filter((p) => p.category === active)

  return (
    <>
      {/* Filtres */}
      {categories.length > 1 && (
        <div className="flex items-center flex-wrap gap-2 mb-10">
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

      {/* Grille d'articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <BlogCard key={post.slug} post={post} featured />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-500 text-center py-16">
          Aucun article dans cette catégorie pour le moment.
        </p>
      )}
    </>
  )
}
