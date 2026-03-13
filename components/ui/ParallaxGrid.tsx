'use client'

import { useRef, useEffect } from 'react'

interface ParallaxGridProps {
  opacity?: number
  strength?: number // conservé pour compatibilité, non utilisé
  zoom?: number     // conservé pour compatibilité, non utilisé
}

const GRID    = 50   // taille des cellules en px
const SEG     = 48   // segments par ligne (+ = plus lisse)
const RADIUS  = 260  // rayon de la loupe en px
const POWER   = 0.65 // intensité de la distorsion (0–1)
const LERP    = 0.06 // fluidité du suivi (0 = immobile, 1 = instantané)

export default function ParallaxGrid({ opacity = 0.05 }: ParallaxGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const section = canvas.parentElement
    if (!section) return

    let animId = 0
    const target  = { x: -9999, y: -9999 }
    const current = { x: -9999, y: -9999 }

    // ── Resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = section.offsetWidth
      canvas.height = section.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(section)

    // ── Mouse ────────────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
    }
    const onMouseLeave = () => { target.x = -9999; target.y = -9999 }

    // ── Distorsion fisheye ───────────────────────────────────────────────────
    // Chaque point (x,y) de la grille est repoussé radialement depuis le curseur.
    // L'intensité est maximale au centre et s'annule progressivement à RADIUS px.
    const distort = (x: number, y: number): [number, number] => {
      const dx = x - current.x
      const dy = y - current.y
      const r2 = dx * dx + dy * dy
      if (r2 >= RADIUS * RADIUS) return [x, y]
      const t     = Math.sqrt(r2) / RADIUS          // 0 au centre → 1 au bord
      const bulge = POWER * (1 - t) * (1 - t) * (1 - t * t) // courbe douce
      return [
        current.x + dx * (1 + bulge),
        current.y + dy * (1 + bulge),
      ]
    }

    // ── Boucle de rendu ──────────────────────────────────────────────────────
    const draw = () => {
      // Lerp fluide vers la position cible
      current.x += (target.x - current.x) * LERP
      current.y += (target.y - current.y) * LERP

      const W = canvas.width
      const H = canvas.height

      ctx.clearRect(0, 0, W, H)
      ctx.strokeStyle = `rgba(255,255,255,${opacity})`
      ctx.lineWidth   = 1

      // Lignes verticales
      for (let gx = 0; gx <= W + GRID; gx += GRID) {
        ctx.beginPath()
        for (let i = 0; i <= SEG; i++) {
          const gy = (i / SEG) * (H + GRID) - GRID
          const [px, py] = distort(gx, gy)
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      // Lignes horizontales
      for (let gy = 0; gy <= H + GRID; gy += GRID) {
        ctx.beginPath()
        for (let i = 0; i <= SEG; i++) {
          const gx = (i / SEG) * (W + GRID) - GRID
          const [px, py] = distort(gx, gy)
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [opacity])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  )
}
