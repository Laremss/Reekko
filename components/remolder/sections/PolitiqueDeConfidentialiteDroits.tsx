interface DroitsProps {
  title?: string;
  introText?: string;
  rights?: Array<{
    droit: string;
    desc: string;
  }>;
  contactEmail?: string;
  contactMailto?: string;
  contactText?: string;
  commitmentText?: string;
  cnilText?: string;
  cnilUrl?: string;
}

const DROITS_DEFAULTS = {
  title: '6. Vos droits',
  introText: 'Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :',
  rights: [
    { droit: 'Droit d\'accès', desc: 'Obtenir une copie de vos données' },
    { droit: 'Droit de rectification', desc: 'Corriger des données inexactes' },
    { droit: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données' },
    { droit: 'Droit d\'opposition', desc: 'Vous opposer à un traitement' },
    { droit: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format lisible' },
    { droit: 'Droit de limitation', desc: 'Restreindre un traitement en cours' },
  ],
  contactEmail: 'contact.reekko@gmail.com',
  contactMailto: 'mailto:contact.reekko@gmail.com',
  contactText: 'Pour exercer ces droits, contactez-nous à',
  commitmentText: '. Nous nous engageons à répondre dans un délai d\'un mois. En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la',
  cnilText: 'CNIL',
  cnilUrl: 'https://www.cnil.fr',
};

export default function Droits(props: DroitsProps = {}) {
  const { title, introText, rights, contactEmail, contactMailto, contactText, commitmentText, cnilText, cnilUrl } = { ...DROITS_DEFAULTS, ...props } as typeof DROITS_DEFAULTS;

  return (
    <section>
      <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
        {title}
      </h2>
      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {introText}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {rights.map((r, i) => (
          <div key={i} className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-3">
            <p className="text-sm font-medium text-zinc-300">{r.droit}</p>
            <p className="text-xs text-zinc-500 mt-0.5">{r.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed mt-4">
        {contactText}{' '}
        <a href={contactMailto} className="text-indigo-400 hover:text-indigo-300 transition-colors">
          {contactEmail}
        </a>
        {commitmentText}{' '}
        <a href={cnilUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
          {cnilText}
        </a>.
      </p>
    </section>
  );
}