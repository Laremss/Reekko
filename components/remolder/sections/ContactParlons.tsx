'use client'

import { Calendar, Mail, MessageSquare, CheckCircle, ArrowRight, Linkedin } from 'lucide-react'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

interface ParlonsProps {
  badgeLabel?: string
  mainTitle?: string
  mainTitleGradient?: string
  description?: string
}

const PARLONS_DEFAULTS = {
  badgeLabel: 'Appel stratégique gratuit',
  mainTitle: 'Parlons de votre',
  mainTitleGradient: 'acquisition B2B',
  description: '30 minutes pour analyser votre situation et construire ensemble\nvotre plan d\'action. Sans engagement, entièrement gratuit.'
}

export default function Parlons(props: ParlonsProps = {}) {
  const { badgeLabel, mainTitle, mainTitleGradient, description } = { ...PARLONS_DEFAULTS, ...props }

  return (
    <section className="relative pt-10 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
              <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
            </div>
            <ParallaxGrid opacity={0.05} strength={12} />
    
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <Calendar className="w-3.5 h-3.5" />
                <span>{badgeLabel}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {mainTitle}
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-text">
                  {mainTitleGradient}
                </span>
              </h1>
              <p className="text-lg font-light text-zinc-400 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '220ms' }}>
                {description}
              </p>
            </div>
          </section>
  )
}