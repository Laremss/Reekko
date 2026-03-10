'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type ComponentProps } from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  onClick,
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap'

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-400 hover:to-violet-500 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/60 active:bg-zinc-800',
    ghost:
      'text-zinc-400 hover:text-white hover:bg-zinc-800/60 active:bg-zinc-800',
    secondary:
      'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white active:bg-zinc-800',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
