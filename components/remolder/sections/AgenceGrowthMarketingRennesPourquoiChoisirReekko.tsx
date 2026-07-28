import { ArrowRight, MapPin, Zap, Target, TrendingUp, CheckCircle, Calendar } from 'lucide-react'

interface PourquoiChoisirReekkoProps {
  titre?: string
  sousTitre?: string
  description?: string
  avantages?: Array<{
    titre: string
    description: string
  }>
}

const POURQUOICHOISIRREEKKO_DEFAULTS = {
  titre: 'Pourquoi choisir Reekko',
  sousTitre: 'à Rennes ?',
  description: 'Une agence ancrée localement, avec une méthode éprouvée et des résultats mesurables.',
  avantages: [
    {
      titre: 'Connaissance du tissu local',
      description:
        'Nous connaissons l\'écosystème B2B rennais : tech, cybersécurité, agritech, ESN. Nos stratégies tiennent compte de vos marchés cibles spécifiques.',
    },
    {
      titre: 'Rapidité de mise en place',
      description:
        'Votre système d\'acquisition est opérationnel en 4 semaines. Pas de tunnel de vente long avant les premiers résultats.',
    },
    {
      titre: 'ROI mesurable',
      description:
        'Chaque action est trackée. Vous savez exactement combien de leads et de rendez-vous qualifiés le système génère chaque semaine.',
    },
  ],
}

const iconMap: { [key: number]: React.ComponentType<{ className: string }> } = {
  0: Target,
  1: Zap,
  2: TrendingUp,
}

export default function PourquoiChoisirReekko(props: PourquoiChoisirReekkoProps = {}) {
  const { titre, sousTitre, description, avantages } = { ...POURQUOICHOISIRREEKKO_DEFAULTS, ...props } as typeof POURQUOICHOISIRREEKKO_DEFAULTS

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                  {titre}
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    {' '}{sousTitre}
                  </span>
                </h2>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                  {description}
                </p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {avantages.map((a, i) => {
                  const IconComponent = iconMap[i]
                  return (
                    <div key={i} className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-8">
                      <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                        {IconComponent && <IconComponent className="w-5 h-5 text-indigo-400" />}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">{a.titre}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{a.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
  )
}