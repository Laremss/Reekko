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
  orb: string
  ring1: string
  ring2: string
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
      gradient: 'from-violet-950 via-[#110d1f] to-purple-950',
      orb: 'bg-violet-500/50',
      ring1: 'border-violet-500/25',
      ring2: 'border-violet-400/10',
      iconBg: 'bg-violet-500/20',
      iconBorder: 'border-violet-500/40',
      iconColor: 'text-violet-300',
      badgeBg: 'bg-violet-500/15',
      badgeBorder: 'border-violet-500/20',
      badgeText: 'text-violet-300',
      Icon: TrendingUp,
    },
    Automatisation: {
      gradient: 'from-emerald-950 via-[#0a1410] to-cyan-950',
      orb: 'bg-emerald-500/40',
      ring1: 'border-emerald-500/25',
      ring2: 'border-emerald-400/10',
      iconBg: 'bg-emerald-500/20',
      iconBorder: 'border-emerald-500/40',
      iconColor: 'text-emerald-300',
      badgeBg: 'bg-emerald-500/15',
      badgeBorder: 'border-emerald-500/20',
      badgeText: 'text-emerald-300',
      Icon: Zap,
    },
    'Stratégie B2B': {
      gradient: 'from-indigo-950 via-[#0c0e1a] to-blue-950',
      orb: 'bg-indigo-500/50',
      ring1: 'border-indigo-500/25',
      ring2: 'border-indigo-400/10',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-500/40',
      iconColor: 'text-indigo-300',
      badgeBg: 'bg-indigo-500/15',
      badgeBorder: 'border-indigo-500/20',
      badgeText: 'text-indigo-300',
      Icon: Target,
    },
  }

  return (
    map[category] ?? {
      gradient: 'from-indigo-950 via-[#0c0e1a] to-violet-950',
      orb: 'bg-indigo-500/50',
      ring1: 'border-indigo-500/25',
      ring2: 'border-indigo-400/10',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-500/40',
      iconColor: 'text-indigo-300',
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
          {/* Cover */}
          <div className={`aspect-video bg-gradient-to-br ${style.gradient} relative overflow-hidden`}>
            {/* Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Central glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full ${style.orb} blur-3xl`} />

            {/* Concentric rings */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border ${style.ring1}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border ${style.ring2}`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border ${style.ring2} opacity-50`} />

            {/* Large icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-20 h-20 rounded-2xl ${style.iconBg} border ${style.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
                <Icon className={`w-9 h-9 ${style.iconColor}`} />
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute bottom-4 left-4">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${style.badgeBg} ${style.badgeText} border ${style.badgeBorder} backdrop-blur-sm`}>
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-6">
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
        <div className={`sm:w-40 lg:w-48 aspect-video sm:aspect-auto flex-shrink-0 bg-gradient-to-br ${style.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

          {/* Glow */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full ${style.orb} blur-2xl`} />

          {/* Ring */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border ${style.ring1}`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border ${style.ring2}`} />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-12 h-12 rounded-xl ${style.iconBg} border ${style.iconBorder} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
              <Icon className={`w-5.5 h-5.5 ${style.iconColor}`} />
            </div>
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
