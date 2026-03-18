import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Reekko',
  description:
    'Prenez contact avec Reekko pour structurer et automatiser votre acquisition B2B. Premier appel stratégique gratuit et sans engagement.',
  alternates: {
    canonical: 'https://www.reekko.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
