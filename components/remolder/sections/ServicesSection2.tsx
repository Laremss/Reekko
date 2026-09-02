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

interface Section2Props {
  mainTitle?: string
  mainDescription?: string
  profiles?: Array<{
    icon: React.ComponentType<{ className: string }>
    title: string
    description: string
    tags: string[]
  }>
}

const SECTION2_DEFAULTS = {
  mainTitle: 'Ce sprint est fait pour vous si...',
  mainDescription: 'Trois profils, une situation commune : une acquisition qui n\'est pas encore à la hauteur du potentiel.',
  profiles: [
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
  ],
}

export default function Section2(props: Section2Props = {}) {
  const { mainTitle, mainDescription, profiles } = { ...SECTION2_DEFAULTS, ...props } as typeof SECTION2_DEFAULTS

  return (
    <section className="py-20 border-t border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {mainTitle}
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            {mainDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
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
  )
}