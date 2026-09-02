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

interface Section7Props {
  title?: string
  description?: string
  descriptionHint?: string
  methodLink?: string
  methodLinkText?: string
  buttonText?: string
  buttonHref?: string
}

const SECTION7_DEFAULTS = {
  title: 'Prêt à démarrer votre sprint ?',
  description: 'Premier appel stratégique gratuit et sans engagement. On analyse votre situation et on vous propose un plan d\'action concret.',
  descriptionHint: 'Curieux de voir comment ça fonctionne ?',
  methodLinkText: 'Découvrez la méthode en détail.',
  methodLink: '/methode',
  buttonText: 'Réserver un appel gratuit',
  buttonHref: '/contact',
}

export default function Section7(props: Section7Props) {
  const { title, description, descriptionHint, methodLinkText, methodLink, buttonText, buttonHref } = { ...SECTION7_DEFAULTS, ...props } as typeof SECTION7_DEFAULTS

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
                    {descriptionHint}{' '}
                    <a href={methodLink} className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                      {methodLinkText}
                    </a>
                  </span>
                </p>
                <Button size="lg" href={buttonHref}>
                  {buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </section>
  )
}