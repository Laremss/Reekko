// [Remolder] Couche de données de la preview.
// Lit l'état DRAFT (blocs + tokens) depuis Supabase via PostgREST.
// Fetch direct (pas de dépendance ajoutée au repo client) — appelé côté serveur.

// Lecture d'env TOLÉRANTE au bundler. `process` n'existe pas dans un bundle
// navigateur (site SPA/Vite) : y accéder au chargement du module ferait planter
// tout le bundle. Or les fonctions de fetch ci-dessous ne servent qu'au rendu
// SERVEUR (Next) ou à l'aperçu ; le rendu committé (committedPage/…), lui, est
// PUR et n'a besoin d'aucune env. On garde donc data.ts chargeable partout —
// c'est ce qui rend la couche de données réutilisable sur un site non-Next.
const _env: Record<string, string | undefined> =
  typeof process !== 'undefined' && process.env ? process.env : {}
const SUPABASE_URL = _env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const SUPABASE_KEY = _env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const SITE_ID = _env.NEXT_PUBLIC_REMOLDER_SITE_ID ?? ''

export interface RemolderBlock {
  id: string
  type: string
  props: Record<string, unknown>
  position: number
  visible: boolean
}

export interface RemolderTokens {
  brand?: { hue?: string; scale?: Record<string, string> }
  font?: { display?: string }
  /** Préréglage d'arrondis choisi dans l'éditeur (informatif). */
  radiusPreset?: string
  /** Facteur d'arrondi continu (1 = dessin d'origine, informatif). */
  radiusFactor?: number
  /** Échelle de texte du site en % (100 = origine) — appliquée sur :root. */
  fontScale?: number
  /** Couleur de fond du site (hex). Vide = fond d'origine. */
  background?: string
  /** Réglages SEO au niveau du SITE (gabarit de titre, image par défaut, org). */
  siteSeo?: SiteSeo
  /** Variables CSS génériques calculées par l'éditeur (--radius-*, etc.). */
  vars?: Record<string, string>
}

export interface SiteSeo {
  /** Nom du site (suffixe de titre par défaut). */
  siteName?: string
  /** Gabarit de titre, `%s` = titre de la page (ex. « %s | Ma marque »). */
  titleTemplate?: string
  /** Image de partage par défaut (si la page n'en définit pas). */
  defaultImage?: string
  /** Organisation (JSON-LD site) : nom, logo, profils. */
  orgName?: string
  orgLogo?: string
  /** URLs de profils (réseaux), séparées par des virgules -> sameAs. */
  orgSameAs?: string
}

// Applique le gabarit de titre du site à un titre de page. Sans gabarit ni nom
// de site, on renvoie le titre tel quel.
export function formatTitle(title: string | undefined, site?: SiteSeo): string | undefined {
  if (!title) return title
  if (site?.titleTemplate && site.titleTemplate.includes('%s')) {
    return site.titleTemplate.replace('%s', title)
  }
  if (site?.siteName) return `${title} | ${site.siteName}`
  return title
}

// JSON-LD Organisation du site (émis sur chaque page via BlockList). Null tant
// que le nom d'organisation n'est pas renseigné.
export function buildOrganizationLd(site?: SiteSeo): Record<string, unknown> | null {
  if (!site?.orgName) return null
  const o: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.orgName,
  }
  if (site.orgLogo) o.logo = site.orgLogo
  const sameAs = (site.orgSameAs ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  if (sameAs.length) o.sameAs = sameAs
  return o
}

/** En-tête du site (navigation) éditable — contenu extrait au montage. */
export interface RemolderChrome {
  logo?: string
  links?: { label: string; href: string }[]
  cta?: unknown
  ctaMobileLabel?: string
}

/** Pied de page du site éditable — contenu extrait au montage. */
export interface RemolderFooter {
  logo?: string
  tagline?: string
  linkedin?: string
  email?: string
  navTitle?: string
  navLinks?: { label: string; href: string }[]
  resourcesTitle?: string
  resourcesLinks?: { label: string; href: string }[]
  copyright?: string
  legalLinks?: { label: string; href: string }[]
}

export interface PreviewData {
  pageId: string | null
  seo: Record<string, unknown>
  blocks: RemolderBlock[]
  tokens: RemolderTokens
}

async function rest<T>(path: string): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    // La preview doit toujours refléter le dernier draft.
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Remolder REST ${path} -> ${res.status}`)
  return (await res.json()) as T
}

export interface PageSeo {
  title?: string
  description?: string
  /** URL absolue ou relative utilisée pour og:image / twitter:image. */
  image?: string
  /** 'index' (défaut) ou 'noindex' pour retirer la page des moteurs. */
  robots?: string
  /** URL canonique (évite le contenu dupliqué). */
  canonical?: string
  /** Titre Open Graph (partage social). Vide = la balise titre. */
  ogTitle?: string
  /** Description Open Graph (partage social). Vide = la meta description. */
  ogDescription?: string
  /** Type Open Graph : 'website' (défaut) ou 'article'. */
  ogType?: string
  /** Type de carte Twitter : 'summary' ou 'summary_large_image'. */
  twitterCard?: string
  /** Mots-clés meta (liste séparée par des virgules). */
  keywords?: string
  /** Type de données structurées (schema.org) : website, article, product… */
  schemaType?: string
  /** Auteur (données structurées Article). */
  author?: string
  /** Date de publication ISO (données structurées Article). */
  datePublished?: string
  /** Champs riches des données structurées, propres au type choisi. */
  schema?: SchemaData
}

export interface SchemaData {
  dateModified?: string
  section?: string
  keywords?: string
  authorUrl?: string
  publisherName?: string
  publisherLogo?: string
  price?: string
  currency?: string
  availability?: string
  brand?: string
  sku?: string
  ratingValue?: string
  ratingCount?: string
  streetAddress?: string
  addressLocality?: string
  postalCode?: string
  addressCountry?: string
  telephone?: string
  priceRange?: string
  openingHours?: string
  serviceType?: string
  areaServed?: string
  faq?: { question: string; answer: string }[]
}

// N'insère une clé QUE si la valeur est renseignée : un JSON-LD propre ne porte
// jamais de champ vide.
function put(o: Record<string, unknown>, k: string, v: unknown) {
  if (v !== undefined && v !== null && v !== '') o[k] = v
  return o
}

// Construit le JSON-LD (schema.org) COMPLET d'une page à partir de son type de
// contenu et de ses champs riches (seo.schema). Renvoie null pour les cas sans
// données exploitables (site web sans éditeur, FAQ sans Q/R) : on n'émet alors
// rien, et le JSON-LD D'ORIGINE du site (préservé au montage) reste seul en
// place — jamais de doublon vide.
export function buildJsonLd(
  seo: PageSeo | undefined,
  fallback: { title: string; description: string },
): Record<string, unknown> | null {
  const type = seo?.schemaType
  if (!type) return null
  const s: SchemaData = seo?.schema ?? {}
  const name = seo?.title || fallback.title
  const description = seo?.description || fallback.description
  const ctx = { '@context': 'https://schema.org' }

  const publisher =
    s.publisherName || s.publisherLogo
      ? put(
          { '@type': 'Organization' },
          'name',
          s.publisherName,
        )
      : null
  if (publisher && s.publisherLogo) publisher.logo = { '@type': 'ImageObject', url: s.publisherLogo }

  if (type === 'article') {
    if (!name) return null
    const o: Record<string, unknown> = { ...ctx, '@type': 'Article', headline: name }
    put(o, 'description', description)
    if (seo?.author) {
      o.author = put({ '@type': 'Person', name: seo.author }, 'url', s.authorUrl)
    }
    put(o, 'datePublished', seo?.datePublished)
    put(o, 'dateModified', s.dateModified)
    put(o, 'articleSection', s.section)
    put(o, 'keywords', s.keywords)
    put(o, 'image', seo?.image)
    if (publisher) o.publisher = publisher
    return o
  }

  if (type === 'product') {
    if (!name) return null
    const o: Record<string, unknown> = { ...ctx, '@type': 'Product', name }
    put(o, 'description', description)
    put(o, 'image', seo?.image)
    put(o, 'sku', s.sku)
    if (s.brand) o.brand = { '@type': 'Brand', name: s.brand }
    if (s.price) {
      o.offers = put(
        put({ '@type': 'Offer', price: s.price }, 'priceCurrency', s.currency),
        'availability',
        s.availability ? `https://schema.org/${s.availability}` : undefined,
      )
    }
    if (s.ratingValue) {
      o.aggregateRating = put(
        { '@type': 'AggregateRating', ratingValue: s.ratingValue },
        'reviewCount',
        s.ratingCount,
      )
    }
    return o
  }

  if (type === 'localbusiness') {
    if (!name) return null
    const o: Record<string, unknown> = { ...ctx, '@type': 'LocalBusiness', name }
    put(o, 'description', description)
    put(o, 'image', seo?.image)
    put(o, 'telephone', s.telephone)
    put(o, 'priceRange', s.priceRange)
    put(o, 'openingHours', s.openingHours)
    if (s.streetAddress || s.addressLocality || s.postalCode || s.addressCountry) {
      const addr: Record<string, unknown> = { '@type': 'PostalAddress' }
      put(addr, 'streetAddress', s.streetAddress)
      put(addr, 'addressLocality', s.addressLocality)
      put(addr, 'postalCode', s.postalCode)
      put(addr, 'addressCountry', s.addressCountry)
      o.address = addr
    }
    return o
  }

  if (type === 'service') {
    if (!name) return null
    const o: Record<string, unknown> = { ...ctx, '@type': 'Service' }
    put(o, 'name', s.serviceType || name)
    put(o, 'description', description)
    put(o, 'areaServed', s.areaServed)
    if (s.publisherName) o.provider = { '@type': 'Organization', name: s.publisherName }
    return o
  }

  if (type === 'faq') {
    const entries = (s.faq ?? []).filter((q) => q.question?.trim() && q.answer?.trim())
    if (entries.length === 0) return null
    return {
      ...ctx,
      '@type': 'FAQPage',
      mainEntity: entries.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      })),
    }
  }

  // website : on n'émet une Organisation QUE si l'éditeur est renseigné (sinon
  // on laisse le JSON-LD d'origine du site tranquille).
  if (type === 'website' && publisher) {
    return { ...ctx, ...publisher }
  }
  return null
}

export interface PublishedData {
  blocks: RemolderBlock[]
  tokens: RemolderTokens
  seo?: PageSeo
}

// Fabrique les blocs openGraph/twitter d'une page à partir de son SEO édité.
// `openGraph`/`twitter` ne sont PAS deep-merged par Next.js entre layout et
// page : dès qu'on les déclare ici, on doit fournir title+description pour
// rester cohérent (sinon un og:image édité afficherait l'ancien titre du site).
export function buildOgMetadata(
  seo: PageSeo | undefined,
  fallback: { title: string; description: string },
  site?: SiteSeo,
) {
  // `robots: noindex` et l'URL canonique doivent s'appliquer même si aucun autre
  // champ SEO n'est édité.
  const robots = seo?.robots === 'noindex' ? { robots: { index: false, follow: false } } : {}
  const canonical = seo?.canonical ? { alternates: { canonical: seo.canonical } } : {}
  const keywords = seo?.keywords ? { keywords: seo.keywords } : {}
  // Image de partage : celle de la page, sinon l'image par défaut du site.
  const image = seo?.image || site?.defaultImage
  const hasOg =
    seo?.title || seo?.description || image || seo?.ogTitle || seo?.ogDescription || seo?.ogType
  if (!hasOg) return { ...robots, ...canonical, ...keywords }
  // Titre/description de PARTAGE : les champs Open Graph dédiés priment, sinon on
  // retombe sur la balise titre / meta description.
  const title = seo?.ogTitle || seo?.title || fallback.title
  const description = seo?.ogDescription || seo?.description || fallback.description
  const ogType = seo?.ogType || (seo?.schemaType === 'article' ? 'article' : 'website')
  const twitterCard = seo?.twitterCard || (image ? 'summary_large_image' : 'summary')
  return {
    ...robots,
    ...canonical,
    ...keywords,
    openGraph: {
      type: ogType,
      title,
      description,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}

// Formats de payload snapshot :
//  v2 (multi-pages) : { tokens, pages: { [path]: { blocks, seo } } }
//  v1 (legacy, '/')  : { tokens, blocks, seo? }
interface SnapshotPayload {
  tokens: RemolderTokens
  pages?: Record<string, { blocks: RemolderBlock[]; seo?: PageSeo }>
  blocks?: RemolderBlock[]
  seo?: PageSeo
  chrome?: { header?: RemolderChrome; footer?: RemolderFooter }
  collections?: Record<
    string,
    { entries?: { slug: string; data: Record<string, unknown>; position?: number }[] }
  >
}

// Dernier snapshot PUBLIÉ pour une page. Retourne null si aucun / en cas
// d'erreur : l'appelant retombe alors sur la composition codée en dur —
// une publication ne peut donc jamais casser le site.
export async function getPublishedData(path = '/'): Promise<PublishedData | null> {
  try {
    const rows = await rest<Array<{ payload: SnapshotPayload }>>(
      `remolder_snapshots?site_id=eq.${SITE_ID}&kind=eq.published&order=created_at.desc&select=payload&limit=1`,
    )
    const payload = rows[0]?.payload
    if (!payload) return null
    // v2 multi-pages
    if (payload.pages) {
      const page = payload.pages[path]
      if (!page || !Array.isArray(page.blocks)) return null
      return { blocks: page.blocks, tokens: payload.tokens ?? {}, seo: page.seo }
    }
    // v1 legacy : uniquement la home
    if (path === '/' && Array.isArray(payload.blocks)) {
      return { blocks: payload.blocks, tokens: payload.tokens ?? {}, seo: payload.seo }
    }
    return null
  } catch {
    return null
  }
}

// [Remolder] PUBLICATION GIT-NATIVE. Le contenu publié vit dans le REPO du client
// (`remolder/published.json`), pas en base : c'est le client qui possède ses
// modifications, versionnées, sans dépendance à Remolder à l'exécution. Les pages
// montées importent ce fichier et le passent ici — fonction PURE, rendu STATIQUE
// au build. `null` → l'appelant retombe sur la composition d'origine (repli sûr).
export function committedPage(payload: unknown, path = '/'): PublishedData | null {
  const p = payload as SnapshotPayload | null | undefined
  if (!p) return null
  if (p.pages) {
    const page = p.pages[path]
    // 0 bloc = pas de contenu publié exploitable → repli sur l'original (jamais
    // de page blanche : une entrée vide/incomplète ne doit pas masquer le code).
    if (!page || !Array.isArray(page.blocks) || page.blocks.length === 0) return null
    return { blocks: page.blocks, tokens: p.tokens ?? {}, seo: page.seo }
  }
  if (path === '/' && Array.isArray(p.blocks) && p.blocks.length > 0) {
    return { blocks: p.blocks, tokens: p.tokens ?? {}, seo: p.seo }
  }
  return null
}

// Le chrome (en-tête/pied) committé, extrait du même payload repo.
export function committedChrome(payload: unknown) {
  return (payload as SnapshotPayload | null | undefined)?.chrome ?? null
}

// [Remolder] Entrée d'une collection (ex. un article) telle que publiée dans le
// repo. Renvoie l'objet `data` édité, ou null si l'entrée n'existe pas — fonction
// PURE. `overlayEntry` s'en sert pour superposer l'édition sur la source d'origine.
export function committedCollectionEntry(
  payload: unknown,
  collection: string,
  slug: string,
): Record<string, unknown> | null {
  const entries = (payload as SnapshotPayload | null | undefined)?.collections?.[collection]?.entries
  if (!Array.isArray(entries)) return null
  return entries.find((e) => e.slug === slug)?.data ?? null
}

// [Remolder] TOUTES les entrées publiées d'une collection (liste d'articles),
// dans l'ordre, chacune = `{ slug, ...data }`. C'est ce qui rend une page-liste
// éditable : on nourrit le composant de liste du SITE (design conservé) avec les
// entrées publiées au lieu de la source d'origine. `null` → repli sur la source.
export function committedCollectionList(
  payload: unknown,
  collection: string,
): Array<Record<string, unknown> & { slug: string }> | null {
  const entries = (payload as SnapshotPayload | null | undefined)?.collections?.[collection]?.entries
  if (!Array.isArray(entries) || entries.length === 0) return null
  return entries.map((e) => {
    const data: Record<string, unknown> = { slug: e.slug, ...(e.data ?? {}) }
    // Champ dérivé courant : temps de lecture calculé depuis le corps si absent,
    // pour que le composant de liste du site l'ait sans le stocker.
    if (typeof data.content === 'string' && data.readingTime == null) {
      const words = data.content.trim().split(/\s+/).filter(Boolean).length
      data.readingTime = `${Math.max(1, Math.round(words / 200))} min de lecture`
    }
    return data as Record<string, unknown> & { slug: string }
  })
}

// [Remolder] Superpose l'entrée publiée sur l'objet d'origine (fichier MDX, CMS…).
// L'édition prime, MAIS on ne touche PAS à la source si rien n'est publié (repli
// sûr) et on NORMALISE les formes qui divergent : une valeur d'origine en TABLEAU
// (ex. tags) mais publiée en CHAÎNE "a, b, c" est re-découpée — sinon `.map` casse.
// On n'overlay que si l'original est un objet : un article non trouvé (null) reste
// null (la page fait son notFound() habituel), jamais de rendu corrompu.
export function overlayEntry<T>(original: T, payload: unknown, collection: string, slug: string): T {
  if (!original || typeof original !== 'object') return original
  const pub = committedCollectionEntry(payload, collection, slug)
  if (!pub) return original
  const out: Record<string, unknown> = { ...(original as Record<string, unknown>) }
  for (const [k, v] of Object.entries(pub)) {
    const orig = out[k]
    out[k] =
      Array.isArray(orig) && typeof v === 'string'
        ? v.split(',').map((s) => s.trim()).filter(Boolean)
        : v
  }
  return out as T
}

// En-tête du site : brouillon (preview) et version publiée (prod).
// Fallback silencieux sur null → le Header garde ses contenus d'origine.
export async function getDraftChrome(): Promise<RemolderChrome | null> {
  try {
    const rows = await rest<Array<{ header: RemolderChrome }>>(
      `remolder_chrome?site_id=eq.${SITE_ID}&select=header&limit=1`,
    )
    return rows[0]?.header ?? null
  } catch {
    return null
  }
}

export async function getPublishedChrome(): Promise<RemolderChrome | null> {
  try {
    const rows = await rest<Array<{ payload: SnapshotPayload }>>(
      `remolder_snapshots?site_id=eq.${SITE_ID}&kind=eq.published&order=created_at.desc&select=payload&limit=1`,
    )
    return rows[0]?.payload?.chrome?.header ?? null
  } catch {
    return null
  }
}

// Pied de page : brouillon (preview) et version publiée (prod) — même logique
// que l'en-tête. Fallback null → le Footer garde ses contenus d'origine.
export async function getDraftFooter(): Promise<RemolderFooter | null> {
  try {
    const rows = await rest<Array<{ footer: RemolderFooter }>>(
      `remolder_chrome?site_id=eq.${SITE_ID}&select=footer&limit=1`,
    )
    return rows[0]?.footer ?? null
  } catch {
    return null
  }
}

export async function getPublishedFooter(): Promise<RemolderFooter | null> {
  try {
    const rows = await rest<Array<{ payload: SnapshotPayload }>>(
      `remolder_snapshots?site_id=eq.${SITE_ID}&kind=eq.published&order=created_at.desc&select=payload&limit=1`,
    )
    return rows[0]?.payload?.chrome?.footer ?? null
  } catch {
    return null
  }
}

export async function getPreviewData(path = '/'): Promise<PreviewData> {
  const pages = await rest<Array<{ id: string; seo: Record<string, unknown> }>>(
    `remolder_pages?site_id=eq.${SITE_ID}&path=eq.${encodeURIComponent(
      path,
    )}&select=id,seo&limit=1`,
  )
  const page = pages[0]

  const [blocks, tokensRows] = await Promise.all([
    page
      ? rest<RemolderBlock[]>(
          `remolder_blocks?page_id=eq.${page.id}&order=position.asc&select=id,type,props,position,visible`,
        )
      : Promise.resolve([]),
    rest<Array<{ tokens: RemolderTokens }>>(
      `remolder_design_tokens?site_id=eq.${SITE_ID}&select=tokens&limit=1`,
    ),
  ])

  return {
    pageId: page?.id ?? null,
    seo: page?.seo ?? {},
    blocks,
    tokens: tokensRows[0]?.tokens ?? {},
  }
}
