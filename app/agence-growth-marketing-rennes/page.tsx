import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Zap, Target, TrendingUp, CheckCircle, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'

const siteUrl = 'https://www.reekko.com'
const pageUrl = `${siteUrl}/agence-growth-marketing-rennes`

export const metadata: Metadata = {
  title: 'Agence Growth Marketing Rennes — Acquisition B2B automatisée | Reekko',
  description:
    'Reekko, agence growth marketing basée à Rennes. Systèmes d\'acquisition B2B automatisés pour startups et PME bretonnes. Résultats mesurables en 4 semaines.',
  keywords: [
    'agence growth marketing rennes',
    'growth marketing rennes',
    'acquisition B2B rennes',
    'prospection B2B rennes',
    'automatisation marketing rennes',
    'lead generation rennes',
    'agence marketing B2B rennes',
    'growth hacking rennes',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: 'Agence Growth Marketing Rennes — Acquisition B2B | Reekko',
    description:
      'Systèmes d\'acquisition B2B automatisés pour entreprises rennaises et bretonnes. Premiers résultats en 4 semaines.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': pageUrl,
  name: 'Reekko — Agence Growth Marketing Rennes',
  description:
    "Agence growth marketing B2B basée à Rennes. Spécialisée dans l'acquisition automatisée et la prospection B2B pour startups et PME.",
  url: siteUrl,
  email: 'contact@reekko.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rennes',
    addressRegion: 'Bretagne',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.1173,
    longitude: -1.6778,
  },
  areaServed: [
    { '@type': 'City', name: 'Rennes' },
    { '@type': 'AdministrativeArea', name: 'Bretagne' },
    { '@type': 'AdministrativeArea', name: 'Pays de la Loire' },
  ],
  serviceType: [
    'Growth Marketing B2B',
    'Automatisation de la prospection',
    'Acquisition de leads B2B',
    'Outbound marketing',
    'Marketing automation',
  ],
  priceRange: '€€€',
}

const avantages = [
  {
    icon: Target,
    titre: 'Connaissance du tissu local',
    description:
      'Nous connaissons l\'écosystème B2B rennais : tech, cybersécurité, agritech, ESN. Nos stratégies tiennent compte de vos marchés cibles spécifiques.',
  },
  {
    icon: Zap,
    titre: 'Rapidité de mise en place',
    description:
      'Votre système d\'acquisition est opérationnel en 4 semaines. Pas de tunnel de vente long avant les premiers résultats.',
  },
  {
    icon: TrendingUp,
    titre: 'ROI mesurable',
    description:
      'Chaque action est trackée. Vous savez exactement combien de leads et de rendez-vous qualifiés le système génère chaque semaine.',
  },
]

const services = [
  {
    titre: 'Prospection B2B automatisée',
    description: 'Séquences email + LinkedIn ultra-personnalisées pour générer des rendez-vous qualifiés sans effort.',
    points: ['Ciblage ICP précis', 'Copywriting orienté pain point', 'Séquences multicanal', 'Suivi et optimisation'],
  },
  {
    titre: 'Système d\'acquisition inbound',
    description: 'Stratégie de contenu et SEO pour attirer des prospects qualifiés organiquement sur le long terme.',
    points: ['Audit SEO et opportunités', 'Stratégie de contenu', 'Landing pages optimisées', 'Lead magnets'],
  },
  {
    titre: 'Automatisation marketing',
    description: 'Mise en place des outils et workflows pour automatiser les tâches répétitives de votre équipe.',
    points: ['Sélection et intégration des outils', 'CRM et pipeline', 'Workflows no-code', 'Reporting automatisé'],
  },
]

const faq = [
  {
    q: 'Reekko est-elle une agence basée à Rennes ?',
    r: 'Oui, Reekko opère depuis Rennes et accompagne principalement des entreprises B2B bretonnes et du Grand Ouest. Nous connaissons bien le tissu économique local et pouvons intervenir en présentiel si besoin.',
  },
  {
    q: 'Quel type d\'entreprises accompagnez-vous à Rennes ?',
    r: 'Nous travaillons avec des startups SaaS, des agences B2B, des ESN et des PME industrielles ou tech situées à Rennes et en Bretagne. Notre critère principal : vous vendez à d\'autres entreprises et voulez structurer votre acquisition.',
  },
  {
    q: 'En combien de temps verrai-je les premiers résultats ?',
    r: 'Notre Sprint Acquisition est calibré pour 4 semaines. La plupart de nos clients obtiennent leurs premiers rendez-vous qualifiés dans les 3 à 4 semaines suivant le lancement des premières séquences.',
  },
  {
    q: 'Quels budgets faut-il prévoir ?',
    r: 'Le tarif est défini sur mesure selon vos besoins, la complexité du projet et les canaux à activer. Nous privilégions la transparence : tout est chiffré dès le premier échange, sans retainer opaque ni engagement long terme par défaut. Réservez un appel pour obtenir une proposition adaptée à votre situation.',
  },
  {
    q: 'Intervenez-vous uniquement sur Rennes ou aussi en dehors ?',
    r: 'Nous accompagnons des clients partout en France, mais notre ancrage rennais nous permet d\'être particulièrement réactifs pour les entreprises du Grand Ouest (Bretagne, Pays de la Loire, Normandie).',
  },
]

export default function RennesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-zinc-950 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-600/12 blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge local */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
            <MapPin className="w-3.5 h-3.5" />
            <span>Agence Growth Marketing — Rennes, Bretagne</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
            Votre acquisition B2B
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              automatisée à Rennes.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Reekko conçoit des systèmes d'acquisition automatisés pour les entreprises B2B du bassin rennais.
            Premiers rendez-vous qualifiés en 4 semaines, sans dépendre de la prospection manuelle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" href="/contact">
              Réserver un appel stratégique
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Découvrir l'offre
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 max-w-lg mx-auto gap-8 pt-10 border-t border-zinc-800/50">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">15+</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">Clients accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">4 sem.</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">Délai de mise en place</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">3×</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">ROI moyen constaté</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi Reekko à Rennes */}
      <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Pourquoi choisir Reekko
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {' '}à Rennes ?
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Une agence ancrée localement, avec une méthode éprouvée et des résultats mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avantages.map((a, i) => (
              <div key={i} className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <a.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{a.titre}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Nos services growth marketing
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                {' '}à Rennes
              </span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Des systèmes d'acquisition conçus pour les réalités du marché B2B breton.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-3">{s.titre}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2 mt-auto">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
            >
              Voir le détail de notre offre <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contexte local */}
      <section className="py-20 sm:py-28 bg-zinc-900/20 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Growth marketing B2B à Rennes :<br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              un écosystème en pleine expansion
            </span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            Rennes est l'une des métropoles françaises avec la plus forte dynamique de création d'entreprises B2B tech.
            Entre les acteurs de la cybersécurité, les ESN, les startups SaaS et les PME industrielles du Grand Ouest,
            la demande pour des systèmes d'acquisition efficaces n'a jamais été aussi forte.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Pourtant, la majorité de ces entreprises dépendent encore d'un réseau de contacts limité et d'une
            prospection manuelle chronophage. C'est exactement ce que Reekko vient résoudre : un système
            d'acquisition automatisé, calibré pour votre marché et opérationnel en quelques semaines.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <div key={i} className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6">
                <h3 className="text-base font-semibold text-white mb-3">{item.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
            <Calendar className="w-3.5 h-3.5" />
            <span>Appel stratégique gratuit · 30 min</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
            Prêt à structurer votre acquisition
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {' '}depuis Rennes ?
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            En 30 minutes, on analyse votre situation et on vous propose un plan d'action concret.
            Sans engagement, sans bullshit.
          </p>
          <Button size="lg" href="/contact">
            Réserver un appel stratégique
            <ArrowRight className="w-5 h-5" />
          </Button>

          {/* Ressources associées */}
          <div className="mt-16 pt-10 border-t border-zinc-800/50 text-left">
            <p className="text-zinc-500 text-sm font-medium mb-4 text-center">Ressources pour approfondir</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Qu'est-ce que le growth marketing ?", href: '/blog/growth-marketing' },
                { label: "Automatiser sa prospection B2B", href: '/blog/automatiser-prospection-b2b' },
                { label: "Stratégies d'acquisition B2B", href: '/blog/strategies-acquisition-b2b' },
              ].map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4 text-sm text-zinc-300 hover:text-white hover:border-zinc-700/60 transition-all flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
