import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle, X } from 'lucide-react'

interface PhaseTitleProps {
  phases?: Array<{
    number: string
    icon: React.ComponentType<{ className?: string }>
    title: string
    subtitle: string
    duration: string
    description: string
    deliverables: string[]
  }>
}

const PHASETITLE_DEFAULTS: PhaseTitleProps = {
  phases: [
    {
      number: '01',
      icon: Search,
      title: 'Analyse de l\'acquisition',
      subtitle: 'Vous ne savez pas où votre acquisition perd des opportunités',
      duration: 'Semaine 1',
      description:
        'Avant de construire quoi que ce soit, on comprend parfaitement votre situation. Un diagnostic approfondi pour identifier les opportunités réelles et les points de friction invisibles.',
      deliverables: [
        'Audit complet de vos canaux d\'acquisition actuels',
        'Identification des personas et de l\'ICP',
        'Rapport de diagnostic avec opportunités prioritaires',
      ],
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Conception du système growth',
      subtitle: 'Vous avez les données. Il faut maintenant la bonne stratégie.',
      duration: 'Semaine 2',
      description:
        'Sur la base du diagnostic, on conçoit une stratégie d\'acquisition adaptée à votre marché, vos cibles et vos ressources. Architecture complète du système avant de toucher au moindre outil.',
      deliverables: [
        'Architecture du funnel d\'acquisition end-to-end',
        'Création des messages et séquences de prospection',
        'Plan de déploiement détaillé et priorisé',
      ],
    },
    {
      number: '03',
      icon: Cog,
      title: 'Automatisation',
      subtitle: 'Le système se construit. Votre temps se libère.',
      duration: 'Semaines 3-4',
      description:
        'Phase d\'implémentation : on configure les outils, rédige les séquences et met en place les workflows définis dans la stratégie. À la fin de cette phase, le système est opérationnel.',
      deliverables: [
        'Configuration des outils, séquences email et LinkedIn',
        'Enrichissement et qualification des bases de données',
        'Intégration CRM et mise en place du tracking',
      ],
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Génération et optimisation',
      subtitle: 'Le pipeline tourne. Vous suivez les résultats.',
      duration: 'Semaines 5-6',
      description:
        'Lancement en conditions réelles, monitoring des performances et itérations pour améliorer les taux de conversion. On vous transfère ensuite la documentation et les compétences.',
      deliverables: [
        'Lancement des campagnes et monitoring en temps réel',
        'Optimisation des messages, ciblages et séquences',
        'Documentation et transfert de compétences à l\'équipe',
      ],
    },
  ],
}

export default function PhaseTitle(props: PhaseTitleProps = {}) {
  const { phases } = { ...PHASETITLE_DEFAULTS, ...props }

  return (
    <section className="py-24 sm:py-32">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-5">
                {phases.map((phase, index) => (
                  <div key={index}>
                    <div className="group rounded-2xl border border-zinc-800/60 hover:border-indigo-500/25 bg-zinc-900/40 hover:bg-indigo-950/10 overflow-hidden transition-all duration-300 flex">
    
                      {/* Accent bar gauche */}
                      <div className="w-1 flex-shrink-0 bg-gradient-to-b from-indigo-500/60 to-violet-500/40 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
    
                      <div className="flex-1 p-8 sm:p-10">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-6">
    
                          {/* Left: Icon + Number */}
                          <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <phase.icon className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                              <div className="text-6xl font-black leading-none text-white/10 group-hover:text-white/20 select-none transition-all duration-300 origin-left group-hover:scale-110">
                                {phase.number}
                              </div>
                              <div className="inline-flex mt-2 text-xs font-medium px-2.5 py-0.5 rounded-full border bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
                                {phase.duration}
                              </div>
                            </div>
                          </div>
    
                          {/* Right: Content */}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-indigo-300/80 mb-1 italic">
                              {phase.subtitle}
                            </p>
                            <h2 className="text-2xl font-bold text-white mb-3">
                              {phase.title}
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                              {phase.description}
                            </p>
    
                            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                              Livrables
                            </h3>
                            <ul className="space-y-2 mb-4">
                              {phase.deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                  <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-zinc-300">{item}</span>
                                </li>
                              ))}
                            </ul>
                            <a
                              href="/services"
                              className="inline-flex items-center gap-1 text-xs text-indigo-400/60 hover:text-indigo-400 transition-colors"
                            >
                              Voir le détail complet du sprint
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
    
                    {/* Connecteur entre les cards */}
                    {index < phases.length - 1 && (
                      <div className="flex justify-start pl-[36px] sm:pl-[52px]">
                        <div className="w-px h-5 bg-gradient-to-b from-zinc-700/60 to-zinc-800/30" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}