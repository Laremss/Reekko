'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de page"
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700/60 text-zinc-400 hover:text-white hover:bg-zinc-700 hover:border-zinc-600 transition-all shadow-lg shadow-black/30 flex items-center justify-center"
    >
      <ArrowUp className="w-4 h-4" aria-hidden="true" />
    </button>
  )
}
