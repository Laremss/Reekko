import { ArrowRight, Check, Zap, BarChart2, Mail, Users } from 'lucide-react'
import Button from '@/components/ui/Button'

const inclusions = [
  { icon: BarChart2, text: 'Audit complet de l\'acquisition actuelle' },
  { icon: Zap, text: 'Définition de la stratégie growth' },
  { icon: Mail, text: 'Mise en place des automatisations de prospection' },
  { icon: Users, text: 'Structuration du système de génération de leads' },
  { icon: Check, text: 'Recommandations d\'optimisation continues' },
]

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-900/30 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-5">
            <span>Notre offre principale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Un sprint pour transformer
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {' '}votre acquisition
            </span>
          </h2>
        </div>

        {/* Service Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-indigo-500/40 via-violet-500/20 to-transparent" />
            <div className="relative rounded-3xl bg-zinc-900/90 backdrop-blur-sm p-8 sm:p-12">
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-300 text-xs font-semibold mb-4">
                    <Zap className="w-3 h-3 fill-indigo-300" />
                    Sprint · 4–6 semaines
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Acquisition Automation Sprint
                  </h3>
                  <p className="text-zinc-400 leading-relaxed max-w-lg">
                    Un accompagnement court et intensif pour concevoir et mettre en
                    place un système d'acquisition automatisé, adapté à votre marché
                    et opérationnel en quelques semaines.
                  </p>
                </div>

                {/* Badge */}
                <div className="flex-shrink-0 text-center sm:text-right">
                  <div className="inline-block rounded-2xl border border-indigo-500/25 bg-indigo-500/10 px-6 py-4">
                    <div className="text-xs text-indigo-400 font-medium mb-1">
                      Résultat attendu
                    </div>
                    <div className="text-lg font-bold text-white">
                      Pipeline qualifié
                    </div>
                    <div className="text-xs text-zinc-500 mt-0.5">
                      en 30 jours
                    </div>
                  </div>
                </div>
              </div>

              {/* Inclusions */}
              <div className="mb-10">
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-5">
                  Ce que comprend le sprint
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {inclusions.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl bg-zinc-800/40 border border-zinc-700/40 px-4 py-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <span className="text-sm text-zinc-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-zinc-800/50">
                <Button size="lg" href="/contact" className="w-full sm:w-auto">
                  Démarrer votre sprint
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  href="/services"
                  className="w-full sm:w-auto"
                >
                  En savoir plus
                </Button>
                <p className="text-zinc-500 text-sm sm:ml-auto">
                  Premier appel 100% gratuit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
