import Link from 'next/link'
import { ArrowRight, Clock, Calendar, TrendingUp, Zap, Target } from 'lucide-react'
import { type BlogPostMeta } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPostMeta
  featured?: boolean
}

type CategoryStyle = {
  gradient: string
  iconBg: string
  iconBorder: string
  iconColor: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  Icon: React.ElementType
}

function getCategoryStyle(category: string): CategoryStyle {
  const map: Record<string, CategoryStyle> = {
    'Growth Marketing': {
      gradient: 'from-violet-900/40 via-zinc-900 to-purple-900/30',
      iconBg: 'bg-violet-500/20',
      iconBorder: 'border-violet-500/30',
      iconColor: 'text-violet-400',
      badgeBg: 'bg-violet-500/15',
      badgeBorder: 'border-violet-500/20',
      badgeText: 'text-violet-300',
      Icon: TrendingUp,
    },
    Automatisation: {
      gradient: 'from-emerald-900/30 via-zinc-900 to-cyan-900/20',
      iconBg: 'bg-emerald-500/20',
      iconBorder: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15',
      badgeBorder: 'border-emerald-500/20',
      badgeText: 'text-emerald-300',
      Icon: Zap,
    },
    'Stratégie B2B': {
      gradient: 'from-indigo-900/40 via-zinc-900 to-blue-900/20',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15',
      badgeBorder: 'border-indigo-500/20',
      badgeText: 'text-indigo-300',
      Icon: Target,
    },
  }

  return (
    map[category] ?? {
      gradient: 'from-indigo-900/40 via-zinc-900 to-violet-900/30',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15',
      badgeBorder: 'border-indigo-500/20',
      badgeText: 'text-indigo-300',
      Icon: TrendingUp,
    }
  )
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const style = getCategoryStyle(post.category)
  const { Icon } = style

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-300 h-full">
          {/* Thumbnail catégorie */}
          <div
            className={`aspect-video bg-gradient-to-br ${style.gradient} relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
            {/* Orb décoratif */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-current opacity-5 blur-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`w-16 h-16 rounded-2xl ${style.iconBg} border ${style.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className={`w-7 h-7 ${style.iconColor}`} />
              </div>
            </div>
            {/* Label catégorie en bas */}
            <div className="absolute bottom-4 left-4">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${style.badgeBg} ${style.badgeText} border ${style.badgeBorder}`}
              >
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>

            <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-indigo-100 transition-colors line-clamp-2">
              {post.title}
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-3">
              {post.description}
            </p>

            <span className="inline-flex items-center gap-1.5 text-indigo-400 text-sm font-medium group-hover:gap-2.5 transition-all">
              Lire l&apos;article
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 overflow-hidden hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col sm:flex-row gap-0">
        {/* Thumbnail compact */}
        <div
          className={`sm:w-40 lg:w-48 aspect-video sm:aspect-auto flex-shrink-0 bg-gradient-to-br ${style.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`w-10 h-10 rounded-xl ${style.iconBg} border ${style.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className={`w-5 h-5 ${style.iconColor}`} />
            </div>
          </div>
        </div>

        <div className="p-5 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`px-2 py-0.5 rounded-full text-xs font-medium ${style.badgeBg} ${style.badgeText} border ${style.badgeBorder}`}
            >
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
