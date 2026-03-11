import { Search, Lightbulb, Cog, TrendingUp } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const steps = [
  {
    number: '01',
    icon: Search,
    title: "Analyse de l'acquisition",
    description:
      "Audit complet de votre acquisition actuelle : canaux, conversion, coûts, points de friction. On identifie où se trouve la vraie opportunité de croissance.",
    tags: ['Audit', 'Diagnostic', 'Benchmark'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Conception du système growth',
    description:
      "Définition de la stratégie growth adaptée à votre marché et vos cibles. Architecture du funnel d'acquisition, choix des canaux, définition du messaging.",
    tags: ['Stratégie', 'Funnel', 'Positioning'],
  },
  {
    number: '03',
    icon: Cog,
    title: 'Automatisation',
    description:
      'Mise en place des automatisations de prospection : séquences email, LinkedIn automation, enrichissement de données, orchestration des workflows.',
    tags: ['Automation', 'Outbound', 'LinkedIn'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Génération et optimisation des leads',
    description:
      "Lancement du système, monitoring des performances, itérations pour améliorer les taux de conversion et réduire le coût par opportunité qualifiée.",
    tags: ['Leads', 'A/B Testing', 'Optimisation'],
  },
]

export default function SolutionSection() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Le Framework Reekko :
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {' '}4 étapes
            </span>{' '}
            vers un moteur
            <br className="hidden md:block" />
            d'acquisition solide
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Une méthode éprouvée pour transformer votre acquisition B2B en un
            moteur automatisé et scalable.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <AnimateOnScroll delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 hover:border-indigo-800/50 hover:bg-zinc-900/60 transition-all duration-300"
              >
                {/* Number + Icon Row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/15 transition-colors">
                    <step.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-5xl font-black text-zinc-800/60 leading-none tabular-nums group-hover:text-zinc-700/60 transition-colors">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex items-center flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Bottom hint */}
        <AnimateOnScroll delay={300} className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            Ce framework a été conçu pour être mis en place rapidement,{' '}
            <span className="text-zinc-300">en quelques semaines, pas en mois.</span>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
