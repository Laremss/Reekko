import { ArrowRight, MapPin, Zap, Target, TrendingUp, CheckCircle, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'

interface AcquisitionB2bProps {
  badgeLabel?: string
  headlineMain?: string
  headlineGradient?: string
  description?: string
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
  statClients?: string
  statClientsLabel?: string
  statDelai?: string
  statDelaiLabel?: string
  statRoi?: string
  statRoiLabel?: string
}

const ACQUISITIONB2B_DEFAULTS = {
  badgeLabel: "Agence Growth Marketing | Rennes, Bretagne",
  headlineMain: "Votre acquisition B2B",
  headlineGradient: "automatisée à Rennes.",
  description: "Reekko conçoit des systèmes d'acquisition automatisés pour les entreprises B2B du bassin rennais.\nPremiers rendez-vous qualifiés en 4 semaines, sans dépendre de la prospection manuelle.",
  primaryButtonLabel: "Réserver un appel stratégique",
  primaryButtonHref: "/contact",
  secondaryButtonLabel: "Découvrir l'offre",
  secondaryButtonHref: "/services",
  statClients: "15+",
  statClientsLabel: "Clients accompagnés",
  statDelai: "4 sem.",
  statDelaiLabel: "Délai de mise en place",
  statRoi: "3×",
  statRoiLabel: "ROI moyen constaté",
}

export default function AcquisitionB2b(props: AcquisitionB2bProps = {}) {
  const {
    badgeLabel,
    headlineMain,
    headlineGradient,
    description,
    primaryButtonLabel,
    primaryButtonHref,
    secondaryButtonLabel,
    secondaryButtonHref,
    statClients,
    statClientsLabel,
    statDelai,
    statDelaiLabel,
    statRoi,
    statRoiLabel,
  } = { ...ACQUISITIONB2B_DEFAULTS, ...props }

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-zinc-950 overflow-hidden">
            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-600/12 blur-[100px]" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
            </div>
    
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
              {/* Badge local */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8">
                <MapPin className="w-3.5 h-3.5" />
                <span>{badgeLabel}</span>
              </div>
    
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
                {headlineMain}
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {headlineGradient}
                </span>
              </h1>
    
              <p className="text-lg sm:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {description}
              </p>
    
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button size="lg" href={primaryButtonHref}>
                  {primaryButtonLabel}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" href={secondaryButtonHref}>
                  {secondaryButtonLabel}
                </Button>
              </div>
    
              {/* Stats */}
              <div className="grid grid-cols-3 max-w-lg mx-auto gap-8 pt-10 border-t border-zinc-800/50">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">{statClients}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 mt-1">{statClientsLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">{statDelai}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 mt-1">{statDelaiLabel}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white tabular-nums">{statRoi}</div>
                  <div className="text-xs sm:text-sm text-zinc-500 mt-1">{statRoiLabel}</div>
                </div>
              </div>
            </div>
          </section>
  )
}