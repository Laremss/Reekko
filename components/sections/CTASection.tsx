import { ArrowRight, Calendar, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

interface CTASectionProps {
  badge?: string
  headline?: string
  headlineGradient?: string
  description?: string
  benefits?: string[]
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
  socialProof?: string
}

const CTASECTION_DEFAULTS = {
  badge: 'Prendre rendez-vous',
  headline: '30 minutes pour construire',
  headlineGradient: 'votre plan d\'acquisition',
  description: 'Réservez un appel stratégique gratuit de 30 minutes. On analyse votre acquisition actuelle et on vous présente un plan d\'action concret.',
  benefits: [
    'Premier appel 100% gratuit',
    'Analyse de votre acquisition actuelle',
    'Plan d\'action personnalisé',
    'Sans engagement',
  ],
  primaryButtonLabel: 'Réserver un appel stratégique',
  primaryButtonHref: '/contact',
  secondaryButtonLabel: 'Voir la méthode',
  secondaryButtonHref: '/methode',
  socialProof: 'Rejoint par 15+ entreprises B2B qui ont transformé leur acquisition',
}

export default function CTASection(props: CTASectionProps = {}) {
  const { badge, headline, headlineGradient, description, benefits, primaryButtonLabel, primaryButtonHref, secondaryButtonLabel, secondaryButtonHref, socialProof } = { ...CTASECTION_DEFAULTS, ...props } as typeof CTASECTION_DEFAULTS

  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute -bottom-20 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
            <Calendar className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {headline}
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
              {headlineGradient}
            </span>
          </h2>

          <p className="text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-zinc-400 text-sm">
                <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" href={primaryButtonHref} className="text-base px-8 py-4">
              {primaryButtonLabel}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href={secondaryButtonHref} className="text-base">
              {secondaryButtonLabel}
            </Button>
          </div>

          {/* Social proof */}
          <p className="mt-8 text-zinc-600 text-sm">
            {socialProof}
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}