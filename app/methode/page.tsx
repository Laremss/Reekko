import type { Metadata } from 'next'
import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export const metadata: Metadata = {
  title: 'Notre Méthode | Framework d\'acquisition B2B',
  description:
    'Découvrez le Framework Reekko : 4 étapes pour transformer votre acquisition B2B en un système automatisé, efficace et scalable.',
  alternates: {
    canonical: 'https://www.reekko.com/methode',
  },
}

const phases = [
  {
    number: '01',
    icon: Search,
    title: 'Analyse de l\'acquisition',
    subtitle: 'Comprendre avant d\'agir',
    duration: 'Semaine 1',
    description:
      'Avant de construire quoi que ce soit, on comprend parfaitement votre situation actuelle. Un diagnostic approfondi pour identifier les opportunités réelles.',
    deliverables: [
      'Audit complet de vos canaux d\'acquisition actuels',
      'Analyse des données et KPIs existants',
      'Identification des personas et ICP (Ideal Customer Profile)',
      'Benchmark concurrentiel et positionnement',
      'Rapport de diagnostic avec opportunités prioritaires',
    ],
    color: 'indigo',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Conception du système growth',
    subtitle: 'Architecturer la stratégie',
    duration: 'Semaine 2',
    description:
      'Sur la base du diagnostic, on conçoit une stratégie d\'acquisition adaptée à votre marché, vos cibles et vos ressources. Architecture complète du système.',
    deliverables: [
      'Définition de la stratégie growth et des objectifs',
      'Architecture du funnel d\'acquisition end-to-end',
      'Choix et priorisation des canaux d\'acquisition',
      'Création des messages et séquences de prospection',
      'Plan de mise en place détaillé',
    ],
    color: 'violet',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Automatisation',
    subtitle: 'Mettre en place le système',
    duration: 'Semaines 3–4',
    description:
      'Phase d\'implémentation : on met en place toutes les automatisations, outils et workflows définis dans la stratégie. Le système devient opérationnel.',
    deliverables: [
      'Configuration des outils d\'automatisation',
      'Mise en place des séquences email et LinkedIn',
      'Enrichissement et qualification des bases de données',
      'Intégration CRM et tracking',
      'Tests et validation des automatisations',
    ],
    color: 'purple',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Génération et optimisation',
    subtitle: 'Lancer, mesurer, améliorer',
    duration: 'Semaines 5–6+',
    description:
      'Lancement du système en conditions réelles. Monitoring continu des performances avec itérations pour améliorer les taux de conversion et réduire les coûts.',
    deliverables: [
      'Lancement des campagnes d\'acquisition',
      'Dashboard de suivi en temps réel',
      'Analyse des premiers résultats',
      'Optimisation des messages et ciblages',
      'Transmission et documentation du système',
    ],
    color: 'cyan',
  },
]

const principles = [
  {
    title: 'Data-driven',
    description: 'Chaque décision est basée sur des données, pas sur des intuitions.',
  },
  {
    title: 'Rapide à déployer',
    description: 'Un pipeline opérationnel en quelques semaines, pas en mois.',
  },
  {
    title: 'Scalable',
    description: 'Conçu pour grandir avec votre entreprise sans effort supplémentaire.',
  },
  {
    title: 'Mesurable',
    description: 'Des KPIs clairs pour suivre le ROI à chaque étape.',
  },
]

export default function MethodePage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Hero */}
      <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
        </div>
        <ParallaxGrid opacity={0.05} strength={12} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <span>Le Framework Reekko</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            4 étapes pour construire
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
              votre moteur commercial
            </span>
          </h1>
          <p className="text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            Un accompagnement structuré pour passer d'une prospection
            artisanale à un pipeline qui tourne en continu. Sans réinventer
            la roue chaque trimestre.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 border-y border-zinc-800/50 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="text-center">
                <div className="text-base font-semibold text-white mb-1">
                  {principle.title}
                </div>
                <div className="text-sm text-zinc-500">{principle.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden hover:border-zinc-700/60 transition-all duration-300"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Left: Number + Icon */}
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <phase.icon className="w-6 h-6 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-4xl font-black text-zinc-800 leading-none">
                          {phase.number}
                        </div>
                        <div className="text-xs font-medium text-zinc-600 mt-1 bg-zinc-800/60 px-2.5 py-0.5 rounded-full">
                          {phase.duration}
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1">
                      <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">
                        {phase.subtitle}
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-3">
                        {phase.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                        Livrables
                      </h3>
                      <ul className="space-y-2">
                        {phase.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-zinc-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Prêt à démarrer votre sprint ?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Cette méthode se concrétise dans un accompagnement de 4 à 6 semaines.
            Réservez un appel pour analyser votre situation ensemble.
            <br />
            <span className="text-zinc-500 text-base">
              Vous voulez d&apos;abord voir ce qui est inclus ?{' '}
              <a href="/services" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                Découvrez le détail du sprint.
              </a>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" href="/contact">
              Réserver un appel stratégique
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Voir le sprint
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
