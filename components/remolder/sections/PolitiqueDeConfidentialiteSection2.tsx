interface Section2Props {
  introductionText?: string;
}

const SECTION2_DEFAULTS = {
  introductionText: "Reekko (Rémi Bitouzé, auto-entrepreneur, 12 square Louis Jouvet, 35200 Rennes) s'engage à protéger la vie privée des visiteurs de son site. La présente politique décrit quelles données sont collectées, comment elles sont utilisées et quels sont vos droits conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).",
};

export default function Section2(props: Section2Props = {}) {
  const { introductionText } = { ...SECTION2_DEFAULTS, ...props } as typeof SECTION2_DEFAULTS;

  return (
    <section>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {introductionText}
      </p>
    </section>
  );
}