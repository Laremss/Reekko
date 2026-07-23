
import { ReactNode } from 'react'

interface Section1Props {
  faqs?: Array<{
    question: string
    answer: string
  }>
}

const SECTION1_DEFAULTS = {
  faqs: [
    {
      question: 'Combien de temps dure le sprint ?',
      answer:
        'Le sprint dure généralement entre 4 et 6 semaines selon la complexité de votre acquisition et vos objectifs. Nous travaillons de manière intensive pour vous fournir un système opérationnel le plus rapidement possible.',
    },
    {
      question: 'Quels types d\'entreprises accompagnez-vous ?',
      answer:
        'Nous accompagnons principalement les startups B2B, les SaaS, les agences et les PME tech qui souhaitent structurer et automatiser leur acquisition. Le sprint est particulièrement adapté aux entreprises en phase de croissance.',
    },
    {
      question: 'Quels outils utilisez-vous ?',
      answer:
        'Nous adaptons les outils à votre situation et votre budget. Nous travaillons avec les principaux outils du marché : Apollo, Lemlist, La Growth Machine, HubSpot, Pipedrive, et bien d\'autres selon vos besoins.',
    },
    {
      question: 'Quels résultats peut-on espérer ?',
      answer:
        'Les résultats dépendent de votre marché, de votre offre et de la qualité de votre ICP. Les clients qui suivent le processus complet constatent une réduction de leur coût par lead et une augmentation du volume de prospects qualifiés, généralement visible à partir du deuxième mois après le sprint.',
    },
    {
      question: 'Y a-t-il un suivi après le sprint ?',
      answer:
        'Oui, nous assurons un suivi post-sprint avec des sessions de revue de performance. Des offres d\'accompagnement continu sont disponibles pour les entreprises souhaitant aller plus loin.',
    },
  ],
}

export default function Section1(props: Section1Props) {
  const { faqs } = { ...SECTION1_DEFAULTS, ...props }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
