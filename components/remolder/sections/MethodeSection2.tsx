import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle, X } from 'lucide-react'

interface Section2Props {
  title?: string
  subtitle?: string
  beforeLabel?: string
  afterLabel?: string
  items?: Array<{
    before: string
    after: string
  }>
}

const SECTION2_DEFAULTS = {
  title: 'Ce que le sprint change concrètement',
  subtitle: 'Pour les équipes qui se reconnaissent dans la colonne de gauche.',
  beforeLabel: 'Sans système structuré',
  afterLabel: 'Avec le sprint Reekko',
  items: [
    {
      before: 'Prospection manuelle, chronophage et épuisante',
      after: 'Séquences actives 24h/24, sans intervention quotidienne',
    },
    {
      before: 'Volume limité par votre temps et votre disponibilité',
      after: 'Volume de contacts qualifiés multiplié sans effort supplémentaire',
    },
    {
      before: 'L\'acquisition s\'arrête quand vous vous arrêtez',
      after: 'Le système tourne même quand vous ne prospectez pas',
    },
    {
      before: 'Résultats et coûts difficiles à mesurer',
      after: 'KPIs clairs et dashboard de suivi actif dès le lancement',
    },
  ],
}

export default function Section2(props: Section2Props = {}) {
  const { title, subtitle, beforeLabel, afterLabel, items } = { ...SECTION2_DEFAULTS, ...props } as typeof SECTION2_DEFAULTS

  return (
    <section className="py-16 border-y border-zinc-800/50 bg-zinc-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-sm text-zinc-500">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Avant */}
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <X className="w-3 h-3 text-red-400" />
              </div>
              <span className="text-sm font-semibold text-zinc-400">{beforeLabel}</span>
            </div>
            <ul className="space-y-3">
              {items?.map((item) => (
                <li key={item.before} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 mt-0.5 flex-shrink-0 rounded-full border border-red-500/20 bg-red-500/5 flex items-center justify-center">
                    <X className="w-2.5 h-2.5 text-red-400/60" />
                  </div>
                  <span className="text-sm text-zinc-500">{item.before}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div className="rounded-2xl border border-indigo-500/25 bg-indigo-950/20 p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <span className="text-sm font-semibold text-indigo-300">{afterLabel}</span>
            </div>
            <ul className="space-y-3">
              {items?.map((item) => (
                <li key={item.after} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" />
                  <span className="text-sm text-zinc-300">{item.after}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}