// [Remolder] Routes des pages CRÉÉES DANS LE STUDIO : le code du site n'a pas de
// fichier pour elles — ce catch-all sert leur composition publiée (snapshot),
// ou le brouillon en ?remolder=draft. Les routes codées du site restent
// prioritaires : Next ne passe ici que si aucune autre page ne correspond.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import BlockList from '@/components/remolder/BlockList'
import {
  buildOgMetadata,
  getPreviewData,
  getPublishedData,
  type PageSeo,
  type PublishedData,
} from '@/lib/remolder/data'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ Remolder: string[] }> }

function pathOf(segments: string[]): string {
  return '/' + segments.map(decodeURIComponent).join('/')
}

async function loadData(path: string, draft: boolean): Promise<PublishedData | null> {
  if (draft) {
    const d = await getPreviewData(path)
    if (!d.pageId) return null
    return { blocks: d.blocks, tokens: d.tokens, seo: d.seo as PageSeo }
  }
  return getPublishedData(path)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { Remolder } = await params
  const draft = (await headers()).get('x-remolder-draft') === '1'
  const data = await loadData(pathOf(Remolder), draft)
  if (!data) return {}
  const seo = data.seo ?? {}
  return {
    ...(seo.title ? { title: seo.title } : {}),
    ...(seo.description ? { description: seo.description } : {}),
    ...buildOgMetadata(seo, {
      title: seo.title ?? '',
      description: seo.description ?? '',
    }),
  }
}

export default async function RemolderStudioPage({ params }: Props) {
  const { Remolder } = await params
  const draft = (await headers()).get('x-remolder-draft') === '1'
  const data = await loadData(pathOf(Remolder), draft)
  if (!data || data.blocks.length === 0) notFound()
  return (
    <main>
      <BlockList blocks={data.blocks} tokens={data.tokens} />
    </main>
  )
}
