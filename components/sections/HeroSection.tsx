import { ArrowRight, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'
import CountUp from '@/components/ui/CountUp'

interface HeroSectionProps {
  badge?: string
  headline?: string
  headlineGradient?: string
  subheadlineMain?: string
  subheadlineEmphasis?: string
  ctaPrimary?: {
    label: string
    href: string
  }
  ctaSecondary?: {
    label: string
    href: string
  }
  stats?: Array<{
    value: string
    label: string
    duration: number
  }>
}

const HEROSECTION_DEFAULTS = {
  badge: 'Sprint · 4 à 6 semaines · Premiers RDV dès la semaine 4',
  headline: 'Arrêtez de prospecter',
  headlineGradient: 'manuellement.',
  subheadlineMain: 'Reekko conçoit et déploie votre moteur d\'acquisition B2B en 4 à 6 semaines.\nSéquences actives, leads qualifiés, rendez-vous générés.',
  subheadlineEmphasis: 'Sans intervention quotidienne de votre part.',
  ctaPrimary: {
    label: 'Réserver un appel stratégique',
    href: '/contact',
  },
  ctaSecondary: {
    label: 'Découvrir la méthode',
    href: '/methode',
  },
  stats: [
    {
      value: '5 sem.',
      label: 'Pour un pipeline actif',
      duration: 1000,
    },
    {
      value: '×3',
      label: 'ROI moyen constaté',
      duration: 1200,
    },
    {
      value: '−40%',
      label: 'Coût par lead réduit',
      duration: 1600,
    },
  ],
}

export default function HeroSection(props: HeroSectionProps = {}) {
  const { badge, headline, headlineGradient, subheadlineMain, subheadlineEmphasis, ctaPrimary, ctaSecondary, stats } = { ...HEROSECTION_DEFAULTS, ...props } as typeof HEROSECTION_DEFAULTS

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-16">
      {/* Grid background */}
      <ParallaxGrid opacity={0.055} strength={16} />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full bg-violet-600/12 blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16 sm:pt-10 sm:pb-24">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          <Zap className="w-3.5 h-3.5 fill-indigo-300" />
          <span>{badge}</span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6"
        >
          {headline}
          <br />
          <span className="animate-gradient-text">
            {headlineGradient}
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-lg sm:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '220ms' }}
        >
          {subheadlineMain}{' '}
          <span className="text-zinc-300 font-normal">{subheadlineEmphasis}</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '350ms' }}
        >
          <Button size="lg" href={ctaPrimary.href}>
            {ctaPrimary.label}
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" href={ctaSecondary.href}>
            {ctaSecondary.label}
          </Button>
        </div>

        {/* Stats */}
        <div
          className="mt-20 animate-fade-in-up"
          style={{ animationDelay: '480ms' }}
        >
          <div className="grid grid-cols-3 max-w-xl mx-auto rounded-2xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-sm divide-x divide-zinc-800/60">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4 py-7">
                <CountUp
                  value={stat.value}
                  className="text-3xl sm:text-4xl font-black text-white tabular-nums"
                  duration={stat.duration}
                />
                <div className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}