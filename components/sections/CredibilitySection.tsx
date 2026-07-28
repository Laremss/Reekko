import { ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CountUp from '@/components/ui/CountUp'

interface CredibilitySectionProps {
  badgeLabel?: string
  headingMain?: string
  headingHighlight?: string
  description?: string
  stats?: Array<{
    value: string
    label: string
    sublabel: string
    duration: number
  }>
  caseStudies?: Array<{
    sector: string
    size: string
    situation: string
    result: string
    duration: string
    metric: string
  }>
}

const CREDIBILITYSECTION_DEFAULTS = {
  badgeLabel: 'Résultats concrets',
  headingMain: 'Ce que ça change',
  headingHighlight: 'en pratique',
  description: 'Trois situations réelles, trois systèmes déployés, trois résultats mesurables.',
  stats: [
    { value: '15+', label: 'Sprints livrés', sublabel: 'depuis le lancement de Reekko', duration: 1200 },
    { value: '×3', label: 'ROI moyen constaté', sublabel: 'sur le budget acquisition', duration: 1000 },
    { value: '−40%', label: 'Réduction du coût par lead', sublabel: 'en 90 jours en moyenne', duration: 1500 },
    { value: '4 sem.', label: 'Pour un pipeline opérationnel', sublabel: "de l'audit au premier lead", duration: 900 },
  ],
  caseStudies: [
    {
      sector: 'SaaS RH',
      size: '40 collaborateurs',
      situation: 'Prospection 100% manuelle. 2 à 3 rendez-vous irréguliers par mois, sans process outbound.',
      result: '9 RDV qualifiés générés chaque mois. L\'équipe répond aux conversations, elle ne prospecte plus.',
      duration: '5 semaines',
      metric: '+9 RDV/mois',
    },
    {
      sector: 'Scale-up B2B',
      size: '30 collaborateurs',
      situation: 'Pipeline dépendant du bouche-à-oreille. Croissance stagnante, pas de levier outbound structuré.',
      result: 'Volume de prospects entrants multiplié par 3 en 2 mois grâce à un système multicanal.',
      duration: '6 semaines',
      metric: 'x3 prospects',
    },
    {
      sector: 'Cabinet de conseil',
      size: '20 collaborateurs',
      situation: "Les commerciaux passaient 60% de leur temps à prospecter au lieu de closer.",
      result: 'Coût par lead réduit de 40%. L\'équipe recentrée sur la vente, pas sur la chasse.',
      duration: '4 semaines',
      metric: '-40% CPL',
    },
  ],
}

export default function CredibilitySection(props: CredibilitySectionProps = {}) {
  const {
    badgeLabel,
    headingMain,
    headingHighlight,
    description,
    stats,
    caseStudies,
  } = { ...CREDIBILITYSECTION_DEFAULTS, ...props } as typeof CREDIBILITYSECTION_DEFAULTS

  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-violet-900/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-5">
            <span>{badgeLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            {headingMain}
            <span className="text-violet-400"> {headingHighlight}</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            {description}
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll delay={100} className="mb-16 border-y border-zinc-800/50">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const sep =
                index === 1
                  ? 'border-l border-zinc-800/50'
                  : index === 2
                    ? 'border-t border-zinc-800/50 lg:border-t-0 lg:border-l'
                    : index === 3
                      ? 'border-t border-l border-zinc-800/50 lg:border-t-0'
                      : ''
              return (
                <div key={index} className={`px-6 py-10 text-center ${sep}`}>
                  <CountUp
                    value={stat.value}
                    duration={stat.duration}
                    className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums block"
                  />
                  <div className="text-sm text-zinc-400 font-medium">{stat.label}</div>
                  <div className="text-xs text-zinc-600 mt-0.5">{stat.sublabel}</div>
                </div>
              )
            })}
          </div>
        </AnimateOnScroll>

        {/* Case Studies */}
        <AnimateOnScroll delay={200}>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-1 -mx-4 px-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0">
            {caseStudies.map((cs, index) => (
              <div
                key={index}
                className="snap-center flex-shrink-0 w-[82vw] md:w-auto group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Header */}
                <div className="px-6 pt-6 pb-5 border-b border-zinc-800/50">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{cs.sector}</span>
                      <span className="text-xs text-zinc-600">·</span>
                      <span className="text-xs text-zinc-500">{cs.size}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-zinc-500 font-mono">
                      {cs.duration}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-5 flex-1 flex flex-col gap-4">
                  {/* Situation */}
                  <div>
                    <div className="text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-2">
                      Situation initiale
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {cs.situation}
                    </p>
                  </div>

                  {/* Divider arrow */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-zinc-800/60" />
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-500/60 flex-shrink-0" />
                    <div className="flex-1 h-px bg-zinc-800/60" />
                  </div>

                  {/* Result */}
                  <div>
                    <div className="text-xs font-semibold text-indigo-400/70 uppercase tracking-wider mb-2">
                      Après le sprint
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>

                {/* Metric */}
                <div className="px-6 pb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {cs.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Indicateur scroll mobile */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-5">
            {caseStudies.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all ${i === 0 ? 'w-4 h-1.5 bg-indigo-400' : 'w-1.5 h-1.5 bg-zinc-700'}`}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}