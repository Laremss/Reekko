import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import { type BlogPostMeta } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPostMeta
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-300 h-full">
          {/* Cover image placeholder */}
          <div className="aspect-video bg-gradient-to-br from-indigo-900/40 via-zinc-900 to-violet-900/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <Tag className="w-7 h-7 text-indigo-400" />
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Category */}
            <div className="flex items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-indigo-100 transition-colors line-clamp-2">
              {post.title}
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {post.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-indigo-400 text-sm font-medium group-hover:gap-2.5 transition-all">
                Lire l'article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col sm:flex-row gap-0">
        {/* Cover thumbnail */}
        <div className="sm:w-40 lg:w-48 aspect-video sm:aspect-auto flex-shrink-0 bg-gradient-to-br from-indigo-900/30 via-zinc-900 to-violet-900/20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
              <Tag className="w-4.5 h-4.5 text-indigo-400" />
            </div>
          </div>
        </div>

        <div className="p-5 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-zinc-500 text-xs">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-indigo-100 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mb-3">
            {post.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-zinc-600 text-xs">{formatDate(post.date)}</span>
            <span className="inline-flex items-center gap-1 text-indigo-400 text-xs font-medium group-hover:gap-1.5 transition-all">
              Lire
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
