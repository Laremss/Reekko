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

interface CommentCaSeProps {
  title?: string
  subtitle?: string
  phases?: Array<{
    phase: string
    title: string
    icon: any
  }>
  linkLabel?: string
  linkHref?: string
}

const COMMENTCASE_DEFAULTS = {
  title: 'Comment ça se passe',
  subtitle: '4 à 6 semaines structurées, de l\'audit au système opérationnel.',
  phases: [
    { phase: '01', title: 'Audit & Stratégie', icon: Target },
    { phase: '02', title: 'Construction', icon: Settings },
    { phase: '03', title: 'Déploiement', icon: Zap },
    { phase: '04', title: 'Optimisation & Transfert', icon: BarChart2 },
  ],
  linkLabel: 'Découvrir la méthode en détail',
  linkHref: '/methode',
}

export default function CommentCaSe(props: CommentCaSeProps = {}) {
  const { title, subtitle, phases, linkLabel, linkHref } = { ...COMMENTCASE_DEFAULTS, ...props } as typeof COMMENTCASE_DEFAULTS

  return (
    <section className="py-20 bg-zinc-900/30">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    {title}
                  </h2>
                  <p className="text-zinc-400 max-w-xl mx-auto">
                    {subtitle}
                  </p>
                </div>
    
                {/* 4 phases horizontales */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {phases.map((step, index) => (
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
                    href={linkHref}
                    className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    {linkLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </section>
  )
}