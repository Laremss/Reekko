// [Remolder] Rendu serveur d'une liste de blocs publiée (prod, sans interactivité
// d'édition). Applique aussi les design tokens en CSS vars sur un conteneur —
// la cascade fait le reste, sans toucher aux composants.
import { Fragment } from 'react'
import { BLOCK_REGISTRY } from './registry'
import { brandScaleToCssVars, cssVarsToInlineStyle } from '@/lib/remolder/colors'
import { elementCssRules, sectionPadStyle, sectionHideCss } from '@/lib/remolder/css'
import {
  buildJsonLd,
  buildOrganizationLd,
  type PageSeo,
  type RemolderBlock,
  type RemolderTokens,
} from '@/lib/remolder/data'

export default function BlockList({
  blocks,
  tokens,
  seo,
}: {
  blocks: RemolderBlock[]
  tokens: RemolderTokens
  /** SEO de la page : sert à émettre le JSON-LD des données structurées. */
  seo?: PageSeo
}) {
  const vars = {
    ...brandScaleToCssVars(tokens.brand?.scale ?? {}),
    ...(tokens.vars ?? {}),
  }
  // Données structurées éditées dans le Studio -> JSON-LD (en plus de celui
  // d'origine du site, préservé au montage). Rien si le type ne s'y prête pas.
  const jsonLd = buildJsonLd(seo, {
    title: seo?.title ?? '',
    description: seo?.description ?? '',
  })
  // Organisation du site (réglages SEO de site) : émise sur chaque page.
  const orgLd = buildOrganizationLd(tokens.siteSeo)
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
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {orgLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
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
          // Fond de la SECTION (_bg) : propre à chaque section, posé sur le wrapper.
          const rawBg = (b.props as Record<string, unknown>)._bg
          const bg = typeof rawBg === 'string' && /^#[0-9a-f]{3,8}$/i.test(rawBg) ? rawBg : undefined
          // Réglages avancés de section : espacement vertical (_pad) et
          // affichage selon l'écran (_hide, rendu en media query).
          const pad = sectionPadStyle(b.props)
          const hideCss = sectionHideCss(b.id, b.props)
          const rules = [cssRules, hideCss].filter(Boolean).join('\n')
          // Override local d'accent / ancre / styles / fond / espacement : conteneur dédié.
          if (accent?.scale || anchor || rules || bg || Object.keys(pad).length > 0) {
            const style: React.CSSProperties = {
              ...(accent?.scale ? (brandScaleToCssVars(accent.scale) as React.CSSProperties) : {}),
              ...(bg ? { backgroundColor: bg } : {}),
              ...pad,
            }
            return (
              <Fragment key={b.id}>
                {rules && <style>{rules}</style>}
                <div
                  id={anchor}
                  data-remolder-block={b.id}
                  style={Object.keys(style).length > 0 ? style : undefined}
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
