import Link from 'next/link'

interface EditeurSiteProps {
  sectionTitle1?: string
  raisonSociale?: string
  formeJuridique?: string
  dirigeant?: string
  siegeSocial?: string
  numeroRcs?: string
  emailEditeur?: string
  mailtoEditeur?: string

  sectionTitle2?: string
  societeHeberg?: string
  adresseHeberg?: string
  siteHeberg?: string
  urlHeberg?: string

  sectionTitle3?: string
  contenuProprieteIntellectuelle?: string

  sectionTitle4?: string
  contenuResponsabilite?: string

  sectionTitle5?: string
  contenuLiensHypertextes?: string

  sectionTitle6?: string
  contenuDroitApplicable?: string

  textePrelimContact?: string
  emailContact?: string
  mailtoContact?: string
  urlPolitiqueConfidentialite?: string
  labelPolitiqueConfidentialite?: string
}

const EDITEURSITE_DEFAULTS: EditeurSiteProps = {
  sectionTitle1: '1. Éditeur du site',
  raisonSociale: 'Reekko',
  formeJuridique: 'Entreprise individuelle (auto-entrepreneur)',
  dirigeant: 'Rémi Bitouzé',
  siegeSocial: '12 square Louis Jouvet, 35200 Rennes, France',
  numeroRcs: '992 164 244 R.C.S. Rennes',
  emailEditeur: 'contact.reekko@gmail.com',
  mailtoEditeur: 'mailto:contact.reekko@gmail.com',

  sectionTitle2: '2. Hébergeur',
  societeHeberg: 'Vercel Inc.',
  adresseHeberg: '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis',
  siteHeberg: 'vercel.com',
  urlHeberg: 'https://vercel.com',

  sectionTitle3: '3. Propriété intellectuelle',
  contenuProprieteIntellectuelle: 'L\'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, structure) sont la propriété exclusive de Reekko ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation ou diffusion, en tout ou partie, sans autorisation écrite préalable est strictement interdite.',

  sectionTitle4: '4. Limitation de responsabilité',
  contenuResponsabilite: 'Reekko s\'efforce d\'assurer l\'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Reekko ne peut garantir l\'exactitude, la précision ou l\'exhaustivité des informations mises à disposition. En conséquence, Reekko décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.',

  sectionTitle5: '5. Liens hypertextes',
  contenuLiensHypertextes: 'Le site peut contenir des liens vers des sites tiers. Reekko n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La présence de ces liens ne constitue pas une approbation de leur contenu.',

  sectionTitle6: '6. Droit applicable',
  contenuDroitApplicable: 'Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.',

  textePrelimContact: 'Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à ',
  emailContact: 'contact.reekko@gmail.com',
  mailtoContact: 'mailto:contact.reekko@gmail.com',
  urlPolitiqueConfidentialite: '/politique-de-confidentialite',
  labelPolitiqueConfidentialite: 'politique de confidentialité',
}

export default function EditeurSite(props: EditeurSiteProps = {}) {
  const {
    sectionTitle1,
    raisonSociale,
    formeJuridique,
    dirigeant,
    siegeSocial,
    numeroRcs,
    emailEditeur,
    mailtoEditeur,

    sectionTitle2,
    societeHeberg,
    adresseHeberg,
    siteHeberg,
    urlHeberg,

    sectionTitle3,
    contenuProprieteIntellectuelle,

    sectionTitle4,
    contenuResponsabilite,

    sectionTitle5,
    contenuLiensHypertextes,

    sectionTitle6,
    contenuDroitApplicable,

    textePrelimContact,
    emailContact,
    mailtoContact,
    urlPolitiqueConfidentialite,
    labelPolitiqueConfidentialite,
  } = { ...EDITEURSITE_DEFAULTS, ...props }

  return (
    <div className="prose-custom space-y-10">
    
              {/* Éditeur */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {sectionTitle1}
                </h2>
                <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                  <p><span className="text-zinc-300 font-medium">Raison sociale :</span> {raisonSociale}</p>
                  <p><span className="text-zinc-300 font-medium">Forme juridique :</span> {formeJuridique}</p>
                  <p><span className="text-zinc-300 font-medium">Dirigeant :</span> {dirigeant}</p>
                  <p><span className="text-zinc-300 font-medium">Siège social :</span> {siegeSocial}</p>
                  <p><span className="text-zinc-300 font-medium">Numéro RCS :</span> {numeroRcs}</p>
                  <p><span className="text-zinc-300 font-medium">Email :</span>{' '}
                    <a href={mailtoEditeur} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      {emailEditeur}
                    </a>
                  </p>
                </div>
              </section>
    
              {/* Hébergeur */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {sectionTitle2}
                </h2>
                <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                  <p><span className="text-zinc-300 font-medium">Société :</span> {societeHeberg}</p>
                  <p><span className="text-zinc-300 font-medium">Adresse :</span> {adresseHeberg}</p>
                  <p><span className="text-zinc-300 font-medium">Site :</span>{' '}
                    <a href={urlHeberg} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                      {siteHeberg}
                    </a>
                  </p>
                </div>
              </section>
    
              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {sectionTitle3}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {contenuProprieteIntellectuelle}
                </p>
              </section>
    
              {/* Responsabilité */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {sectionTitle4}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {contenuResponsabilite}
                </p>
              </section>
    
              {/* Liens hypertextes */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {sectionTitle5}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {contenuLiensHypertextes}
                </p>
              </section>
    
              {/* Droit applicable */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {sectionTitle6}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {contenuDroitApplicable}
                </p>
              </section>
    
              {/* Contact */}
              <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-400">
                  {textePrelimContact}
                  <a href={mailtoContact} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {emailContact}
                  </a>
                  {' '}ou consulter notre{' '}
                  <Link href={urlPolitiqueConfidentialite} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {labelPolitiqueConfidentialite}
                  </Link>.
                </p>
              </section>
    
            </div>
  )
}