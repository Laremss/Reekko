interface PourquoiReekkoProps {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}

const POURQUOIREEKKO_DEFAULTS = {
  title: "Pourquoi Reekko ?",
  paragraph1: "Trop d'entreprises B2B brillantes échouent à croître non pas parce que leur produit est mauvais, mais parce qu'elles n'ont pas de moteur commercial structuré. Elles dépendent de la chance, du bouche-à-oreille ou d'actions ponctuelles qui ne tiennent pas dans le temps.",
  paragraph2: "Chez Reekko, on croit que chaque entreprise B2B mérite d'avoir une infrastructure d'acquisition qui fonctionne en continu, sans dépendre d'une seule personne, sans réinventer la roue chaque trimestre.",
  paragraph3: "C'est pour ça qu'on a développé le Framework Reekko : une méthode structurée pour construire un système de prospection qui tourne sans prospection manuelle au quotidien, mesurable et reproductible.",
};

export default function PourquoiReekko(props: PourquoiReekkoProps = {}) {
  const { title, paragraph1, paragraph2, paragraph3 } = { ...POURQUOIREEKKO_DEFAULTS, ...props } as typeof POURQUOIREEKKO_DEFAULTS;

  return (
    <section className="py-20 border-t border-zinc-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {title}
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  {paragraph1}
                </p>
                <p className="text-zinc-400 leading-relaxed mb-5">
                  {paragraph2}
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  {paragraph3}
                </p>
              </div>
            </div>
          </section>
  )
}