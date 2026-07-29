
interface QuestionsFrequentesProps {
  title?: string;
  items?: Array<{
    q: string;
    r: string;
  }>;
}

const QUESTIONSFRÉQUENTES_DEFAULTS = {
  title: 'Questions fréquentes',
  items: [
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

export default function QuestionsFrequentes(props: QuestionsFrequentesProps = {}) {
  const { title, items } = { ...QUESTIONSFRÉQUENTES_DEFAULTS, ...props };

  return (
    <section className="py-20 sm:py-28 bg-zinc-950 border-t border-zinc-800/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-6">
              <h3 className="text-base font-semibold text-white mb-3">{item.q}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
