import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '404 — Page introuvable',
  description: 'La page que vous cherchez n\'existe pas.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
      </div>

      <div className="relative z-10 text-center max-w-lg">
        <div className="text-8xl font-black text-zinc-800 mb-6">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page introuvable</h1>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          La page que vous cherchez n'existe pas ou a été déplacée. Retournez à
          l'accueil ou explorez notre blog.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Button>
          <Button variant="outline" href="/blog">
            Voir le blog
          </Button>
        </div>
      </div>
    </div>
  )
}
