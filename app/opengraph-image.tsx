import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Reekko | Acquisition B2B automatisée'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow ambient en arrière-plan */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(124,58,237,0.10) 40%, transparent 70%)',
          }}
        />

        {/* Logo + nom */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            position: 'relative',
          }}
        >
          {/* Icône */}
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 60px rgba(99,102,241,0.5), 0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Zap SVG inline */}
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>

          {/* Nom */}
          <div
            style={{
              fontSize: '80px',
              fontWeight: '800',
              color: 'white',
              letterSpacing: '-3px',
              lineHeight: 1,
            }}
          >
            Reekko
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '26px',
              color: 'rgba(161,161,170,1)',
              letterSpacing: '-0.5px',
              textAlign: 'center',
              maxWidth: '700px',
              lineHeight: 1.4,
            }}
          >
            Acquisition B2B automatisée · Pipeline automatisé, croissance maîtrisée
          </div>
        </div>

        {/* Ligne décorative bas */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, #6366f1 30%, #7c3aed 70%, transparent 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
