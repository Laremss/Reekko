import ParallaxGrid from '@/components/ui/ParallexGrid'

interface ReekkoConstruiteProps {
  badge?: string
  title?: string
  titleGradient?: string
  description?: string
}

const REEKKO_CONSTRUITE_DEFAULTS = {
  badge: 'Notre histoire',
  title: 'Reekko, construite',
  titleGradient: 'construite pour libérer votre équipe de la prospection',
  description: 'On a créé Reekko parce qu\'on voyait trop d\'entreprises B2B stagner\nnon pas par manque de produit, mais par manque d\'un système\nd\'acquisition efficace. On a décidé de changer ça.'
}

export default function ReekkoConstruite(props: ReekkoConstruiteProps = {}) {
  const { badge, title, titleGradient, description } = { ...REEKKO_CONSTRUITE_DEFAULTS, ...props }

  return (
    <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
              <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
            </div>
            <ParallaxGrid opacity={0.05} strength={12} />
    
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <span>{badge}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {title}
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
                  {titleGradient}
                </span>
              </h1>
              <p className="text-lg font-light text-zinc-400 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                {description}
              </p>
            </div>
          </section>
  )
}