// [Remolder] Registre de blocs : type -> composant de section (généré au montage).
import type { ComponentType } from 'react'
import ContactReserverAppel from '@/components/remolder/sections/ContactReserverAppel'
import MentionsLegalesMentionsLegales from '@/components/remolder/sections/MentionsLegalesMentionsLegales'
import MentionsLegalesHebergeur from '@/components/remolder/sections/MentionsLegalesHebergeur'
import MentionsLegalesProprieteIntellectuelle from '@/components/remolder/sections/MentionsLegalesProprieteIntellectuelle'
import MentionsLegalesSection5 from '@/components/remolder/sections/MentionsLegalesSection5'
import MentionsLegalesLiensHypertextes from '@/components/remolder/sections/MentionsLegalesLiensHypertextes'
import MentionsLegalesDroitApplicable from '@/components/remolder/sections/MentionsLegalesDroitApplicable'
import MentionsLegalesSection8 from '@/components/remolder/sections/MentionsLegalesSection8'
import PolitiqueDeConfidentialitePolitiqueConfidentialite from '@/components/remolder/sections/PolitiqueDeConfidentialitePolitiqueConfidentialite'
import PolitiqueDeConfidentialiteSection2 from '@/components/remolder/sections/PolitiqueDeConfidentialiteSection2'
import PolitiqueDeConfidentialiteDonneesCollectees from '@/components/remolder/sections/PolitiqueDeConfidentialiteDonneesCollectees'
import PolitiqueDeConfidentialiteFinalitesTraitement from '@/components/remolder/sections/PolitiqueDeConfidentialiteFinalitesTraitement'
import PolitiqueDeConfidentialiteDureeConservation from '@/components/remolder/sections/PolitiqueDeConfidentialiteDureeConservation'
import PolitiqueDeConfidentialitePartageDonnees from '@/components/remolder/sections/PolitiqueDeConfidentialitePartageDonnees'
import PolitiqueDeConfidentialiteCookies from '@/components/remolder/sections/PolitiqueDeConfidentialiteCookies'
import PolitiqueDeConfidentialiteDroits from '@/components/remolder/sections/PolitiqueDeConfidentialiteDroits'
import PolitiqueDeConfidentialiteSection9 from '@/components/remolder/sections/PolitiqueDeConfidentialiteSection9'
import ServicesAcquisition from '@/components/remolder/sections/ServicesAcquisition'
import ServicesSection2 from '@/components/remolder/sections/ServicesSection2'
import ServicesCommentCaSe from '@/components/remolder/sections/ServicesCommentCaSe'
import ServicesSection4 from '@/components/remolder/sections/ServicesSection4'
import ServicesInvestissement from '@/components/remolder/sections/ServicesInvestissement'
import ServicesQuestionsFrequentes from '@/components/remolder/sections/ServicesQuestionsFrequentes'
import ServicesSection7 from '@/components/remolder/sections/ServicesSection7'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BLOCK_REGISTRY: Record<string, ComponentType<any>> = {
  ContactReserverAppel,
  MentionsLegalesMentionsLegales,
  MentionsLegalesHebergeur,
  MentionsLegalesProprieteIntellectuelle,
  MentionsLegalesSection5,
  MentionsLegalesLiensHypertextes,
  MentionsLegalesDroitApplicable,
  MentionsLegalesSection8,
  PolitiqueDeConfidentialitePolitiqueConfidentialite,
  PolitiqueDeConfidentialiteSection2,
  PolitiqueDeConfidentialiteDonneesCollectees,
  PolitiqueDeConfidentialiteFinalitesTraitement,
  PolitiqueDeConfidentialiteDureeConservation,
  PolitiqueDeConfidentialitePartageDonnees,
  PolitiqueDeConfidentialiteCookies,
  PolitiqueDeConfidentialiteDroits,
  PolitiqueDeConfidentialiteSection9,
  ServicesAcquisition,
  ServicesSection2,
  ServicesCommentCaSe,
  ServicesSection4,
  ServicesInvestissement,
  ServicesQuestionsFrequentes,
  ServicesSection7,
}
