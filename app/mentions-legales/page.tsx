import BlockList from '@/components/remolder/BlockList'
import { getPublishedData } from '@/lib/remolder/data'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales | Reekko',
  description: 'Mentions légales du site reekko.fr — éditeur, hébergeur, propriété intellectuelle.',
  robots: { index: false, follow: false },
}


export const dynamic = 'force-dynamic'

function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">Informations légales</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Mentions légales
          </h1>
          <p className="text-zinc-500 text-sm">Dernière mise à jour : mars 2026</p>
        </div>

        <div className="prose-custom space-y-10">

          {/* Éditeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              1. Éditeur du site
            </h2>
            <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
              <p><span className="text-zinc-300 font-medium">Raison sociale :</span> Reekko</p>
              <p><span className="text-zinc-300 font-medium">Forme juridique :</span> Entreprise individuelle (auto-entrepreneur)</p>
              <p><span className="text-zinc-300 font-medium">Dirigeant :</span> Rémi Bitouzé</p>
              <p><span className="text-zinc-300 font-medium">Siège social :</span> 12 square Louis Jouvet, 35200 Rennes, France</p>
              <p><span className="text-zinc-300 font-medium">Numéro RCS :</span> 992 164 244 R.C.S. Rennes</p>
              <p><span className="text-zinc-300 font-medium">Email :</span>{' '}
                <a href="mailto:contact.reekko@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  contact.reekko@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              2. Hébergeur
            </h2>
            <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
              <p><span className="text-zinc-300 font-medium">Société :</span> Vercel Inc.</p>
              <p><span className="text-zinc-300 font-medium">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
              <p><span className="text-zinc-300 font-medium">Site :</span>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  vercel.com
                </a>
              </p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              3. Propriété intellectuelle
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, structure) sont la propriété exclusive de Reekko ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              4. Limitation de responsabilité
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Reekko s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Reekko ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition. En conséquence, Reekko décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
            </p>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              5. Liens hypertextes
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Le site peut contenir des liens vers des sites tiers. Reekko n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La présence de ces liens ne constitue pas une approbation de leur contenu.
            </p>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
              6. Droit applicable
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          {/* Contact */}
          <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6">
            <p className="text-sm text-zinc-400">
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à{' '}
              <a href="mailto:contact.reekko@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                contact.reekko@gmail.com
              </a>{' '}
              ou consulter notre{' '}
              <Link href="/politique-de-confidentialite" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                politique de confidentialité
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default async function RemolderPage() {
  const __published = await getPublishedData("/mentions-legales")
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
  return <MentionsLegalesPage />
}

