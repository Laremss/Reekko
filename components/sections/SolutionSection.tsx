import { Search, Lightbulb, Cog, TrendingUp, ArrowRight } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Audit & Stratégie',
    detail: 'Analyse de votre acquisition, identification des leviers prioritaires.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Conception',
    detail: 'Architecture du funnel, ciblage ICP, copywriting des séquences.',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Déploiement',
    detail: 'Configuration des outils, intégration CRM, lancement des premières séquences.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Optimisation',
    detail: 'Suivi des KPIs, itérations sur les performances, transfert de compétences.',
  },
]

export default function SolutionSection() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Une méthode en 4 phases,
            <span className="text-violet-400"> de l&apos;audit au pipeline actif</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
            Pas de setup qui traîne sur 6 mois. De l&apos;analyse à la première séquence active :{' '}
            <span className="text-white font-medium">4 à 6 semaines.</span>
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex flex-col items-center text-center gap-3">
                {/* Connector line */}
                {index > 0 && (
                  <div className="absolute right-1/2 top-6 w-full h-px bg-gradient-to-l from-indigo-500/25 to-transparent hidden sm:block" />
                )}
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center hover:border-indigo-500/30 hover:bg-zinc-800/60 transition-all duration-300 flex-shrink-0">
                  <phase.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-400 font-mono mb-1">{phase.number}</div>
                  <div className="text-sm font-semibold text-zinc-200 leading-snug mb-1">{phase.title}</div>
                  <div className="text-xs text-zinc-500 leading-snug">{phase.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/methode"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Découvrir la méthode complète
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
