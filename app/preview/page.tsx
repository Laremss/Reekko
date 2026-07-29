// [Remolder] Route de preview data-driven, embarquée dans l'éditeur.
// Rendu depuis l'état DRAFT (Supabase). Toujours dynamique (jamais mis en cache).
import { getPreviewData } from '@/lib/remolder/data'
import PreviewRoot from '@/components/remolder/PreviewRoot'
import RemolderBridge from '@/components/remolder/RemolderBridge'

export const dynamic = 'force-dynamic'

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ path?: string }>
}) {
  const { path } = await searchParams
  let data
  try {
    data = await getPreviewData(path || '/')
  } catch (e) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-400 p-8 text-center">
        <div>
          <p className="text-zinc-200 font-semibold mb-2">Preview Remolder indisponible</p>
          <p className="text-sm">
            Vérifie les variables d&apos;environnement Supabase.
            <br />
            {String((e as Error)?.message)}
          </p>
        </div>
      </div>
    )
  }

  // Le shell de page (dégagement sous le header fixe) appartient à la page,
  // pas aux blocs — la home gère son propre espacement, les autres pages non.
  return (
    <div className={(path || '/') !== '/' ? 'pt-16' : undefined}>
      <RemolderBridge initialTokens={data.tokens} />
      <PreviewRoot initialBlocks={data.blocks} initialTokens={data.tokens} />
    </div>
  )
}
