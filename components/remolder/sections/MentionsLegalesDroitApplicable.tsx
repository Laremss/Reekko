export interface DroitApplicableProps {
  titre?: string;
  texte?: string;
}

const DROITAPPLICABLE_DEFAULTS = {
  titre: "6. Droit applicable",
  texte: "Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
};

export default function DroitApplicable(props: DroitApplicableProps) {
  const { titre, texte } = { ...DROITAPPLICABLE_DEFAULTS, ...props } as typeof DROITAPPLICABLE_DEFAULTS;

  return (
    <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {titre}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {texte}
                </p>
              </section>
  )
}
