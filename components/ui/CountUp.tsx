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
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const startAnimation = () => {
      if (started.current) return
      started.current = true

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
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation()
          observer.unobserve(el)
        }
      },
      { threshold: 0 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId.current)
      started.current = false
    }
  }, [numeric, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
