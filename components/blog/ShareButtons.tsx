'use client'

import { useState } from 'react'
import { Twitter, Linkedin, Link2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const copyLink = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-zinc-500 text-sm">Partager :</span>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60 transition-all"
        aria-label="Partager sur Twitter"
      >
        <Twitter size={15} />
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60 transition-all"
        aria-label="Partager sur LinkedIn"
      >
        <Linkedin size={15} />
      </a>

      <button
        onClick={copyLink}
        className={cn(
          'w-9 h-9 rounded-lg border flex items-center justify-center transition-all',
          copied
            ? 'border-green-700/50 bg-green-900/20 text-green-400'
            : 'border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60'
        )}
        aria-label="Copier le lien"
      >
        {copied ? <Check size={15} /> : <Link2 size={15} />}
      </button>
    </div>
  )
}
