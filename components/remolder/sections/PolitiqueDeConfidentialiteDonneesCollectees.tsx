import Link from 'next/link'

interface DonneesCollecteesProps {
  introText?: string
  section1Title?: string
  formulaireContactTitle?: string
  formulaireContactText?: string
  googleAnalyticsTitle?: string
  googleAnalyticsText?: string
  googleAnalyticsLinkText?: string
  googleAnalyticsUrl?: string
  section2Title?: string
  purposes?: Array<{ base: string; finalite: string }>
  section3Title?: string
  contactDataLabel?: string
  contactDataText?: string
  analyticsDataLabel?: string
  analyticsDataText?: string
  section4Title?: string
  shareIntroText?: string
  providers?: Array<{ nom: string; role: string; pays: string }>
  section5Title?: string
  cookiesIntroText?: string
  cookieDisclaimer?: string
  cookiesList?: Array<{ nom: string; type: string; duree: string; description: string }>
  section6Title?: string
  rightsIntroText?: string
  rights?: Array<{ droit: string; desc: string }>
  exerciseRightsText?: string
  contactEmail?: string
  contactEmailHref?: string
  cnilUrl?: string
  cnilLinkText?: string
  footerText?: string
  footerEmail?: string
  footerEmailHref?: string
  mentionsLegalesUrl?: string
  mentionsLegalesText?: string
}

const DONNEESCOLLECTEES_DEFAULTS = {
  introText: "Reekko (Rémi Bitouzé, auto-entrepreneur, 12 square Louis Jouvet, 35200 Rennes) s'engage à protéger la vie privée des visiteurs de son site. La présente politique décrit quelles données sont collectées, comment elles sont utilisées et quels sont vos droits conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).",
  section1Title: "1. Données collectées",
  formulaireContactTitle: "Formulaire de contact",
  formulaireContactText: "Lorsque vous remplissez le formulaire de contact, nous collectons : nom, adresse email, nom de l'entreprise, rôle et contenu du message. Ces données sont transmises via Formspree et sont utilisées uniquement pour répondre à votre demande.",
  googleAnalyticsTitle: "Données de navigation (Google Analytics)",
  googleAnalyticsText: "Ce site utilise Google Analytics 4 (Google LLC) pour mesurer l'audience. Google Analytics collecte des données anonymisées sur votre navigation : pages visitées, durée de session, source de trafic, type d'appareil. Ces données sont agrégées et ne permettent pas de vous identifier personnellement. Conformément à notre configuration, les adresses IP sont anonymisées.",
  googleAnalyticsLinkText: "politique de confidentialité de Google",
  googleAnalyticsUrl: "https://policies.google.com/privacy",
  section2Title: "2. Finalités du traitement",
  purposes: [
    { base: "Intérêt légitime", finalite: "Répondre aux demandes de contact et de devis" },
    { base: "Intérêt légitime", finalite: "Mesurer et améliorer les performances du site (analytics anonymisés)" },
    { base: "Obligation légale", finalite: "Conservation des données requises par la loi" },
  ],
  section3Title: "3. Durée de conservation",
  contactDataLabel: "Données de contact :",
  contactDataText: "conservées 3 ans à compter du dernier contact, puis supprimées.",
  analyticsDataLabel: "Données analytics :",
  analyticsDataText: "conservées 14 mois par Google Analytics (paramétrage par défaut), puis supprimées automatiquement.",
  section4Title: "4. Partage des données",
  shareIntroText: "Vos données ne sont jamais vendues ni cédées à des tiers à des fins commerciales. Elles peuvent être transmises aux prestataires techniques suivants, dans le strict cadre de leur mission :",
  providers: [
    { nom: "Formspree", role: "Traitement des formulaires de contact", pays: "États-Unis (Privacy Shield)" },
    { nom: "Google Analytics (Google LLC)", role: "Mesure d'audience anonymisée", pays: "États-Unis (clauses contractuelles types)" },
    { nom: "Vercel Inc.", role: "Hébergement du site", pays: "États-Unis (Privacy Shield)" },
  ],
  section5Title: "5. Cookies",
  cookiesIntroText: "Ce site utilise des cookies à des fins de mesure d'audience uniquement. Aucun cookie publicitaire ou de tracking commercial n'est utilisé.",
  cookiesList: [
    { nom: "_ga, _ga_*", type: "Analytics", duree: "2 ans", description: "Identifier les sessions uniques (Google Analytics)" },
    { nom: "_gid", type: "Analytics", duree: "24h", description: "Distinguer les utilisateurs (Google Analytics)" },
  ],
  cookieDisclaimer: "Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela n'affecte pas votre navigation sur le site.",
  section6Title: "6. Vos droits",
  rightsIntroText: "Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :",
  rights: [
    { droit: "Droit d'accès", desc: "Obtenir une copie de vos données" },
    { droit: "Droit de rectification", desc: "Corriger des données inexactes" },
    { droit: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
    { droit: "Droit d'opposition", desc: "Vous opposer à un traitement" },
    { droit: "Droit à la portabilité", desc: "Recevoir vos données dans un format lisible" },
    { droit: "Droit de limitation", desc: "Restreindre un traitement en cours" },
  ],
  exerciseRightsText: "Pour exercer ces droits, contactez-nous à ",
  contactEmail: "contact.reekko@gmail.com",
  contactEmailHref: "mailto:contact.reekko@gmail.com",
  cnilLinkText: "CNIL",
  cnilUrl: "https://www.cnil.fr",
  footerText: "Pour toute question relative à cette politique, écrivez-nous à ",
  footerEmail: "contact.reekko@gmail.com",
  footerEmailHref: "mailto:contact.reekko@gmail.com",
  mentionsLegalesUrl: "/mentions-legales",
  mentionsLegalesText: "mentions légales",
}

export default function DonneesCollectees(props: DonneesCollecteesProps = {}) {
  const {
    introText,
    section1Title,
    formulaireContactTitle,
    formulaireContactText,
    googleAnalyticsTitle,
    googleAnalyticsText,
    googleAnalyticsLinkText,
    googleAnalyticsUrl,
    section2Title,
    purposes,
    section3Title,
    contactDataLabel,
    contactDataText,
    analyticsDataLabel,
    analyticsDataText,
    section4Title,
    shareIntroText,
    providers,
    section5Title,
    cookiesIntroText,
    cookieDisclaimer,
    cookiesList,
    section6Title,
    rightsIntroText,
    rights,
    exerciseRightsText,
    contactEmail,
    contactEmailHref,
    cnilLinkText,
    cnilUrl,
    footerText,
    footerEmail,
    footerEmailHref,
    mentionsLegalesUrl,
    mentionsLegalesText,
  } = { ...DONNEESCOLLECTEES_DEFAULTS, ...props } as typeof DONNEESCOLLECTEES_DEFAULTS

  return (
    <div className="space-y-10">
    
              {/* Intro */}
              <section>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {introText}
                </p>
              </section>
    
              {/* Données collectées */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {section1Title}
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 mb-2">{formulaireContactTitle}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {formulaireContactText}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-300 mb-2">{googleAnalyticsTitle}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {googleAnalyticsText}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2">
                      Pour en savoir plus :{' '}
                      <a href={googleAnalyticsUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        {googleAnalyticsLinkText}
                      </a>.
                    </p>
                  </div>
                </div>
              </section>
    
              {/* Finalités */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {section2Title}
                </h2>
                <div className="space-y-3">
                  {purposes?.map((item, i) => (
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
                  {section3Title}
                </h2>
                <div className="space-y-2 text-sm text-zinc-400 leading-relaxed">
                  <p><span className="text-zinc-300 font-medium">{contactDataLabel}</span> {contactDataText}</p>
                  <p><span className="text-zinc-300 font-medium">{analyticsDataLabel}</span> {analyticsDataText}</p>
                </div>
              </section>
    
              {/* Partage */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {section4Title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {shareIntroText}
                </p>
                <div className="space-y-2">
                  {providers?.map((p, i) => (
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
                  {section5Title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {cookiesIntroText}
                </p>
                <div className="space-y-2">
                  {cookiesList?.map((c, i) => (
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
                  {cookieDisclaimer}
                </p>
              </section>
    
              {/* Droits */}
              <section>
                <h2 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-zinc-800">
                  {section6Title}
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {rightsIntroText}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {rights?.map((r, i) => (
                    <div key={i} className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 px-4 py-3">
                      <p className="text-sm font-medium text-zinc-300">{r.droit}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{r.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mt-4">
                  {exerciseRightsText}
                  <a href={contactEmailHref} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {contactEmail}
                  </a>.
                  Nous nous engageons à répondre dans un délai d'un mois. En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la{' '}
                  <a href={cnilUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {cnilLinkText}
                  </a>.
                </p>
              </section>
    
              {/* Contact */}
              <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-400">
                  {footerText}
                  <a href={footerEmailHref} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {footerEmail}
                  </a>{' '}
                  ou consultez nos{' '}
                  <Link href={mentionsLegalesUrl} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {mentionsLegalesText}
                  </Link>.
                </p>
              </section>
    
            </div>
  )
}