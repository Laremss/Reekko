'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-zinc-950 pt-16 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-amber-500" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Erreur de chargement</h2>
        <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
          Impossible de charger cette page du blog. Réessayez ou consultez
          nos autres articles.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Réessayer
          </button>
          <Link
            href="/blog"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Voir tous les articles
          </Link>
        </div>
      </div>
    </div>
  )
}
