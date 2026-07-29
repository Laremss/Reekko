interface GrowthMarketingB2bProps {
  heading?: string;
  headingHighlight?: string;
  paragraph1?: string;
  paragraph2?: string;
}

const GROWTHMARKETINGB2B_DEFAULTS = {
  heading: "Growth marketing B2B à Rennes :",
  headingHighlight: "un écosystème en pleine expansion",
  paragraph1: "Rennes est l'une des métropoles françaises avec la plus forte dynamique de création d'entreprises B2B tech.\nEntre les acteurs de la cybersécurité, les ESN, les startups SaaS et les PME industrielles du Grand Ouest,\nla demande pour des systèmes d'acquisition efficaces n'a jamais été aussi forte.",
  paragraph2: "Pourtant, la majorité de ces entreprises dépendent encore d'un réseau de contacts limité et d'une\nprospection manuelle chronophage. C'est exactement ce que Reekko vient résoudre : un système\nd'acquisition automatisé, calibré pour votre marché et opérationnel en quelques semaines."
};

export default function GrowthMarketingB2b(props: GrowthMarketingB2bProps = {}) {
  const { heading, headingHighlight, paragraph1, paragraph2 } = { ...GROWTHMARKETINGB2B_DEFAULTS, ...props } as typeof GROWTHMARKETINGB2B_DEFAULTS;

  return (
    <section className="py-20 sm:py-28 bg-zinc-900/20 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                {heading}<br />
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  {headingHighlight}
                </span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                {paragraph1}
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {paragraph2}
              </p>
            </div>
          </section>
  )
}