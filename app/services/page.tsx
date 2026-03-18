import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Users,
  Target,
  Rocket,
  ChevronDown,
  Settings,
  BarChart2,
} from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export const metadata: Metadata = {
  title: 'Services | Acquisition Automation Sprint',
  description:
    "Découvrez l'Acquisition Automation Sprint de Reekko : un accompagnement intensif pour mettre en place votre système d'acquisition B2B automatisé en quelques semaines.",
  alternates: {
    canonical: 'https://www.reekko.com/services',
  },
}

const forWho = [
  {
    icon: Rocket,
    title: 'Startups B2B en traction',
    description:
      'Vous avez validé votre offre. Vous avez besoin d\'un pipeline outbound structuré pour scaler sans recruter une équipe commerciale.',
    tags: ['Seed / Série A', '0-3M ARR', 'Pas encore de process outbound'],
  },
  {
    icon: Users,
    title: 'Équipes commerciales surchargées',
    description:
      'Votre équipe passe ses journées à prospecter manuellement. Il est temps d\'automatiser le volume pour la laisser se concentrer sur le closing.',
    tags: ['2-10 commerciaux', 'Outbound manuel', 'Quota difficile à tenir'],
  },
  {
    icon: Target,
    title: 'Dirigeants encore sur l\'acquisition',
    description:
      'Vous gérez encore l\'acquisition vous-même. Vous voulez un système qui génère des rendez-vous sans que vous ayez à intervenir au quotidien.',
    tags: ['Fondateur actif', 'Dépendance au bouche-à-oreille', 'Croissance à structurer'],
  },
]

const timeline = [
  { phase: '01', title: 'Audit & Stratégie', icon: Target },
  { phase: '02', title: 'Construction', icon: Settings },
  { phase: '03', title: 'Déploiement', icon: Zap },
  { phase: '04', title: 'Optimisation & Transfert', icon: BarChart2 },
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
      'Nous adaptons les outils à votre situation et votre budget. Nous travaillons avec les principaux outils du marché : Apollo, Lemlist, La Growth Machine, HubSpot, Pipedrive, et bien d\'autres selon vos besoins.',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
            <p className="text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
              En 4 à 6 semaines, on conçoit et déploie votre moteur d&apos;acquisition
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

        {/* Pour qui */}
        <section className="py-20 border-t border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ce sprint est fait pour vous si...
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Trois profils, une situation commune : une acquisition qui n&apos;est pas encore à la hauteur du potentiel.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {forWho.map((profile, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-7 hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                    <profile.icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
                    {profile.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {profile.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/50 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Comment ça se passe
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                4 à 6 semaines structurées, de l&apos;audit au système opérationnel.
              </p>
            </div>

            {/* 4 phases horizontales */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {timeline.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3">
                  {/* Connecteur */}
                  <div className="relative w-full flex items-center justify-center">
                    {index > 0 && (
                      <div className="absolute right-1/2 top-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-l from-indigo-500/30 to-transparent" />
                    )}
                    <div className="relative z-10 w-11 h-11 rounded-2xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-4.5 h-4.5 text-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-400 font-mono mb-1">{step.phase}</div>
                    <div className="text-xs font-medium text-zinc-300 leading-snug">{step.title}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/methode"
                className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Découvrir la méthode en détail
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="py-20 border-t border-zinc-800/50">
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

        {/* Pricing */}
        <section className="py-20 bg-zinc-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Investissement
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto">
                Un tarif transparent, calibré selon la complexité de votre
                acquisition. Pas de mauvaise surprise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Sprint Complet - order-first on mobile */}
              <div className="order-1 sm:order-2 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/8 to-violet-500/5 p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                  Sprint Complet · Recommandé
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">à partir de 6 500€</span>
                </div>
                <p className="text-xs text-zinc-500 mb-4">HT · selon périmètre et outils</p>
                <p className="text-sm text-zinc-400 mb-6">
                  Approche multicanale complète : email, LinkedIn et contenu
                  outbound, pour un pipeline à pleine capacité.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Tout le Sprint Standard', 'Multicanal email + LinkedIn', 'Enrichissement et qualification des données', 'Optimisation continue 90 jours', 'Formation équipe commerciale'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="w-full">
                  Démarrer votre sprint
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Sprint Standard */}
              <div className="order-2 sm:order-1 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8">
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Sprint Standard
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-black text-white">à partir de 3 500€</span>
                </div>
                <p className="text-xs text-zinc-600 mb-4">HT · selon périmètre et outils</p>
                <p className="text-sm text-zinc-500 mb-6">
                  Adapté aux entreprises souhaitant structurer leur acquisition
                  sur 1 à 2 canaux (email ou LinkedIn).
                </p>
                <ul className="space-y-2.5 mb-8">
                  {['Audit + stratégie', 'Mise en place de 1 canal outbound', 'Séquences et copywriting', 'Intégration CRM', 'Dashboard de suivi'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="outline" className="w-full">
                  Obtenir un devis
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="text-center mt-6 space-y-1">
              <p className="text-xs text-zinc-600">
                Premier appel stratégique gratuit et sans engagement.
                On analyse votre situation avant tout chiffrage.
              </p>
              <p className="text-xs text-zinc-700">
                Besoin d&apos;un seul service ? Audit, copywriting ou configuration d&apos;outils : on s&apos;adapte à votre besoin.
              </p>
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
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-zinc-800/60 bg-zinc-900/40 overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-zinc-800/20 transition-colors duration-200">
                    <h3 className="text-sm font-semibold text-white pr-4 leading-snug">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-4 h-4 text-zinc-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pt-1 pb-6">
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
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
              Premier appel stratégique gratuit et sans engagement. On analyse
              votre situation et on vous propose un plan d&apos;action concret.
              <br />
              <span className="text-zinc-500 text-base">
                Curieux de voir comment ça fonctionne ?{' '}
                <a href="/methode" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                  Découvrez la méthode en détail.
                </a>
              </span>
            </p>
            <Button size="lg" href="/contact">
              Réserver un appel gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
    </>
  )
}
