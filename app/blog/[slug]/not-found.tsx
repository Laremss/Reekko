import Link from 'next/link'
import { ArrowLeft, FileQuestion } from 'lucide-react'

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8 text-zinc-600" aria-hidden="true" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Article introuvable</h1>
        <p className="text-zinc-400 mb-8 max-w-sm mx-auto">
          Cet article n&apos;existe pas ou a été déplacé. Consultez le blog pour
          découvrir nos autres ressources.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Retour au blog
        </Link>
      </div>
    </div>
  )
}
