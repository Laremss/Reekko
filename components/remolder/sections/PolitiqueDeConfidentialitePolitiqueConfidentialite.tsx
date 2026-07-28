interface PolitiqueConfidentialiteProps {
  badgeLabel?: string;
  mainTitle?: string;
  lastUpdateText?: string;
}

const POLITIQUECONFIDENTIALITE_DEFAULTS = {
  badgeLabel: "Données personnelles",
  mainTitle: "Politique de confidentialité",
  lastUpdateText: "Dernière mise à jour : mars 2026",
};

export default function PolitiqueConfidentialite(props: PolitiqueConfidentialiteProps = {}) {
  const { badgeLabel, mainTitle, lastUpdateText } = { ...POLITIQUECONFIDENTIALITE_DEFAULTS, ...props } as typeof POLITIQUECONFIDENTIALITE_DEFAULTS;

  return (
    <div className="mb-12">
              <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">{badgeLabel}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                {mainTitle}
              </h1>
              <p className="text-zinc-500 text-sm">{lastUpdateText}</p>
            </div>
  )
}