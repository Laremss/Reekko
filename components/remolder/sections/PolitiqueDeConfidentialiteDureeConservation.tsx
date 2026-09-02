export interface DureeConservationProps {
  titre?: string;
  items?: {
    label: string;
    texte: string;
  }[];
}

const DUREECONSERVATION_DEFAULTS = {
  titre: "3. Durée de conservation",
  items: [
    {
      label: "Données de contact :",
      texte: "conservées 3 ans à compter du dernier contact, puis supprimées.",
    },
    {
      label: "Données analytics :",
      texte: "conservées 14 mois par Google Analytics (paramétrage par défaut), puis supprimées automatiquement.",
    },
  ],
};

export default function DureeConservation(props: DureeConservationProps) {
  const { titre, items } = { ...DUREECONSERVATION_DEFAULTS, ...props } as typeof DUREECONSERVATION_DEFAULTS;

  return (
    <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {titre}
                </h2>
                <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                  {items.map((item, index) => (
                    <p key={index}><span className="text-zinc-300 font-medium">{item.label}</span> {item.texte}</p>
                  ))}
                </div>
              </section>
  )
}
