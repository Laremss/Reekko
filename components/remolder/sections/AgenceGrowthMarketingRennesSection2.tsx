interface Section2Props {
  faqItems?: Array<{
    q: string;
    r: string;
  }>;
}

const SECTION2_DEFAULTS = {
  faqItems: [
    {
      q: 'Reekko est-elle une agence basée à Rennes ?',
      r: 'Oui, Reekko opère depuis Rennes et accompagne principalement des entreprises B2B bretonnes et du Grand Ouest. Nous connaissons bien le tissu économique local et pouvons intervenir en présentiel si besoin.',
    },
    {
      q: 'Quel type d\'entreprises accompagnez-vous à Rennes ?',
      r: 'Nous travaillons avec des startups SaaS, des agences B2B, des ESN et des PME industrielles ou tech situées à Rennes et en Bretagne. Notre critère principal : vous vendez à d\'autres entreprises et voulez structurer votre acquisition.',
    },
    {
      q: 'En combien de temps verrai-je les premiers résultats ?',
      r: 'Notre Sprint Acquisition est calibré pour 4 semaines. La plupart de nos clients obtiennent leurs premiers rendez-vous qualifiés dans les 3 à 4 semaines suivant le lancement des premières séquences.',
    },
    {
      q: 'Quels budgets faut-il prévoir ?',
      r: 'Le tarif est défini sur mesure selon vos besoins, la complexité du projet et les canaux à activer. Nous privilégions la transparence : tout est chiffré dès le premier échange, sans retainer opaque ni engagement long terme par défaut. Réservez un appel pour obtenir une proposition adaptée à votre situation.',
    },
    {
      q: 'Intervenez-vous uniquement sur Rennes ou aussi en dehors ?',
      r: 'Nous accompagnons des clients partout en France, mais notre ancrage rennais nous permet d\'être particulièrement réactifs pour les entreprises du Grand Ouest (Bretagne, Pays de la Loire, Normandie).',
    },
  ],
};

export default function Section2(props: Section2Props = {}) {
  const { faqItems } = { ...SECTION2_DEFAULTS, ...props };

  const faq = faqItems;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.r,
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