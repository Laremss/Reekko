import type { Metadata } from 'next'
import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle, X } from 'lucide-react'
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
    subtitle: 'Vous ne savez pas où votre acquisition perd des opportunités',
    duration: 'Semaine 1',
    description:
      'Avant de construire quoi que ce soit, on comprend parfaitement votre situation. Un diagnostic approfondi pour identifier les opportunités réelles et les points de friction invisibles.',
    deliverables: [
      'Audit complet de vos canaux d\'acquisition actuels',
      'Identification des personas et de l\'ICP',
      'Rapport de diagnostic avec opportunités prioritaires',
    ],
    accent: 'bg-violet-500/40',
    iconBg: 'bg-violet-500/10',
    iconBorder: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    numberColor: 'text-violet-950',
    subtitleColor: 'text-violet-300',
    durationBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    checkColor: 'text-violet-400',
    hoverBorder: 'hover:border-violet-500/20',
    hoverBg: 'hover:bg-violet-950/10',
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
    accent: 'bg-purple-500/40',
    iconBg: 'bg-purple-500/10',
    iconBorder: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    numberColor: 'text-purple-950',
    subtitleColor: 'text-purple-300',
    durationBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    checkColor: 'text-purple-400',
    hoverBorder: 'hover:border-purple-500/20',
    hoverBg: 'hover:bg-purple-950/10',
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
    accent: 'bg-indigo-500/40',
    iconBg: 'bg-indigo-500/10',
    iconBorder: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    numberColor: 'text-indigo-950',
    subtitleColor: 'text-indigo-300',
    durationBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    checkColor: 'text-indigo-400',
    hoverBorder: 'hover:border-indigo-500/20',
    hoverBg: 'hover:bg-indigo-950/10',
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
    accent: 'bg-cyan-500/40',
    iconBg: 'bg-cyan-500/10',
    iconBorder: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    numberColor: 'text-cyan-950',
    subtitleColor: 'text-cyan-300',
    durationBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    checkColor: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/20',
    hoverBg: 'hover:bg-cyan-950/10',
  },
]

const comparison = [
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
          <p className="text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            Un accompagnement structuré pour passer d&apos;une prospection
            artisanale à un pipeline qui tourne en continu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
            <Button size="lg" href="/contact">
              Démarrer votre sprint
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Voir l&apos;offre complète
            </Button>
          </div>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="py-16 border-y border-zinc-800/50 bg-zinc-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ce que le sprint change concrètement
            </h2>
            <p className="text-sm text-zinc-500">Pour les équipes qui se reconnaissent dans la colonne de gauche.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Avant */}
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 text-red-400" />
                </div>
                <span className="text-sm font-semibold text-zinc-400">Sans système structuré</span>
              </div>
              <ul className="space-y-3">
                {comparison.map((item) => (
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
                <span className="text-sm font-semibold text-indigo-300">Avec le sprint Reekko</span>
              </div>
              <ul className="space-y-3">
                {comparison.map((item) => (
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

      {/* Phases */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {phases.map((phase, index) => (
              <div key={index}>
                <div className={`group rounded-2xl border border-zinc-800/60 ${phase.hoverBorder} bg-zinc-900/40 ${phase.hoverBg} overflow-hidden transition-all duration-300 flex`}>

                  {/* Accent bar gauche */}
                  <div className={`w-1 flex-shrink-0 ${phase.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="flex-1 p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-6">

                      {/* Left: Icon + Number */}
                      <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
                        <div className={`w-14 h-14 rounded-2xl ${phase.iconBg} border ${phase.iconBorder} flex items-center justify-center flex-shrink-0`}>
                          <phase.icon className={`w-6 h-6 ${phase.iconColor}`} />
                        </div>
                        <div>
                          <div className={`text-5xl font-black leading-none ${phase.numberColor} select-none`}>
                            {phase.number}
                          </div>
                          <div className={`inline-flex mt-2 text-xs font-medium px-2.5 py-0.5 rounded-full border ${phase.durationBg}`}>
                            {phase.duration}
                          </div>
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1">
                        {/* Subtitle as headline */}
                        <p className={`text-sm font-medium ${phase.subtitleColor} mb-1 italic`}>
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
                              <CheckCircle className={`w-4 h-4 ${phase.checkColor} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-zinc-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="/services"
                          className={`inline-flex items-center gap-1 text-xs ${phase.subtitleColor} opacity-70 hover:opacity-100 transition-opacity`}
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

      {/* CTA */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Vous avez la méthode. Place aux résultats.
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
