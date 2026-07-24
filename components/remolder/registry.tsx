// [Remolder] Registre de blocs : type -> composant de section (généré au montage).
import type { ComponentType } from 'react'
import CredibilitySection from '@/components/sections/CredibilitySection'
import CTASection from '@/components/sections/CTASection'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import AProposPourquoiReekko from '@/components/remolder/sections/AProposPourquoiReekko'
import AProposValeurs from '@/components/remolder/sections/AProposValeurs'
import AProposExpertise from '@/components/remolder/sections/AProposExpertise'
import AProposAcquisitionMeriteMieux from '@/components/remolder/sections/AProposAcquisitionMeriteMieux'
import AgenceGrowthMarketingRennesSection1 from '@/components/remolder/sections/AgenceGrowthMarketingRennesSection1'
import AgenceGrowthMarketingRennesSection2 from '@/components/remolder/sections/AgenceGrowthMarketingRennesSection2'
import AgenceGrowthMarketingRennesAcquisitionB2b from '@/components/remolder/sections/AgenceGrowthMarketingRennesAcquisitionB2b'
import AgenceGrowthMarketingRennesPourquoiChoisirReekko from '@/components/remolder/sections/AgenceGrowthMarketingRennesPourquoiChoisirReekko'
import AgenceGrowthMarketingRennesSection5 from '@/components/remolder/sections/AgenceGrowthMarketingRennesSection5'
import AgenceGrowthMarketingRennesGrowthMarketingB2b from '@/components/remolder/sections/AgenceGrowthMarketingRennesGrowthMarketingB2b'
import AgenceGrowthMarketingRennesQuestionsFrequentes from '@/components/remolder/sections/AgenceGrowthMarketingRennesQuestionsFrequentes'
import AgenceGrowthMarketingRennesSection8 from '@/components/remolder/sections/AgenceGrowthMarketingRennesSection8'
import BlogBlogGrowthMarketing from '@/components/remolder/sections/BlogBlogGrowthMarketing'
import ContactParlons from '@/components/remolder/sections/ContactParlons'
import ContactReserverAppel from '@/components/remolder/sections/ContactReserverAppel'
import MentionsLegalesMentionsLegales from '@/components/remolder/sections/MentionsLegalesMentionsLegales'
import MentionsLegalesEditeurSite from '@/components/remolder/sections/MentionsLegalesEditeurSite'
import MethodeEtapesConstruire from '@/components/remolder/sections/MethodeEtapesConstruire'
import MethodeSection2 from '@/components/remolder/sections/MethodeSection2'
import MethodePhaseTitle from '@/components/remolder/sections/MethodePhaseTitle'
import MethodeSection4 from '@/components/remolder/sections/MethodeSection4'
import PolitiqueDeConfidentialitePolitiqueConfidentialite from '@/components/remolder/sections/PolitiqueDeConfidentialitePolitiqueConfidentialite'
import PolitiqueDeConfidentialiteDonneesCollectees from '@/components/remolder/sections/PolitiqueDeConfidentialiteDonneesCollectees'
import ServicesSection1 from '@/components/remolder/sections/ServicesSection1'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BLOCK_REGISTRY: Record<string, ComponentType<any>> = {
  Credibility: CredibilitySection,
  CTA: CTASection,
  Hero: HeroSection,
  Problem: ProblemSection,
  Solution: SolutionSection,
  AProposPourquoiReekko,
  AProposValeurs,
  AProposExpertise,
  AProposAcquisitionMeriteMieux,
  AgenceGrowthMarketingRennesSection1,
  AgenceGrowthMarketingRennesSection2,
  AgenceGrowthMarketingRennesAcquisitionB2b,
  AgenceGrowthMarketingRennesPourquoiChoisirReekko,
  AgenceGrowthMarketingRennesSection5,
  AgenceGrowthMarketingRennesGrowthMarketingB2b,
  AgenceGrowthMarketingRennesQuestionsFrequentes,
  AgenceGrowthMarketingRennesSection8,
  BlogBlogGrowthMarketing,
  ContactParlons,
  ContactReserverAppel,
  MentionsLegalesMentionsLegales,
  MentionsLegalesEditeurSite,
  MethodeEtapesConstruire,
  MethodeSection2,
  MethodePhaseTitle,
  MethodeSection4,
  PolitiqueDeConfidentialitePolitiqueConfidentialite,
  PolitiqueDeConfidentialiteDonneesCollectees,
  ServicesSection1,
}
