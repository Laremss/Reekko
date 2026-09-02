
export interface Section5Props {
  titre?: string;
  texte?: string;
}

const SECTION5_DEFAULTS = {
  titre: "4. Limitation de responsabilité",
  texte: "Reekko s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Reekko ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Reekko décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.",
};

export default function Section5(props: Section5Props) {
  const { titre, texte } = { ...SECTION5_DEFAULTS, ...props } as typeof SECTION5_DEFAULTS;
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
