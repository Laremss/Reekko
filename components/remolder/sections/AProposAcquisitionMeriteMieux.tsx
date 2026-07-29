import { ArrowRight, Target, Heart, Zap, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

interface AcquisitionMeriteMieuxProps {
  titre?: string
  description?: string
  boutonPrimaire?: {
    libelle: string
    lien: string
  }
  boutonSecondaire?: {
    libelle: string
    lien: string
  }
}

const ACQUISITIONMERITEMIEUX_DEFAULTS = {
  titre: "Votre acquisition mérite mieux",
  description: "La prospection manuelle et les relances artisanales, c'est derrière vous.\nDécouvrez comment on construit votre système ou discutons\ndirectement de votre situation.",
  boutonPrimaire: {
    libelle: "Discutons de votre projet",
    lien: "/contact"
  },
  boutonSecondaire: {
    libelle: "Voir la méthode",
    lien: "/methode"
  }
}

export default function AcquisitionMeriteMieux(props: AcquisitionMeriteMieuxProps = {}) {
  const { titre, description, boutonPrimaire, boutonSecondaire } = { ...ACQUISITIONMERITEMIEUX_DEFAULTS, ...props } as typeof ACQUISITIONMERITEMIEUX_DEFAULTS

  return (
    <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                {titre}
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" href={boutonPrimaire.lien}>
                  {boutonPrimaire.libelle}
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" href={boutonSecondaire.lien}>
                  {boutonSecondaire.libelle}
                </Button>
              </div>
            </div>
          </section>
  )
}