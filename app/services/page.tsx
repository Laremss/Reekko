import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart2,
  Mail,
  Users,
  Target,
  Search,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export const metadata: Metadata = {
  title: 'Services — Acquisition Automation Sprint',
  description:
    "Découvrez l'Acquisition Automation Sprint de Reekko : un accompagnement intensif pour mettre en place votre système d'acquisition B2B automatisé en quelques semaines.",
  alternates: {
    canonical: 'https://www.reekko.com/services',
  },
}

const features = [
  {
    icon: Search,
    title: 'Audit d\'acquisition',
    description:
      'Analyse complète de votre acquisition actuelle pour identifier les opportunités de croissance et les points de friction.',
  },
  {
    icon: Target,
    title: 'Stratégie growth',
    description:
      'Définition d\'une stratégie d\'acquisition B2B adaptée à votre marché, vos cibles et vos ressources.',
  },
  {
    icon: Mail,
    title: 'Automatisations de prospection',
    description:
      'Mise en place de séquences email, LinkedIn automation et workflows de nurturing entièrement automatisés.',
  },
  {
    icon: Users,
    title: 'Génération de leads',
    description:
      'Construction d\'un flux constant de prospects qualifiés, sans prospection manuelle au quotidien.',
  },
  {
    icon: BarChart2,
    title: 'Tracking & reporting',
    description:
      'Dashboard de suivi des performances avec KPIs et métriques clés pour piloter votre acquisition.',
  },
  {
    icon: Zap,
    title: 'Optimisation continue',
    description:
      'Recommandations d\'optimisation basées sur les données pour améliorer les taux de conversion.',
  },
]

const inclusions = [
  'Audit complet de l\'acquisition actuelle',
  'Définition de l\'ICP et des personas',
  'Stratégie growth personnalisée',
  'Architecture du funnel d\'acquisition',
  'Séquences email et LinkedIn (copywriting inclus)',
  'Configuration des outils d\'automatisation',
  'Enrichissement et qualification des bases de données',
  'Intégration CRM',
  'Dashboard de suivi des performances',
  'Recommandations d\'optimisation',
  'Documentation complète du système',
  'Formation et transfert de compétences',
]

const faqs = [
  {
    question: 'Combien de temps dure le sprint ?',
    answer:
      'Le sprint dure généralement entre 4 et 6 semaines selon la complexité de votre acquisition et vos objectifs. Nous travaillons de manière intensive pour vous fournir un système opérationnel le plus rapidement possible.',
  },
  {
    question: 'Quels types d\'entreprises accompagnez-vous ?',
    answer:
      'Nous accompagnons principalement les startups B2B, les SaaS, les agences et les PME tech qui souhaitent structurer et automatiser leur acquisition. Le sprint est particulièrement adapté aux entreprises en phase de croissance.',
  },
  {
    question: 'Quels outils utilisez-vous ?',
    answer:
      'Nous adaptons les outils à votre situation et votre budget. Nous travaillons avec les principaux outils du marché : Apollo, Lemlist, La Growth Machine, HubSpot, Pipedrive, Clay, et bien d\'autres selon vos besoins.',
  },
  {
    question: 'Quels résultats peut-on espérer ?',
    answer:
      'Les résultats varient selon votre marché et votre offre, mais nos clients constatent en moyenne une multiplication par 3 de leur ROI d\'acquisition et une réduction de 60% de leur coût par lead dans les 90 jours suivant le sprint.',
  },
  {
    question: 'Y a-t-il un suivi après le sprint ?',
    answer:
      'Oui, nous assurons un suivi post-sprint avec des sessions de revue de performance. Des offres d\'accompagnement continu sont disponibles pour les entreprises souhaitant aller plus loin.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
        </div>
        <ParallaxGrid opacity={0.05} strength={12} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <Zap className="w-3.5 h-3.5 fill-indigo-300" />
            <span>Notre offre principale</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Acquisition
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
              Automation Sprint
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            En 4 à 6 semaines, on conçoit et déploie votre moteur d'acquisition
            automatisé. Vous repartez avec un pipeline qui tourne sans
            intervention manuelle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
            <Button size="lg" href="/contact">
              Démarrer votre sprint
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/methode">
              Voir la méthode
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ce que comprend le sprint
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Un accompagnement complet de bout en bout pour mettre en place votre
              système d'acquisition.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-7 hover:border-zinc-700/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <feature.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-zinc-400">
              Pas de mauvaise surprise. Voici exactement ce qui est compris dans le sprint.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-zinc-800/30 border border-zinc-700/30 px-5 py-3.5"
              >
                <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="text-sm text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6"
              >
                <h3 className="text-base font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Prêt à démarrer ?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Premier appel stratégique gratuit et sans engagement. On analyse
            votre situation et on vous propose un plan d'action concret.
          </p>
          <Button size="lg" href="/contact">
            Réserver un appel gratuit
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
