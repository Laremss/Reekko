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

interface Section4Props {
  title?: string
  subtitle?: string
  items?: Array<string>
}

const SECTION4_DEFAULTS = {
  title: 'Tout ce dont vous avez besoin',
  subtitle: 'Pas de mauvaise surprise. Voici exactement ce qui est compris dans le sprint.',
  items: [
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
  ],
}

export default function Section4(props: Section4Props = {}) {
  const { title, subtitle, items } = { ...SECTION4_DEFAULTS, ...props } as typeof SECTION4_DEFAULTS

  return (
    <section className="py-20 border-t border-zinc-800/50">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {title}
                  </h2>
                  <p className="text-zinc-400">
                    {subtitle}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((item, index) => (
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
  )
}
