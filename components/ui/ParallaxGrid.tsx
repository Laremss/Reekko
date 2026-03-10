'use client'

import { useRef, useEffect } from 'react'

interface ParallaxGridProps {
  /** Opacity of grid lines (0–1) */
  opacity?: number
  /** Max px translation at screen edges */
  strength?: number
  /** Max scale increase at corners (e.g. 0.018 = 1.8%) */
  zoom?: number
}

export default function ParallaxGrid({
  opacity = 0.05,
  strength = 14,
  zoom = 0.018,
}: ParallaxGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const section = grid.parentElement
    if (!section) return

    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const mx = (e.clientX - rect.left) / rect.width - 0.5
        const my = (e.clientY - rect.top) / rect.height - 0.5
        const tx = mx * strength
        const ty = my * strength
        const distance = Math.min(Math.sqrt(mx * mx + my * my) / 0.707, 1)
        const scale = 1 + distance * zoom
        grid.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`
      })
    }

    const onMouseLeave = () => {
      cancelAnimationFrame(rafId)
      grid.style.transform = 'translate(0px, 0px) scale(1)'
    }

    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(rafId)
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [strength, zoom])

  return (
    <div
      ref={gridRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: '-24px',
        pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(255,255,255,${opacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${opacity}) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        transition: 'transform 0.2s ease-out',
        willChange: 'transform',
        transformOrigin: 'center center',
      }}
    />
  )
}
