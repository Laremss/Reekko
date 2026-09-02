interface LiensHypertextesProps {
  titre?: string;
  contenu?: string;
}

const LIENSHYPERTEXTES_DEFAULTS = {
  titre: "5. Liens hypertextes",
  contenu: "Le site peut contenir des liens vers des sites tiers. Reekko n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La présence de ces liens ne constitue pas une approbation de leur contenu.",
};

export default function LiensHypertextes(props: LiensHypertextesProps = {}) {
  const { titre, contenu } = { ...LIENSHYPERTEXTES_DEFAULTS, ...props } as typeof LIENSHYPERTEXTES_DEFAULTS;

  return (
    <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {titre}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {contenu}
                </p>
              </section>
  )
}