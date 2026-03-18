import type { Metadata } from 'next'
import { ArrowRight, Target, Heart, Zap, Users, Linkedin, ExternalLink } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

export const metadata: Metadata = {
  title: 'À propos | Reekko, expert en acquisition B2B',
  description:
    'Découvrez Reekko, l\'agence spécialisée en growth marketing et automatisation de l\'acquisition B2B. Notre mission, nos valeurs et notre équipe.',
  alternates: {
    canonical: 'https://www.reekko.com/a-propos',
  },
}

const values = [
  {
    icon: Target,
    title: 'Orienté résultats',
    description:
      'On ne travaille pas pour vous impressionner avec des métriques vanity. Notre seul objectif : générer des opportunités commerciales mesurables.',
  },
  {
    icon: Zap,
    title: 'Rapide et efficace',
    description:
      "On croit que les meilleurs résultats viennent d'une exécution rapide et itérative. On met en place, on mesure, on optimise.",
  },
  {
    icon: Heart,
    title: 'Investis dans vos résultats',
    description:
      'On travaille comme si c\'était notre propre pipeline. Votre succès est notre succès, pas juste une case cochée.',
  },
  {
    icon: Users,
    title: 'Transparent',
    description:
      'Communication directe, reporting clair, zéro bullshit. Vous savez exactement où en sont les résultats à tout moment.',
  },
]

const expertise = [
  'Growth Marketing',
  'Marketing Automation',
  'Outbound Sales',
  'LinkedIn Prospecting',
  'Email Marketing',
  'Lead Generation',
  'CRM & Pipelines',
  'Analytics & Tracking',
  'Copywriting',
  'A/B Testing',
]

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Hero */}
      <section className="relative pt-10 pb-20 sm:pt-14 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
        </div>
        <ParallaxGrid opacity={0.05} strength={12} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <span>Notre histoire</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Reekko, construite
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
              pour que votre acquisition tourne sans vous
            </span>
          </h1>
          <p className="text-lg font-light text-zinc-400 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '220ms' }}>
            On a créé Reekko parce qu'on voyait trop d'entreprises B2B stagner
            non pas par manque de produit, mais par manque d'un système
            d'acquisition efficace. On a décidé de changer ça.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 border border-indigo-500/20 flex items-center justify-center text-white text-2xl font-bold">
                RB
              </div>
            </div>
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h2 className="text-xl font-bold text-white">Rémi Bitouzé</h2>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  Fondateur — Reekko
                </span>
              </div>
              <a
                href="https://www.linkedin.com/in/remi-bitouze"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-zinc-500 hover:text-indigo-400 text-sm transition-colors mb-5"
              >
                <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
                linkedin.com/in/remi-bitouze
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
                <p>
                  J&apos;ai créé Reekko après avoir constaté le même problème en
                  accompagnant des dizaines d&apos;entreprises B2B : un produit solide,
                  une équipe compétente, mais une acquisition qui repose sur le
                  bouche-à-oreille et des actions ponctuelles. Résultat : un pipeline
                  irrégulier, des mois creuxet une croissance qui stagne.
                </p>
                <p>
                  La solution n&apos;est pas de travailler plus — c&apos;est de construire un
                  système qui travaille à votre place. C&apos;est précisément ce que fait
                  Reekko : concevoir et déployer des moteurs d&apos;acquisition automatisés,
                  mesurables et reproductibles, adaptés à chaque entreprise B2B.
                </p>
                <p>
                  Le Framework Reekko est le fruit de cette expérience : une méthode
                  en 4 étapes pour passer d&apos;une prospection artisanale à un pipeline
                  qui génère des rendez-vous qualifiés en continu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nos valeurs
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Ce qui nous guide dans chaque accompagnement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-7 hover:border-zinc-700/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                  <value.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Notre expertise
            </h2>
            <p className="text-zinc-400">
              Les domaines dans lesquels on excelle pour faire croître votre
              acquisition.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-zinc-700/50 bg-zinc-800/30 text-zinc-300 text-sm font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900/30 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Votre acquisition mérite mieux
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Un tableur de prospects et des relances manuelles, c&apos;est derrière vous.
            Découvrez comment on construit votre moteur commercial ou discutons
            directement de votre situation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" href="/contact">
              Discutons de votre projet
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" href="/methode">
              Voir la méthode
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
