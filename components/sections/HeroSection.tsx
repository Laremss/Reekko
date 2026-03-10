import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-16">
      {/* Grid background */}
      <ParallaxGrid opacity={0.055} strength={16} />

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full bg-violet-600/12 blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <Zap className="w-3.5 h-3.5 fill-indigo-300" />
          <span>Growth Marketing & Automatisation B2B</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6">
          Automatisez votre
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
            acquisition B2B.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Reekko conçoit des systèmes d'acquisition automatisés pour aider les
          entreprises B2B à générer davantage d'opportunités commerciales.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" href="/contact">
            Réserver un appel stratégique
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" href="/methode">
            Découvrir la méthode
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 border-t border-zinc-800/60">
          <div className="grid grid-cols-3 max-w-xl mx-auto">
            <div className="text-center px-4 py-8">
              <div className="text-2xl sm:text-3xl font-black font-bold text-white tabular-nums">15+</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">Entreprises accompagnées</div>
            </div>
            <div className="text-center px-4 py-8 border-x border-zinc-800/40">
              <div className="text-2xl sm:text-3xl font-black font-bold text-white tabular-nums">3×</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">ROI moyen</div>
            </div>
            <div className="text-center px-4 py-8">
              <div className="text-2xl sm:text-3xl font-black font-bold text-white tabular-nums">−40%</div>
              <div className="text-xs sm:text-sm text-zinc-500 mt-1">Coût par lead</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
      </div>
    </section>
  )
}
