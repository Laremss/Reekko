'use client'

import { useState } from 'react'
import { Calendar, Mail, MessageSquare, CheckCircle, ArrowRight, Linkedin } from 'lucide-react'
import Button from '@/components/ui/Button'

interface ReserverAppelProps {
  bookingTitle?: string
  bookingSubtitle?: string
  bookingLink?: string
  bookingCTAText?: string
  bookingDetails?: string[]
  benefits?: string[]
  emailAddress?: string
  emailHref?: string
  emailResponseTime?: string
  linkedinUrl?: string
  linkedinHandle?: string
  formTitle?: string
  successMessage?: string
  successSubtext?: string
  privacyText?: string
  bookingMainTitle?: string
  bookingMainSubtitle?: string
  contactDirectLabel?: string
}

const RESERVERAPPEL_DEFAULTS: ReserverAppelProps = {
  bookingTitle: 'Réserver un appel',
  bookingSubtitle: '30 min · Gratuit · Sans engagement',
  bookingLink: 'https://cal.eu/remi-bitouze-yddgcx/30min',
  bookingCTAText: 'Choisir un créneau →',
  bookingDetails: ['Lun - Ven', 'Matin & après-midi', 'Visio ou téléphone', 'Réponse sous 24h'],
  benefits: [
    'Analyse de votre acquisition actuelle',
    'Identification des opportunités de croissance',
    'Plan d\'action personnalisé et concret',
    'Zéro engagement, 100% gratuit',
  ],
  emailAddress: 'contact.reekko@gmail.com',
  emailHref: 'mailto:contact.reekko@gmail.com',
  emailResponseTime: 'Réponse sous 24h',
  linkedinUrl: 'https://linkedin.com/company/reekko',
  linkedinHandle: '@reekko',
  formTitle: 'Envoyer un message',
  successMessage: 'Message envoyé !',
  successSubtext: 'Merci pour votre message. On vous répondra dans les 24h.',
  privacyText: 'Vos données sont traitées conformément à notre politique de confidentialité.\nAucun spam, promis.',
  bookingMainTitle: 'Appel stratégique',
  bookingMainSubtitle: '30 min · Gratuit · Sans engagement',
  contactDirectLabel: 'Contact direct',
}

function ContactForm({ successMessage, successSubtext, privacyText }: Partial<ReserverAppelProps>) {
  const { successMessage: finalSuccessMessage, successSubtext: finalSuccessSubtext, privacyText: finalPrivacyText } = {
    ...RESERVERAPPEL_DEFAULTS,
    successMessage,
    successSubtext,
    privacyText,
  }

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
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
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
        <h3 className="text-xl font-bold text-white mb-3">{finalSuccessMessage}</h3>
        <p className="text-zinc-400 mb-6">
          {finalSuccessSubtext}
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
        {status === 'loading' ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </>
        )}
      </Button>

      <p className="text-xs text-zinc-600 text-center">
        {finalPrivacyText}
      </p>
    </form>
  )
}

export default function ReserverAppel(props: ReserverAppelProps = {}) {
  const {
    bookingTitle,
    bookingSubtitle,
    bookingLink,
    bookingCTAText,
    bookingDetails,
    benefits,
    emailAddress,
    emailHref,
    emailResponseTime,
    linkedinUrl,
    linkedinHandle,
    formTitle,
    successMessage,
    successSubtext,
    privacyText,
    bookingMainTitle,
    bookingMainSubtitle,
    contactDirectLabel,
  } = { ...RESERVERAPPEL_DEFAULTS, ...props }

  return (
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
                  {bookingTitle}
                </h2>
                <p className="text-xs text-zinc-500">{bookingSubtitle}</p>
              </div>
            </div>

            {/* Cal.eu booking CTA */}
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col w-full rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-500/10 to-violet-500/5 hover:from-indigo-500/15 hover:to-violet-500/10 hover:border-indigo-500/40 transition-all duration-300 p-6 mb-5 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl group-hover:bg-indigo-500/20 transition-all duration-500 pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{bookingMainTitle}</div>
                    <div className="text-xs text-zinc-400">{bookingMainSubtitle}</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" />
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {bookingDetails?.map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="w-full rounded-xl bg-indigo-500 group-hover:bg-indigo-400 transition-colors py-3 text-center text-sm font-semibold text-white">
                {bookingCTAText}
              </div>
            </a>

            <ul className="space-y-2.5">
              {benefits?.map((benefit, i) => (
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
              {contactDirectLabel}
            </h3>
            <a
              href={emailHref}
              className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center group-hover:bg-zinc-700/60 transition-colors">
                <Mail className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-300">{emailAddress}</div>
                <div className="text-xs text-zinc-600">{emailResponseTime}</div>
              </div>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4 hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-800/60 flex items-center justify-center group-hover:bg-zinc-700/60 transition-colors">
                <Linkedin className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <div className="text-sm font-medium text-zinc-300">LinkedIn</div>
                <div className="text-xs text-zinc-600">{linkedinHandle}</div>
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
                {formTitle}
              </h2>
            </div>
            <ContactForm 
              successMessage={successMessage}
              successSubtext={successSubtext}
              privacyText={privacyText}
            />
          </div>
        </div>
      </div>
    </div>
  )
}