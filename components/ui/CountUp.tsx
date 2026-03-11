'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  className?: string
  duration?: number
}

function parseStatValue(value: string) {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { prefix: '', numeric: 0, suffix: value }
  return { prefix: match[1], numeric: parseFloat(match[2]), suffix: match[3] }
}

export default function CountUp({ value, className, duration = 1600 }: CountUpProps) {
  const { prefix, numeric, suffix } = parseStatValue(value)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const rafId = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Local flag per effect run — each closure owns its own `alive`
    // Cleanup sets it to false, so any pending rAF or observer callback is a no-op
    let alive = true

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || !alive) return
        alive = false // prevent double-fire
        observer.unobserve(el)

        const startTime = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * numeric))
          if (progress < 1) {
            rafId.current = requestAnimationFrame(tick)
          }
        }
        rafId.current = requestAnimationFrame(tick)
      },
      { threshold: 0 }
    )

    observer.observe(el)

    return () => {
      alive = false
      observer.disconnect()
      cancelAnimationFrame(rafId.current)
    }
  }, [numeric, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
