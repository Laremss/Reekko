import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle, X } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

interface EtapesConstruireProps {
  badgeLabel?: string
  title?: string
  titleGradient?: string
  description?: string
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
}

const ETAPESCONSTRUIRE_DEFAULTS = {
  badgeLabel: 'Le Framework Reekko',
  title: '4 étapes pour construire',
  titleGradient: 'votre moteur commercial',
  description: 'Un accompagnement structuré pour passer d\'une prospection\nmanuelle et épuisante à un système qui travaille à votre place.',
  primaryButtonLabel: 'Démarrer votre sprint',
  primaryButtonHref: '/contact',
  secondaryButtonLabel: 'Voir l\'offre complète',
  secondaryButtonHref: '/services',
}

export default function EtapesConstruire(props: EtapesConstruireProps = {}) {
  const {
    badgeLabel,
    title,
    titleGradient,
    description,
    primaryButtonLabel,
    primaryButtonHref,
    secondaryButtonLabel,
    secondaryButtonHref,
  } = { ...ETAPESCONSTRUIRE_DEFAULTS, ...props } as typeof ETAPESCONSTRUIRE_DEFAULTS

  return (
    <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
              <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
            </div>
            <ParallaxGrid opacity={0.05} strength={12} />
    
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <span>{badgeLabel}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {title}
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
                  {titleGradient}
                </span>
              </h1>
              <p className="text-lg font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '350ms' }}>
                <Button size="lg" href={primaryButtonHref}>
                  {primaryButtonLabel}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" href={secondaryButtonHref}>
                  {secondaryButtonLabel}
                </Button>
              </div>
            </div>
          </section>
  )
}