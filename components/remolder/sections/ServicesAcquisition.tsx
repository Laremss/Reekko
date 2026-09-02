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
import ParallaxGrid from '@/components/ui/ParallaxGrid'

interface AcquisitionProps {
  badgeLabel?: string
  mainTitle?: string
  gradientTitle?: string
  description?: string
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
}

const ACQUISITION_DEFAULTS = {
  badgeLabel: 'Notre offre principale',
  mainTitle: 'Acquisition',
  gradientTitle: 'Automation Sprint',
  description: 'En 4 à 6 semaines, on conçoit et déploie votre système de prospection.\nVotre équipe se concentre sur les conversations.\nLe système prospecte à votre place.',
  primaryButtonLabel: 'Démarrer votre sprint',
  primaryButtonHref: '/contact',
  secondaryButtonLabel: 'Voir la méthode',
  secondaryButtonHref: '/methode',
}

export default function Acquisition(props: AcquisitionProps = {}) {
  const {
    badgeLabel,
    mainTitle,
    gradientTitle,
    description,
    primaryButtonLabel,
    primaryButtonHref,
    secondaryButtonLabel,
    secondaryButtonHref,
  } = { ...ACQUISITION_DEFAULTS, ...props } as typeof ACQUISITION_DEFAULTS

  return (
    <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
              </div>
              <ParallaxGrid opacity={0.05} strength={12} />
    
              <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                  <Zap className="w-3.5 h-3.5 fill-indigo-300" />
                  <span>{badgeLabel}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  {mainTitle}
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
                    {gradientTitle}
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
