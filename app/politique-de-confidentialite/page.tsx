import BlockList from '@/components/remolder/BlockList'
import { committedPage } from '@/lib/remolder/data'
import __remolderContent from '@/remolder/published.json'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Reekko',
  description: 'Politique de confidentialité et gestion des données personnelles du site reekko.fr.',
  robots: { index: false, follow: false },
}



function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Données personnelles</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-zinc-500 text-sm">Dernière mise à jour : mars 2026</p>
        </div>

        <div className="space-y-10">

          {/* Intro */}
          <section>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Reekko (Rémi Bitouzé, auto-entrepreneur, 12 square Louis Jouvet, 35200 Rennes) s'engage à protéger la vie privée des visiteurs de son site. La présente politique décrit quelles données sont collectées, comment elles sont utilisées et quels sont vos droits conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).
            </p>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              1. Données collectées
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-2">Formulaire de contact</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Lorsque vous remplissez le formulaire de contact, nous collectons : nom, adresse email, nom de l'entreprise, rôle et contenu du message. Ces données sont transmises via Formspree et sont utilisées uniquement pour répondre à votre demande.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 mb-2">Données de navigation (Google Analytics)</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Ce site utilise Google Analytics 4 (Google LLC) pour mesurer l'audience. Google Analytics collecte des données anonymisées sur votre navigation : pages visitées, durée de session, source de trafic, type d'appareil. Ces données sont agrégées et ne permettent pas de vous identifier personnellement. Conformément à notre configuration, les adresses IP sont anonymisées.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed mt-2">
                  Pour en savoir plus :{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    politique de confidentialité de Google
                  </a>.
                </p>
              </div>
            </div>
          </section>

          {/* Finalités */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              2. Finalités du traitement
            </h2>
            <div className="space-y-3">
              {[
                { base: 'Intérêt légitime', finalite: 'Répondre aux demandes de contact et de devis' },
                { base: 'Intérêt légitime', finalite: 'Mesurer et améliorer les performances du site (analytics anonymisés)' },
                { base: 'Obligation légale', finalite: 'Conservation des données requises par la loi' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 px-2 py-0.5 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
                    {item.base}
                  </span>
                  <span className="text-zinc-400 leading-relaxed">{item.finalite}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Conservation */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              3. Durée de conservation
            </h2>
            <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
              <p><span className="text-zinc-300 font-medium">Données de contact :</span> conservées 3 ans à compter du dernier contact, puis supprimées.</p>
              <p><span className="text-zinc-300 font-medium">Données analytics :</span> conservées 14 mois par Google Analytics (paramétrage par défaut), puis supprimées automatiquement.</p>
            </div>
          </section>

          {/* Partage */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              4. Partage des données
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises aux prestataires techniques suivants, dans le strict cadre de leur mission :
            </p>
            <div className="space-y-2">
              {[
                { nom: 'Formspree', role: 'Traitement des formulaires de contact', pays: 'États-Unis (Privacy Shield)' },
                { nom: 'Google Analytics (Google LLC)', role: 'Mesure d\'audience anonymisée', pays: 'États-Unis (clauses contractuelles types)' },
                { nom: 'Vercel Inc.', role: 'Hébergement du site', pays: 'États-Unis (Privacy Shield)' },
              ].map((p, i) => (
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

          {/* Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              5. Cookies
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Ce site utilise des cookies à des fins de mesure d'audience uniquement. Aucun cookie publicitaire ou de tracking commercial n'est utilisé.
            </p>
            <div className="space-y-2">
              {[
                { nom: '_ga, _ga_*', type: 'Analytics', duree: '2 ans', description: 'Identifier les sessions uniques (Google Analytics)' },
                { nom: '_gid', type: 'Analytics', duree: '24h', description: 'Distinguer les utilisateurs (Google Analytics)' },
              ].map((c, i) => (
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
              Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela n'affecte pas votre navigation sur le site.
            </p>
          </section>

          {/* Droits */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              6. Vos droits
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { droit: 'Droit d\'accès', desc: 'Obtenir une copie de vos données' },
                { droit: 'Droit de rectification', desc: 'Corriger des données inexactes' },
                { droit: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données' },
                { droit: 'Droit d\'opposition', desc: 'Vous opposer à un traitement' },
                { droit: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format lisible' },
                { droit: 'Droit de limitation', desc: 'Restreindre un traitement en cours' },
              ].map((r, i) => (
                <div key={i} className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-3">
                  <p className="text-sm font-medium text-zinc-300">{r.droit}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mt-4">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:contact.reekko@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                contact.reekko@gmail.com
              </a>.
              Nous nous engageons à répondre dans un délai d'un mois. En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                CNIL
              </a>.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-400">
              Pour toute question relative à cette politique, écrivez-nous à{' '}
              <a href="mailto:contact.reekko@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                contact.reekko@gmail.com
              </a>{' '}
              ou consultez nos{' '}
              <Link href="/mentions-legales" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                mentions légales
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default function RemolderPage() {
  const __published = committedPage(__remolderContent, "/politique-de-confidentialite")
  if (__published) {
    return (
      <>
      <div className="min-h-screen bg-zinc-950 pt-16">
        <BlockList blocks={__published.blocks} tokens={__published.tokens} />
      </div>
      </>
    )
  }
  // Repli sûr : composition d'origine, inchangée.
  return <PolitiqueConfidentialitePage />
}

