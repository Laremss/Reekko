import { ArrowRight, Target, Heart, Zap, Users } from 'lucide-react'

interface ValeursProps {
  titre?: string
  sousTitre?: string
  valeurs?: Array<{
    icon: React.ComponentType<{ className?: string }>
    titre: string
    description: string
  }>
}

const VALEURS_DEFAULTS: ValeursProps = {
  titre: 'Nos valeurs',
  sousTitre: 'Ce qui nous guide dans chaque accompagnement.',
  valeurs: [
    {
      icon: Target,
      titre: 'Orienté résultats',
      description:
        'On ne travaille pas pour vous impressionner avec des métriques vanity. Notre seul objectif : générer des opportunités commerciales mesurables.',
    },
    {
      icon: Zap,
      titre: 'Rapide et efficace',
      description:
        "On croit que les meilleurs résultats viennent d'une exécution rapide et itérative. On met en place, on mesure, on optimise.",
    },
    {
      icon: Heart,
      titre: 'Investis dans vos résultats',
      description:
        'On travaille comme si c\'était notre propre pipeline. Votre succès est notre succès, pas juste une case cochée.',
    },
    {
      icon: Users,
      titre: 'Transparent',
      description:
        'Communication directe, reporting clair, zéro bullshit. Vous savez exactement où en sont les résultats à tout moment.',
    },
  ],
}

export default function Valeurs(props: ValeursProps = {}) {
  const { titre, sousTitre, valeurs } = { ...VALEURS_DEFAULTS, ...props }

  return (
    <section className="py-20 bg-zinc-900/30 border-y border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {titre}
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                  {sousTitre}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {valeurs.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-7 hover:border-zinc-700/60 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                      <value.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">
                      {value.titre}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}