'use client'

import { useState } from 'react'
import { Calendar, Mail, MessageSquare, CheckCircle, ArrowRight, Linkedin } from 'lucide-react'
import Button from '@/components/ui/Button'
import ParallaxGrid from '@/components/ui/ParallaxGrid'

const benefits = [
  'Analyse de votre acquisition actuelle',
  'Identification des opportunités de croissance',
  'Plan d\'action personnalisé et concret',
  'Zéro engagement, 100% gratuit',
]

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    // Basic sanitization
    const sanitized = value.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    setFormData((prev) => ({ ...prev, [name]: sanitized }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus('error')
      return
    }

    try {
      const res = await fetch('https://formspree.io/f/mojkevjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', role: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Message envoyé !</h3>
        <p className="text-zinc-400 mb-6">
          Merci pour votre message. On vous répondra dans les 24h.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
            Nom complet <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength={100}
            placeholder="Jean Dupont"
            className="w-full rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
            Email professionnel <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            maxLength={254}
            placeholder="jean@entreprise.fr"
            className="w-full rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
            Entreprise
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            maxLength={100}
            placeholder="Nom de votre entreprise"
            className="w-full rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-zinc-300 mb-2">
            Votre rôle
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-colors"
          >
            <option value="" className="bg-zinc-900">Sélectionner...</option>
            <option value="ceo" className="bg-zinc-900">CEO / Fondateur</option>
            <option value="cmo" className="bg-zinc-900">CMO / Directeur Marketing</option>
            <option value="growth" className="bg-zinc-900">Head of Growth</option>
            <option value="sales" className="bg-zinc-900">Directeur Commercial</option>
            <option value="other" className="bg-zinc-900">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
          Votre projet <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={2000}
          rows={5}
          placeholder="Décrivez votre situation actuelle, vos objectifs et ce que vous cherchez à accomplir..."
          className="w-full rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-colors resize-none"
        />
        <div className="text-right text-xs text-zinc-600 mt-1">
          {formData.message.length}/2000
        </div>
      </div>

      {status === 'error' && (
        <div className="rounded-lg border border-red-900/50 bg-red-900/10 px-4 py-3 text-sm text-red-400">
          Veuillez vérifier vos informations et réessayer.
        </div>
      )}

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full"
        size="lg"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
        {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
      </Button>

      <p className="text-xs text-zinc-600 text-center">
        Vos données sont traitées conformément à notre politique de confidentialité.
        Aucun spam, promis.
      </p>
    </form>
  )
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      {/* Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-violet-600/8 blur-[80px]" />
        </div>
        <ParallaxGrid opacity={0.05} strength={12} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/25 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6">
            <Calendar className="w-3.5 h-3.5" />
            <span>Appel stratégique gratuit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5">
            Parlons de votre
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              acquisition B2B
            </span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            30 minutes pour analyser votre situation et construire ensemble
            votre plan d'action. Sans engagement, entièrement gratuit.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            {/* Calendly CTA */}
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-8 mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-white">
                    Réserver un appel
                  </h2>
                  <p className="text-xs text-zinc-500">30 min · Gratuit · Sans engagement</p>
                </div>
              </div>

              {/* Calendly embed placeholder */}
              <div className="rounded-xl border border-zinc-700/40 bg-zinc-900/60 p-6 text-center mb-5">
                <Calendar className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
                <p className="text-sm text-zinc-500 mb-4">
                  Intégrez votre lien Calendly ici pour permettre la prise
                  de rendez-vous directe.
                </p>
                <Button
                  href="https://calendly.com/reekko"
                  external
                  variant="outline"
                  size="sm"
                >
                  Ouvrir Calendly
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <ul className="space-y-2.5">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct contact */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">
                Contact direct
              </h3>
              <a
                href="mailto:contact@reekko.com"
                className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center group-hover:bg-zinc-700/60 transition-colors">
                  <Mail className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-300">contact@reekko.com</div>
                  <div className="text-xs text-zinc-600">Réponse sous 24h</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/company/reekko"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center group-hover:bg-zinc-700/60 transition-colors">
                  <Linkedin className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-300">LinkedIn</div>
                  <div className="text-xs text-zinc-600">@reekko</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8">
              <div className="flex items-center gap-2 mb-7">
                <MessageSquare className="w-5 h-5 text-indigo-400" />
                <h2 className="text-lg font-semibold text-white">
                  Envoyer un message
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
