export interface PolitiqueConfidentialiteProps {
  eyebrow?: string;
  titre?: string;
  dateMiseAJour?: string;
}

export const POLITIQUECONFIDENTIALITE_DEFAULTS = {
  eyebrow: "Données personnelles",
  titre: "Politique de confidentialité",
  dateMiseAJour: "Dernière mise à jour : mars 2026",
};

export default function PolitiqueConfidentialite(props: PolitiqueConfidentialiteProps) {
  const { eyebrow, titre, dateMiseAJour } = { ...POLITIQUECONFIDENTIALITE_DEFAULTS, ...props } as typeof POLITIQUECONFIDENTIALITE_DEFAULTS;

  return (
    <div className="mb-12">
              <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">{eyebrow}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                {titre}
              </h1>
              <p className="text-zinc-500 text-sm">{dateMiseAJour}</p>
            </div>
  )
}
