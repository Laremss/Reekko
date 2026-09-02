interface HebergeurProps {
  titre?: string;
  societe?: string;
  adresse?: string;
  siteLien?: string;
  siteLibelle?: string;
}

const HEBERGEUR_DEFAULTS = {
  titre: "2. Hébergeur",
  societe: "Vercel Inc.",
  adresse: "340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis",
  siteLien: "https://vercel.com",
  siteLibelle: "vercel.com"
};

export default function Hebergeur(props: HebergeurProps = {}) {
  const { titre, societe, adresse, siteLien, siteLibelle } = { ...HEBERGEUR_DEFAULTS, ...props } as typeof HEBERGEUR_DEFAULTS;

  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
        {titre}
      </h2>
      <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
        <p><span className="text-zinc-300 font-medium">Société :</span> {societe}</p>
        <p><span className="text-zinc-300 font-medium">Adresse :</span> {adresse}</p>
        <p><span className="text-zinc-300 font-medium">Site :</span>{' '}
          <a href={siteLien} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            {siteLibelle}
          </a>
        </p>
      </div>
    </section>
  );
}