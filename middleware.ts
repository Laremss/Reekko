import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  const csp = [
    `default-src 'self'`,
    // 'strict-dynamic' : les scripts chargés par un script avec nonce sont autorisés (chunks Next.js)
    // Pas d'unsafe-inline : le nonce suffit pour les scripts légitimes
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com`,
    `font-src 'self'`,
    `connect-src 'self' https://formspree.io https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://region1.google-analytics.com https://reekko.matomo.cloud https://cal.eu https://app.cal.eu`,
    `frame-src https://cal.com https://app.cal.com https://cal.eu https://app.cal.eu`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self' https://formspree.io`,
    `frame-ancestors 'self' https://remolder.com https://www.remolder.com https://*.remolder.com https://*.vercel.app http://localhost:3001 `,
    `upgrade-insecure-requests`,
  ].join('; ')

  // On transmet le nonce au layout via header de requête
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  })

  // CSP sur la réponse HTTP
  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: [
    {
      // Exclure les assets statiques (pas besoin de nonce)
      source: '/((?!_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
