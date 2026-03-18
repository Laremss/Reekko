'use client'

import { useState } from 'react'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !trimmed.includes('@') || trimmed.indexOf('@') === trimmed.length - 1) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            email: email.trim(),
            _subject: 'Newsletter Reekko - Nouvelle inscription',
            type: 'newsletter',
          }),
        }
      )
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <CheckCircle className="w-10 h-10 text-green-400 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-lg font-bold text-white mb-2">Vous êtes inscrit !</h3>
        <p className="text-zinc-400 text-sm">
          Prochain article directement dans votre boîte. Zéro spam.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-8">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0" aria-hidden="true" />
        <h3 className="text-lg font-bold text-white">
          Restez à la pointe de l&apos;acquisition B2B
        </h3>
      </div>
      <p className="text-zinc-400 text-sm mb-6">
        Conseils pratiques, guides et ressources, directement dans votre boîte.{' '}
        <span className="text-zinc-500">Zéro spam, désabonnement en un clic.</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
          placeholder="votre@email.pro"
          required
          className="flex-1 rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors disabled:opacity-60 flex-shrink-0"
        >
          {status === 'loading' ? 'Inscription...' : "S'abonner"}
          {status !== 'loading' && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-red-400 mt-2">Adresse email invalide. Réessayez.</p>
      )}
    </div>
  )
}
