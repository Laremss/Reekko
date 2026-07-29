import BlockList from '@/components/remolder/BlockList'
import { committedPage } from '@/lib/remolder/data'
import __remolderContent from '@/remolder/published.json'
import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ServicesSection from '@/components/sections/ServicesSection'
import CredibilitySection from '@/components/sections/CredibilitySection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Reekko | Automatisez votre acquisition B2B',
  description:
    "Reekko conçoit des systèmes d'acquisition automatisés pour aider les startups, SaaS et agences B2B à générer davantage d'opportunités commerciales grâce au growth marketing.",
  alternates: {
    canonical: 'https://www.reekko.com',
  },
}



function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <CredibilitySection />
      <CTASection />
    </>
  )
}

export default function RemolderPage() {
  const __published = committedPage(__remolderContent, "/")
  if (__published) {
    return (
      <>
        <BlockList blocks={__published.blocks} tokens={__published.tokens} />
      </>
    )
  }
  // Repli sûr : composition d'origine, inchangée.
  return <HomePage />
}

