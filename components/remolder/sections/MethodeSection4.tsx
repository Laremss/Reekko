import { Search, Lightbulb, Cog, TrendingUp, ArrowRight, CheckCircle, X } from 'lucide-react'
import Button from '@/components/ui/Button'

interface Section4Props {
  title?: string
  description?: string
  descriptionHighlight?: string
  primaryButtonLabel?: string
  primaryButtonHref?: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
  highlightText?: string
  highlightLinkText?: string
  highlightLinkHref?: string
}

const SECTION4_DEFAULTS = {
  title: "Vous avez la méthode. Place aux résultats.",
  description: "Cette méthode se concrétise dans un accompagnement de 4 à 6 semaines.\nRéservez un appel pour analyser votre situation ensemble.",
  descriptionHighlight: "Vous voulez d'abord voir ce qui est inclus ?",
  highlightLinkText: "Découvrez le détail du sprint.",
  highlightLinkHref: "/services",
  primaryButtonLabel: "Réserver un appel stratégique",
  primaryButtonHref: "/contact",
  secondaryButtonLabel: "Voir le sprint",
  secondaryButtonHref: "/services"
}

export default function Section4(props: Section4Props = {}) {
  const { title, description, descriptionHighlight, highlightLinkText, highlightLinkHref, primaryButtonLabel, primaryButtonHref, secondaryButtonLabel, secondaryButtonHref } = { ...SECTION4_DEFAULTS, ...props }

  return (
    <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                {title}
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                {description}
                <br />
                <span className="text-zinc-500 text-base">
                  {descriptionHighlight}{' '}
                  <a href={highlightLinkHref} className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                    {highlightLinkText}
                  </a>
                </span>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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