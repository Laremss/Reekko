import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://www.reekko.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Reekko',
    default: 'Reekko | Automatisez votre acquisition B2B',
  },
  description:
    "Reekko conçoit des systèmes d'acquisition automatisés pour aider les entreprises B2B à générer davantage d'opportunités commerciales grâce au growth marketing.",
  keywords: [
    'growth marketing',
    'automatisation acquisition',
    'prospection B2B',
    'acquisition B2B',
    'génération de leads B2B',
    'growth hacking',
    'marketing automation',
    'lead generation',
  ],
  authors: [{ name: 'Reekko', url: siteUrl }],
  creator: 'Reekko',
  publisher: 'Reekko',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Reekko',
    title: 'Reekko | Automatisez votre acquisition B2B',
    description:
      "Reekko conçoit des systèmes d'acquisition automatisés pour aider les entreprises B2B à générer davantage d'opportunités commerciales.",
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Reekko | Growth Marketing & Automatisation B2B',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@reekko',
    creator: '@reekko',
    title: 'Reekko | Automatisez votre acquisition B2B',
    description:
      "Systèmes d'acquisition automatisés pour entreprises B2B. Growth marketing & lead generation.",
    images: ['/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  colorScheme: 'dark',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = (await headers()).get('x-nonce') ?? ''

  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Reekko',
              url: siteUrl,
              logo: `${siteUrl}/logo.svg`,
              description:
                "Reekko conçoit des systèmes d'acquisition automatisés pour aider les entreprises B2B à générer davantage d'opportunités commerciales.",
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'contact.reekko@gmail.com',
                availableLanguage: 'French',
              },
              sameAs: [
                'https://twitter.com/reekko',
                'https://linkedin.com/company/reekko',
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-50 min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTB9Z635"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TTB9Z635');`,
          }}
        />
      </body>
    </html>
  )
}
