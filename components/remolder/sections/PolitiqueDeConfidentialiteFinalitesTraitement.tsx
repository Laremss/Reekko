export interface FinalitesTraitementProps {
  titre?: string;
  finalites?: {
    base: string;
    finalite: string;
  }[];
}

const FINALITES_TRAITEMENT_DEFAULTS = {
  titre: '2. Finalités du traitement',
  finalites: [
    { base: 'Intérêt légitime', finalite: 'Répondre aux demandes de contact et de devis' },
    { base: 'Intérêt légitime', finalite: 'Mesurer et améliorer les performances du site (analytics anonymisés)' },
    { base: 'Obligation légale', finalite: 'Conservation des données requises par la loi' },
  ],
};

export default function FinalitesTraitement(props: FinalitesTraitementProps) {
  const { titre, finalites } = { ...FINALITES_TRAITEMENT_DEFAULTS, ...props } as typeof FINALITES_TRAITEMENT_DEFAULTS;

  return (
    <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {titre}
                </h2>
                <div className="space-y-3">
                  {finalites.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
                        {item.base}
                      </span>
                      <span className="text-zinc-400 leading-relaxed">{item.finalite}</span>
                    </div>
                  ))}
                </div>
              </section>
  )
}
