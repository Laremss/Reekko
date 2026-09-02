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

interface InvestissementProps {
  titre?: string
  description?: string
  offreStandardTitre?: string
  offreStandardPrix?: string
  offreStandardSousTitre?: string
  offreStandardDescription?: string
  offreStandardItems?: string[]
  offreStandardCta?: { label: string; href: string }
  offreCompletTitre?: string
  offreCompletPrix?: string
  offreCompletSousTitre?: string
  offreCompletDescription?: string
  offreCompletItems?: string[]
  offreCompletCta?: { label: string; href: string }
  disclaimerAppel?: string
  carteTitre?: string
  carteDescription?: string
  carteCta?: { label: string; href: string }
}

const INVESTISSEMENT_DEFAULTS = {
  titre: 'Investissement',
  description: 'Un tarif transparent, calibré selon la complexité de votre acquisition. Pas de mauvaise surprise.',
  offreStandardTitre: 'Sprint Standard',
  offreStandardPrix: 'à partir de 3 500€',
  offreStandardSousTitre: 'HT · selon périmètre et outils',
  offreStandardDescription: 'Adapté aux entreprises souhaitant structurer leur acquisition sur 1 à 2 canaux (email ou LinkedIn).',
  offreStandardItems: ['Audit + stratégie', 'Mise en place de 1 canal outbound', 'Séquences et copywriting', 'Intégration CRM', 'Dashboard de suivi'],
  offreStandardCta: { label: 'Obtenir un devis', href: '/contact' },
  offreCompletTitre: 'Sprint Complet · Recommandé',
  offreCompletPrix: 'à partir de 6 500€',
  offreCompletSousTitre: 'HT · selon périmètre et outils',
  offreCompletDescription: 'Approche multicanale complète : email, LinkedIn et contenu outbound, pour un pipeline à pleine capacité.',
  offreCompletItems: ['Tout le Sprint Standard', 'Multicanal email + LinkedIn', 'Enrichissement et qualification des données', 'Optimisation continue 90 jours', 'Formation équipe commerciale'],
  offreCompletCta: { label: 'Obtenir un devis', href: '/contact' },
  disclaimerAppel: 'Premier appel stratégique gratuit et sans engagement. On analyse votre situation avant tout chiffrage.',
  carteTitre: 'Besoin d\'un seul service ?',
  carteDescription: 'Audit, copywriting ou configuration d\'outils : on s\'adapte à votre besoin sans package imposé.',
  carteCta: { label: 'En discuter', href: '/contact' },
}

export default function Investissement(props: InvestissementProps = {}) {
  const {
    titre,
    description,
    offreStandardTitre,
    offreStandardPrix,
    offreStandardSousTitre,
    offreStandardDescription,
    offreStandardItems,
    offreStandardCta,
    offreCompletTitre,
    offreCompletPrix,
    offreCompletSousTitre,
    offreCompletDescription,
    offreCompletItems,
    offreCompletCta,
    disclaimerAppel,
    carteTitre,
    carteDescription,
    carteCta,
  } = { ...INVESTISSEMENT_DEFAULTS, ...props } as typeof INVESTISSEMENT_DEFAULTS

  return (
    <section className="py-20 bg-zinc-900/30">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {titre}
                  </h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    {description}
                  </p>
                </div>
    
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Sprint Complet - order-first on mobile */}
                  <div className="order-1 sm:order-2 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/8 to-violet-500/5 p-8 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                      {offreCompletTitre}
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-black text-white">{offreCompletPrix}</span>
                    </div>
                    <p className="text-xs text-zinc-500 mb-4">{offreCompletSousTitre}</p>
                    <p className="text-sm text-zinc-400 mb-6">
                      {offreCompletDescription}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {offreCompletItems.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button href={offreCompletCta.href} className="w-full">
                      {offreCompletCta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
    
                  {/* Sprint Standard */}
                  <div className="order-2 sm:order-1 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8">
                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                      {offreStandardTitre}
                    </div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-4xl font-black text-white">{offreStandardPrix}</span>
                    </div>
                    <p className="text-xs text-zinc-600 mb-4">{offreStandardSousTitre}</p>
                    <p className="text-sm text-zinc-500 mb-6">
                      {offreStandardDescription}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {offreStandardItems.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button href={offreStandardCta.href} variant="outline" className="w-full">
                      {offreStandardCta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
    
                <p className="text-center mt-6 text-xs text-zinc-500">
                  {disclaimerAppel}
                </p>
    
                {/* À la carte */}
                <div className="mt-8 rounded-xl border border-zinc-700/40 bg-zinc-900/60 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{carteTitre}</p>
                    <p className="text-sm text-zinc-400">{carteDescription}</p>
                  </div>
                  <a
                    href={carteCta.href}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors whitespace-nowrap"
                  >
                    {carteCta.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>
  )
}
