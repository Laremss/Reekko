import Link from 'next/link'
import { ArrowRight, MapPin, Zap, Target, TrendingUp, CheckCircle, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Section8Props {
  badgeText?: string
  headingStart?: string
  headingGradient?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  resourcesTitle?: string
  resources?: Array<{
    label: string
    href: string
  }>
}

const SECTION8_DEFAULTS: Section8Props = {
  badgeText: 'Appel stratégique gratuit · 30 min',
  headingStart: 'Prêt à structurer votre acquisition',
  headingGradient: ' depuis Rennes ?',
  description: 'En 30 minutes, on analyse votre situation et on vous propose un plan d\'action concret.\nSans engagement, sans bullshit.',
  buttonLabel: 'Réserver un appel stratégique',
  buttonHref: '/contact',
  resourcesTitle: 'Ressources pour approfondir',
  resources: [
    { label: "Qu'est-ce que le growth marketing ?", href: '/blog/growth-marketing' },
    { label: "Automatiser sa prospection B2B", href: '/blog/automatiser-prospection-b2b' },
    { label: "Stratégies d'acquisition B2B", href: '/blog/strategies-acquisition-b2b' },
  ],
}

export default function Section8(props: Section8Props = {}) {
  const { badgeText, headingStart, headingGradient, description, buttonLabel, buttonHref, resourcesTitle, resources } = { ...SECTION8_DEFAULTS, ...props }

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
                <Calendar className="w-3.5 h-3.5" />
                <span>{badgeText}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
                {headingStart}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  {headingGradient}
                </span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                {description}
              </p>
              <Button size="lg" href={buttonHref}>
                {buttonLabel}
                <ArrowRight className="w-5 h-5" />
              </Button>
    
              {/* Ressources associées */}
              <div className="mt-16 pt-10 border-t border-zinc-800/50 text-left">
                <p className="text-zinc-500 text-sm font-medium mb-4 text-center">{resourcesTitle}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {resources.map((r, i) => (
                    <Link
                      key={i}
                      href={r.href}
                      className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4 text-sm text-zinc-300 hover:text-white hover:border-zinc-700/60 transition-all flex items-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
  )
}