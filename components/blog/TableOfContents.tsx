'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { List } from 'lucide-react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0% -70% 0%',
        threshold: 0,
      }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-5">
      <div className="flex items-center gap-2 mb-4 text-zinc-300 font-semibold text-sm">
        <List className="w-4 h-4" />
        <span>Table des matières</span>
      </div>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById(heading.id)
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  window.history.pushState(null, '', `#${heading.id}`)
                }
              }}
              className={cn(
                'block py-1 text-sm leading-snug transition-colors duration-200 border-l-2 pl-3',
                activeId === heading.id
                  ? 'text-indigo-400 border-indigo-500'
                  : 'text-zinc-500 hover:text-zinc-300 border-transparent hover:border-zinc-700'
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
