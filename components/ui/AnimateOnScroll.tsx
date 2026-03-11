'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimateOnScrollProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'
    el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
