import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface Section5Props {
  titre?: string
  souligne?: string
  sousTitre?: string
  services?: Array<{
    titre: string
    description: string
    points: string[]
  }>
  lienTexte?: string
  lienUrl?: string
}

const SECTION5_DEFAULTS = {
  titre: 'Nos services growth marketing',
  souligne: ' à Rennes',
  sousTitre: 'Des systèmes d\'acquisition conçus pour les réalités du marché B2B breton.',
  services: [
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
  ],
  lienTexte: 'Voir le détail de notre offre',
  lienUrl: '/services',
}

export default function Section5(props: Section5Props = {}) {
  const { titre, souligne, sousTitre, services, lienTexte, lienUrl } = { ...SECTION5_DEFAULTS, ...props }

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {titre}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {souligne}
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            {sousTitre}
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
            href={lienUrl}
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          >
            {lienTexte} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}