import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') ?? 'Automatisez votre acquisition B2B'
  const subtitle = searchParams.get('sub') ?? 'Growth Marketing & Automatisation B2B'

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          padding: '70px 90px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 65%)',
          }}
        />

        {/* Glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Logo + Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              marginBottom: '44px',
            }}
          >
            {/* Logo SVG */}
            <svg viewBox="0 0 100 100" fill="none" width="56" height="56">
              <rect width="100" height="100" rx="22" fill="url(#ogbg)" />
              <defs>
                <linearGradient id="ogbg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <rect x="18" y="15" width="14" height="70" rx="3" fill="white" />
              <path d="M82,15 L26,50 L82,85 L82,71 L46,50 L82,29 Z" fill="white" />
            </svg>
            <span
              style={{
                fontSize: '34px',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              Reekko
            </span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: title.length > 55 ? '46px' : '58px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              marginBottom: '22px',
              maxWidth: '980px',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '22px',
              color: '#71717a',
              fontWeight: 400,
              letterSpacing: '0px',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
