'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void
  }
}

interface CalEmbedProps {
  calLink: string      // ex: "remi-bitouze-yddgcx/30min"
  origin?: string      // ex: "https://cal.eu"
  height?: number
}

export default function CalEmbed({
  calLink,
  origin = 'https://cal.eu',
  height = 620,
}: CalEmbedProps) {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    // Charge embed.js dynamiquement — autorisé par strict-dynamic
    // car ce script est créé par le bundle Next.js (qui a le nonce)
    const script = document.createElement('script')
    script.src = `${origin.replace('cal.eu', 'app.cal.eu').replace('cal.com', 'app.cal.com')}/embed/embed.js`
    script.async = true

    script.onload = () => {
      if (!window.Cal) return
      window.Cal('init', { origin })
      window.Cal('inline', {
        elementOrSelector: '#cal-inline-embed',
        calLink,
        layout: 'month_view',
      })
      window.Cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [calLink, origin])

  return (
    <div
      id="cal-inline-embed"
      style={{ width: '100%', height: `${height}px`, overflow: 'auto' }}
      className="rounded-xl"
    />
  )
}
