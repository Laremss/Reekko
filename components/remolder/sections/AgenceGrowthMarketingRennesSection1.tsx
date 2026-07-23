const siteUrl = 'https://www.reekko.com'
const pageUrl = `${siteUrl}/agence-growth-marketing-rennes`

interface Section1Props {
  siteUrl?: string
  pageUrlPath?: string
  businessName?: string
  businessDescription?: string
  businessEmail?: string
  addressLocality?: string
  addressRegion?: string
  addressCountry?: string
  latitude?: number
  longitude?: number
  areaServed?: Array<{ type: string; name: string }>
  serviceTypes?: string[]
  priceRange?: string
}

const SECTION1_DEFAULTS = {
  siteUrl: 'https://www.reekko.com',
  pageUrlPath: '/agence-growth-marketing-rennes',
  businessName: 'Reekko | Agence Growth Marketing Rennes',
  businessDescription: "Agence growth marketing B2B basée à Rennes. Spécialisée dans l'acquisition automatisée et la prospection B2B pour startups et PME.",
  businessEmail: 'contact@reekko.com',
  addressLocality: 'Rennes',
  addressRegion: 'Bretagne',
  addressCountry: 'FR',
  latitude: 48.1173,
  longitude: -1.6778,
  areaServed: [
    { type: 'City', name: 'Rennes' },
    { type: 'AdministrativeArea', name: 'Bretagne' },
    { type: 'AdministrativeArea', name: 'Pays de la Loire' },
  ],
  serviceTypes: [
    'Growth Marketing B2B',
    'Automatisation de la prospection',
    'Acquisition de leads B2B',
    'Outbound marketing',
    'Marketing automation',
  ],
  priceRange: '€€€',
}

export default function Section1(props: Section1Props = {}) {
  const {
    siteUrl,
    pageUrlPath,
    businessName,
    businessDescription,
    businessEmail,
    addressLocality,
    addressRegion,
    addressCountry,
    latitude,
    longitude,
    areaServed,
    serviceTypes,
    priceRange,
  } = { ...SECTION1_DEFAULTS, ...props }

  const fullPageUrl = `${siteUrl}${pageUrlPath}`

  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': fullPageUrl,
    name: businessName,
    description: businessDescription,
    url: siteUrl,
    email: businessEmail,
    address: {
      '@type': 'PostalAddress',
      addressLocality,
      addressRegion,
      addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    areaServed: areaServed.map(area => ({
      '@type': area.type,
      name: area.name,
    })),
    serviceType: serviceTypes,
    priceRange,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
    />
  )
}