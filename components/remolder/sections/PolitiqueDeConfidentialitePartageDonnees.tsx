export interface PartageDonneesProps {
  titre?: string;
  description?: string;
  prestataires?: {
    nom: string;
    role: string;
    pays: string;
  }[];
}

const PARTAGE_DONNEES_DEFAULTS = {
  titre: '4. Partage des données',
  description: "Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises aux prestataires techniques suivants, dans le strict cadre de leur mission :",
  prestataires: [
    { nom: 'Formspree', role: 'Traitement des formulaires de contact', pays: 'États-Unis (Privacy Shield)' },
    { nom: 'Google Analytics (Google LLC)', role: 'Mesure d\'audience anonymisée', pays: 'États-Unis (clauses contractuelles types)' },
    { nom: 'Vercel Inc.', role: 'Hébergement du site', pays: 'États-Unis (Privacy Shield)' },
  ],
};

export default function PartageDonnees(props: PartageDonneesProps) {
  const { titre, description, prestataires } = { ...PARTAGE_DONNEES_DEFAULTS, ...props } as typeof PARTAGE_DONNEES_DEFAULTS;

  return (
    <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {titre}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {description}
                </p>
                <div className="space-y-2">
                  {prestataires.map((p, i) => (
                    <div key={i} className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-zinc-300">{p.nom}</p>
                          <p className="text-xs text-zinc-500 mt-0.5">{p.role}</p>
                        </div>
                        <span className="text-xs text-zinc-600 whitespace-nowrap mt-0.5">{p.pays}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
  )
}
