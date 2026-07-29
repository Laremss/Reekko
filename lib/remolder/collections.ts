// [Remolder] Collections CMS — couche de lecture générique (site-agnostique).
// Une « collection » = un type de contenu (Articles, Témoignages…) ; ses
// « entrées » = les enregistrements. Le blog Reekko en est la 1re instance.
//
// Draft (preview du Studio) : lit les tables live remolder_collection_entries.
// Publié (prod) : lit le dernier snapshot publié (payload.collections).
// Fallback silencieux sur null → l'appelant retombe sur son contenu d'origine
// (ici les MDX), donc une publication ne peut jamais casser le site.

import readingTime from 'reading-time'
import type { BlogPost } from '@/lib/blog'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
const SITE_ID = process.env.NEXT_PUBLIC_REMOLDER_SITE_ID ?? ''

export interface RemolderEntry {
  slug: string
  data: Record<string, unknown>
  position?: number
}

interface CollectionSnapshot {
  collections?: Record<string, { entries?: RemolderEntry[]; page?: Record<string, unknown> }>
}

async function rest<T>(path: string): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Remolder REST ${path} -> ${res.status}`)
  return (await res.json()) as T
}

// --- Draft : tables live ---------------------------------------------------
async function draftEntries(collectionSlug: string): Promise<RemolderEntry[] | null> {
  try {
    const cols = await rest<Array<{ id: string }>>(
      `remolder_collections?site_id=eq.${SITE_ID}&slug=eq.${encodeURIComponent(collectionSlug)}&select=id&limit=1`,
    )
    const col = cols[0]
    if (!col) return null
    const rows = await rest<Array<{ slug: string; data: Record<string, unknown>; position: number }>>(
      `remolder_collection_entries?collection_id=eq.${col.id}&order=position.asc&select=slug,data,position`,
    )
    return rows
  } catch {
    return null
  }
}

// --- Publié : dernier snapshot --------------------------------------------
async function publishedEntries(collectionSlug: string): Promise<RemolderEntry[] | null> {
  try {
    const rows = await rest<Array<{ payload: CollectionSnapshot }>>(
      `remolder_snapshots?site_id=eq.${SITE_ID}&kind=eq.published&order=created_at.desc&select=payload&limit=1`,
    )
    const entries = rows[0]?.payload?.collections?.[collectionSlug]?.entries
    return Array.isArray(entries) ? entries : null
  } catch {
    return null
  }
}

/** Entrées d'une collection (draft si preview, sinon publié). null = fallback. */
export async function getEntries(
  collectionSlug: string,
  draft: boolean,
): Promise<RemolderEntry[] | null> {
  return draft ? draftEntries(collectionSlug) : publishedEntries(collectionSlug)
}

/** Contenu de la PAGE de liste d'une collection (hero, intro, CTA du /blog).
 * Draft = colonne remolder_collections.page ; publié = snapshot. null = fallback. */
export async function getCollectionPage(
  collectionSlug: string,
  draft: boolean,
): Promise<Record<string, unknown> | null> {
  try {
    if (draft) {
      const rows = await rest<Array<{ page: Record<string, unknown> | null }>>(
        `remolder_collections?site_id=eq.${SITE_ID}&slug=eq.${encodeURIComponent(collectionSlug)}&select=page&limit=1`,
      )
      return rows[0]?.page ?? null
    }
    const rows = await rest<Array<{ payload: CollectionSnapshot }>>(
      `remolder_snapshots?site_id=eq.${SITE_ID}&kind=eq.published&order=created_at.desc&select=payload&limit=1`,
    )
    return rows[0]?.payload?.collections?.[collectionSlug]?.page ?? null
  } catch {
    return null
  }
}

/** Une entrée par son slug. null = fallback. */
export async function getEntry(
  collectionSlug: string,
  entrySlug: string,
  draft: boolean,
): Promise<RemolderEntry | null> {
  const entries = await getEntries(collectionSlug, draft)
  return entries?.find((e) => e.slug === entrySlug) ?? null
}

// --- Mapping entrée -> article de blog ------------------------------------
// Spécifique au cas d'usage blog : traduit les champs génériques d'une entrée
// dans la forme BlogPost attendue par les pages existantes.
export function entryToPost(entry: RemolderEntry): BlogPost {
  const d = entry.data
  const content = String(d.content ?? '')
  const str = (k: string, fallback = '') => (d[k] != null ? String(d[k]) : fallback)
  return {
    slug: entry.slug,
    title: str('title'),
    description: str('description'),
    date: str('date') || new Date().toISOString(),
    author: str('author', 'Rémi Bitouzé'),
    category: str('category', 'Growth Marketing'),
    tags: str('tags')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    coverImage: str('coverImage', '/images/blog/default.jpg'),
    readingTime: readingTime(content).text,
    content,
    excerpt: str('excerpt') || content.slice(0, 200).replace(/[#*`]/g, '') + '...',
  }
}
