// [Remolder] Couche de données de la preview.
// Lit l'état DRAFT (blocs + tokens) depuis Supabase via PostgREST.
// Fetch direct (pas de dépendance ajoutée au repo client) — appelé côté serveur.

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const SITE_ID = process.env.NEXT_PUBLIC_REMOLDER_SITE_ID ?? ''

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
  /** Variables CSS génériques calculées par l'éditeur (--radius-*, etc.). */
  vars?: Record<string, string>
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
) {
  // `robots: noindex` doit s'appliquer même si aucun autre champ SEO n'est édité.
  const robots = seo?.robots === 'noindex' ? { robots: { index: false, follow: false } } : {}
  if (!seo?.title && !seo?.description && !seo?.image) return robots
  const title = seo?.title || fallback.title
  const description = seo?.description || fallback.description
  return {
    ...robots,
    openGraph: {
      title,
      description,
      ...(seo?.image ? { images: [{ url: seo.image, width: 1200, height: 630, alt: title }] } : {}),
    },
    twitter: {
      title,
      description,
      ...(seo?.image ? { images: [seo.image] } : {}),
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

// [Remolder] Entrée d'une collection (ex. un article de blog) telle que publiée
// dans le repo. Renvoie l'objet `data` édité, ou null si l'entrée n'existe pas —
// l'appelant retombe alors sur la source d'origine (fichier MDX). Fonction PURE.
export function committedCollectionEntry(
  payload: unknown,
  collection: string,
  slug: string,
): Record<string, unknown> | null {
  const entries = (payload as SnapshotPayload | null | undefined)?.collections?.[collection]?.entries
  if (!Array.isArray(entries)) return null
  return entries.find((e) => e.slug === slug)?.data ?? null
}

// [Remolder] TOUTES les entrées publiées d'une collection (ex. la liste d'articles
// du blog), dans l'ordre, chacune = `{ slug, ...data }`. C'est ce qui rend une
// page-liste éditable : on nourrit le composant de liste du SITE (son design est
// conservé) avec les entrées publiées au lieu de la source d'origine (fichiers).
// `null` → l'appelant retombe sur sa source d'origine (repli sûr). Fonction PURE.
export function committedCollectionList(
  payload: unknown,
  collection: string,
): Array<Record<string, unknown> & { slug: string }> | null {
  const entries = (payload as SnapshotPayload | null | undefined)?.collections?.[collection]?.entries
  if (!Array.isArray(entries) || entries.length === 0) return null
  return entries.map((e) => ({ slug: e.slug, ...(e.data ?? {}) }))
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
// importent ce fichier et le passent ici — fonction PURE, rendu STATIQUE au build.
// `null` → l'appelant retombe sur la composition d'origine (repli sûr).
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

// Le chrome (en-tête/pied) committé, extrait du même payload repo. Les valeurs
// sont typées `unknown` : leur forme appartient au site (chaque en-tête a ses
// propres champs) — le composant les fusionne sur ses propres DEFAULTS typés.
export function committedChrome(
  payload: unknown,
): { header?: unknown; footer?: unknown } | null {
  return (payload as SnapshotPayload | null | undefined)?.chrome ?? null
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
