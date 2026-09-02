interface CookiesItem {
  nom: string;
  type: string;
  duree: string;
  description: string;
}

interface CookiesProps {
  titre?: string;
  introduction?: string;
  cookiesListe?: CookiesItem[];
  texteFinal?: string;
}

const COOKIES_DEFAULTS = {
  titre: '5. Cookies',
  introduction: "Ce site utilise des cookies à des fins de mesure d'audience uniquement. Aucun cookie publicitaire ou de tracking commercial n'est utilisé.",
  cookiesListe: [
    { nom: '_ga, _ga_*', type: 'Analytics', duree: '2 ans', description: 'Identifier les sessions uniques (Google Analytics)' },
    { nom: '_gid', type: 'Analytics', duree: '24h', description: 'Distinguer les utilisateurs (Google Analytics)' },
  ],
  texteFinal: "Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela n'affecte pas votre navigation sur le site.",
};

export default function Cookies(props: CookiesProps) {
  const { titre, introduction, cookiesListe, texteFinal } = { ...COOKIES_DEFAULTS, ...props } as typeof COOKIES_DEFAULTS;
  return (
    <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {titre}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {introduction}
                </p>
                <div className="space-y-2">
                  {(cookiesListe ?? []).map((c, i) => (
                    <div key={i} className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-3 text-sm">
                      <div className="flex items-center gap-3 mb-1">
                        <code className="text-indigo-400 text-xs">{c.nom}</code>
                        <span className="px-1.5 py-0.5 rounded text-xs bg-zinc-800 text-zinc-400">{c.type}</span>
                        <span className="text-xs text-zinc-600">Durée : {c.duree}</span>
                      </div>
                      <p className="text-xs text-zinc-500">{c.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mt-4">
                  {texteFinal}
                </p>
              </section>
  )
}
