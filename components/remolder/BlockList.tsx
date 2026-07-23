// [Remolder] Rendu serveur d'une liste de blocs publiée (prod, sans interactivité
// d'édition). Applique aussi les design tokens en CSS vars sur un conteneur —
// la cascade fait le reste, sans toucher aux composants.
import { Fragment } from 'react'
import { BLOCK_REGISTRY } from './registry'
import { brandScaleToCssVars, cssVarsToInlineStyle } from '@/lib/remolder/colors'
import { elementCssRules } from '@/lib/remolder/css'
import type { RemolderBlock, RemolderTokens } from '@/lib/remolder/data'

export default function BlockList({
  blocks,
  tokens,
}: {
  blocks: RemolderBlock[]
  tokens: RemolderTokens
}) {
  const vars = {
    ...brandScaleToCssVars(tokens.brand?.scale ?? {}),
    ...(tokens.vars ?? {}),
  }
  // Échelle de texte du site (%) : posée sur :root, tout ce qui est en rem suit.
  const fontScale =
    tokens.fontScale && Math.round(tokens.fontScale) !== 100
      ? `font-size: ${tokens.fontScale}%;`
      : ''
  return (
    <>
      {/* Tokens appliqués sur :root pour couvrir AUSSI header/footer (hors blocs). */}
      {(Object.keys(vars).length > 0 || fontScale) && (
        <style>{`:root { ${cssVarsToInlineStyle(vars)} ${fontScale} }`}</style>
      )}
      {blocks
        .filter((b) => b.visible !== false)
        .map((b) => {
          const Cmp = BLOCK_REGISTRY[b.type]
          if (!Cmp) return null
          const content = Object.fromEntries(
            Object.entries(b.props).filter(([k]) => !k.startsWith('_')),
          )
          const accent = (b.props as Record<string, unknown>)._accent as
            | { scale?: Record<string, string> }
            | undefined
          // Ancre (_anchor) : id réel sur la section → liens directs #ancre.
          const rawAnchor = (b.props as Record<string, unknown>)._anchor
          const anchor =
            typeof rawAnchor === 'string' && rawAnchor.trim() ? rawAnchor.trim() : undefined
          // Styles d'élément posés depuis le Studio (_css) : mêmes sélecteurs
          // qu'en preview, le wrapper data-remolder-block sert d'ancrage.
          const cssRules = elementCssRules(b.id, (b.props as Record<string, unknown>)._css)
          // Override local d'accent / ancre / styles : conteneur dédié.
          if (accent?.scale || anchor || cssRules) {
            return (
              <Fragment key={b.id}>
                {cssRules && <style>{cssRules}</style>}
                <div
                  id={anchor}
                  data-remolder-block={b.id}
                  style={
                    accent?.scale
                      ? (brandScaleToCssVars(accent.scale) as React.CSSProperties)
                      : undefined
                  }
                >
                  <Cmp {...content} />
                </div>
              </Fragment>
            )
          }
          return <Cmp key={b.id} {...content} />
        })}
    </>
  )
}
