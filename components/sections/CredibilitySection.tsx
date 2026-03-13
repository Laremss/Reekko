import { Star, Quote } from 'lucide-react'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import CountUp from '@/components/ui/CountUp'

const stats = [
  { value: '15+', label: 'Entreprises accompagnées', duration: 1200 },
  { value: '×3', label: 'ROI moyen constaté', duration: 1000 },
  { value: '−40%', label: 'Réduction du coût par lead', duration: 1500 },
  { value: '4 sem.', label: 'Délai de mise en place', duration: 900 },
]

const testimonials = [
  {
    quote:
      'On cherchait à sortir de la prospection 100% manuelle. En quelques semaines, Reekko a mis en place un système qui tourne et génère des rendez-vous régulièrement. Simple et efficace.',
    author: 'Thomas M.',
    role: 'CEO',
    company: 'SaaS B2B · 50 collaborateurs',
    rating: 5,
  },
  {
    quote:
      'Notre pipeline était irrégulier et trop dépendant du bouche-à-oreille. Avec le système mis en place, on a une source de leads plus régulière. Le premier mois a été convaincant.',
    author: 'Sophie L.',
    role: 'Head of Growth',
    company: 'Scale-up tech · 30 collaborateurs',
    rating: 5,
  },
  {
    quote:
      'Méthode claire, déploiement rapide. On savait exactement où on en était à chaque étape. Pas de sur-promesse, les résultats sont là. Je recommande.',
    author: 'Marc D.',
    role: 'Directeur Commercial',
    company: 'Agence conseil · 15 collaborateurs',
    rating: 5,
  },
]

export default function CredibilitySection() {
  return (
    <section className="py-24 sm:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full bg-violet-900/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateOnScroll className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-5">
            <span>Résultats & témoignages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Les résultats
            <span className="text-violet-400">
              {' '}parlent d'eux-mêmes
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Des entreprises B2B qui ont transformé leur acquisition avec Reekko.
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll delay={100} className="mb-16 border-y border-zinc-800/50">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const sep =
                index === 1
                  ? 'border-l border-zinc-800/50'
                  : index === 2
                    ? 'border-t border-zinc-800/50 lg:border-t-0 lg:border-l'
                    : index === 3
                      ? 'border-t border-l border-zinc-800/50 lg:border-t-0'
                      : ''
              return (
                <div key={index} className={`px-6 py-10 text-center ${sep}`}>
                  <CountUp
                    value={stat.value}
                    duration={stat.duration}
                    className="text-4xl sm:text-5xl font-black text-white mb-2 tabular-nums block"
                  />
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </AnimateOnScroll>

        {/* Testimonials */}
        <AnimateOnScroll delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8 hover:border-zinc-700/60 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-6 h-6 text-indigo-500/40 mb-3 flex-shrink-0" />
                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-5 border-t border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 border border-zinc-700/50 flex items-center justify-center text-zinc-300 text-sm font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Trust badges */}
        <AnimateOnScroll delay={300} className="mt-16 text-center">
          <p className="text-zinc-600 text-sm max-w-md mx-auto">
            Nos clients sont des startups SaaS, agences et PME B2B qui cherchent à structurer leur acquisition sans dépendre d'actions ponctuelles.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
