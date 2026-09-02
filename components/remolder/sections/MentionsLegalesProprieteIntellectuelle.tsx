interface ProprieteIntellectuelleProps {
  sectionTitle?: string;
  sectionContent?: string;
}

const PROPRIETEINTELLECTUELLE_DEFAULTS = {
  sectionTitle: "3. Propriété intellectuelle",
  sectionContent: "L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, structure) sont la propriété exclusive de Reekko ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation écrite préalable est strictement interdite."
};

export default function ProprieteIntellectuelle(props: ProprieteIntellectuelleProps = {}) {
  const { sectionTitle, sectionContent } = { ...PROPRIETEINTELLECTUELLE_DEFAULTS, ...props } as typeof PROPRIETEINTELLECTUELLE_DEFAULTS;

  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
        {sectionTitle}
      </h2>
      <p className="text-sm text-zinc-400 leading-relaxed">
        {sectionContent}
      </p>
    </section>
  );
}