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
  orb1: string
  orb2: string
  iconBg: string
  iconBorder: string
  iconColor: string
  badgeBg: string
  badgeBorder: string
  badgeText: string
  titleColor: string
  Icon: React.ElementType
}

function getCategoryStyle(category: string): CategoryStyle {
  const map: Record<string, CategoryStyle> = {
    'Growth Marketing': {
      gradient: 'from-violet-950 via-zinc-900 to-purple-950',
      orb1: 'bg-violet-500/30',
      orb2: 'bg-purple-600/20',
      iconBg: 'bg-violet-500/20',
      iconBorder: 'border-violet-500/30',
      iconColor: 'text-violet-400',
      badgeBg: 'bg-violet-500/15',
      badgeBorder: 'border-violet-500/20',
      badgeText: 'text-violet-300',
      titleColor: 'text-violet-100',
      Icon: TrendingUp,
    },
    Automatisation: {
      gradient: 'from-emerald-950 via-zinc-900 to-cyan-950',
      orb1: 'bg-emerald-500/25',
      orb2: 'bg-cyan-600/20',
      iconBg: 'bg-emerald-500/20',
      iconBorder: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/15',
      badgeBorder: 'border-emerald-500/20',
      badgeText: 'text-emerald-300',
      titleColor: 'text-emerald-50',
      Icon: Zap,
    },
    'Stratégie B2B': {
      gradient: 'from-indigo-950 via-zinc-900 to-blue-950',
      orb1: 'bg-indigo-500/30',
      orb2: 'bg-blue-600/20',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15',
      badgeBorder: 'border-indigo-500/20',
      badgeText: 'text-indigo-300',
      titleColor: 'text-indigo-50',
      Icon: Target,
    },
  }

  return (
    map[category] ?? {
      gradient: 'from-indigo-950 via-zinc-900 to-violet-950',
      orb1: 'bg-indigo-500/30',
      orb2: 'bg-violet-600/20',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
      badgeBg: 'bg-indigo-500/15',
      badgeBorder: 'border-indigo-500/20',
      badgeText: 'text-indigo-300',
      titleColor: 'text-indigo-50',
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
          {/* Cover */}
          <div className={`aspect-video bg-gradient-to-br ${style.gradient} relative overflow-hidden`}>
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />
            {/* Orbs */}
            <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full ${style.orb1} blur-3xl`} />
            <div className={`absolute -bottom-10 -left-6 w-36 h-36 rounded-full ${style.orb2} blur-2xl`} />

            {/* Icon — top right */}
            <div className={`absolute top-5 right-5 w-11 h-11 rounded-xl ${style.iconBg} border ${style.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <Icon className={`w-5 h-5 ${style.iconColor}`} />
            </div>

            {/* Title over the cover */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 pb-4">
              <h2 className={`text-base sm:text-lg font-bold ${style.titleColor} leading-snug line-clamp-2 mb-3 drop-shadow-sm`}>
                {post.title}
              </h2>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${style.badgeBg} ${style.badgeText} border ${style.badgeBorder} self-start`}>
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
        <div className={`sm:w-40 lg:w-48 aspect-video sm:aspect-auto flex-shrink-0 bg-gradient-to-br ${style.gradient} relative overflow-hidden`}>
          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:20px_20px]" />
          {/* Orbs */}
          <div className={`absolute -top-6 -right-6 w-28 h-28 rounded-full ${style.orb1} blur-2xl`} />
          <div className={`absolute -bottom-4 -left-4 w-20 h-20 rounded-full ${style.orb2} blur-xl`} />

          {/* Icon + mini title */}
          <div className="absolute inset-0 flex flex-col items-start justify-between p-3.5">
            <div className={`w-9 h-9 rounded-xl ${style.iconBg} border ${style.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              <Icon className={`w-4 h-4 ${style.iconColor}`} />
            </div>
            <p className={`text-[11px] font-semibold ${style.titleColor} leading-snug line-clamp-3 opacity-80`}>
              {post.title}
            </p>
          </div>
        </div>

        <div className="p-5 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${style.badgeBg} ${style.badgeText} border ${style.badgeBorder}`}>
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
