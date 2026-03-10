import { TrendingDown, Timer, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: Timer,
    title: 'Prospection inefficace',
    description:
      'Vos équipes passent des heures sur des tâches manuelles répétitives : recherche de contacts, envoi d\'emails, relances. Résultat : un ROI faible et des taux de conversion décevants.',
    highlight: 'Temps gaspillé',
  },
  {
    icon: TrendingDown,
    title: 'Coût d\'acquisition en hausse',
    description:
      'Le coût pour acquérir un nouveau client augmente chaque trimestre. Les canaux saturés, les CPL en hausse et des funnels mal optimisés plombent votre rentabilité.',
    highlight: 'ROI en baisse',
  },
  {
    icon: AlertTriangle,
    title: 'Pas de système scalable',
    description:
      'Votre acquisition repose sur des actions ponctuelles et des individus clés. Il n\'existe aucun système structuré et reproductible capable de générer des opportunités en continu.',
    highlight: 'Croissance bloquée',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/8 text-red-400 text-xs font-medium mb-5">
            <span>Le problème</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Votre acquisition est un frein
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {' '}à votre croissance
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            La plupart des entreprises B2B souffrent des mêmes problèmes
            d'acquisition et perdent des opportunités commerciales chaque jour.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 hover:border-red-900/40 hover:bg-zinc-900/60 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:bg-red-500/15 transition-colors">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>

              {/* Highlight badge */}
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-xs font-medium mb-4">
                {problem.highlight}
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="mt-20 text-center">
          <p className="text-zinc-500 text-sm">
            Et si vous pouviez avoir un système qui génère des leads de manière{' '}
            <span className="text-zinc-300">automatique et régulier</span> ?
          </p>
        </div>
      </div>
    </section>
  )
}
