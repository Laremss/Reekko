// [Remolder] Styles d'ÉLÉMENT posés depuis le Studio (meta-prop `_css` des
// blocs) : sélecteur structurel relatif au wrapper du bloc → réglages précis
// (px). Le même DOM étant rendu en preview et en prod, le sélecteur vaut
// pour les deux — c'est du style DONNÉE, jamais du code.

export interface RemolderElementStyle {
  fontSize?: number
  radius?: number
  color?: string
  background?: string
  weight?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  width?: number
  maxWidth?: number
}

// Réglages en px -> propriété CSS. On borne large (0..4000) pour éviter les
// valeurs aberrantes tout en laissant de la marge (grandes sections/images).
const PX_PROPS: [keyof RemolderElementStyle, string][] = [
  ['marginTop', 'margin-top'],
  ['marginRight', 'margin-right'],
  ['marginBottom', 'margin-bottom'],
  ['marginLeft', 'margin-left'],
  ['paddingTop', 'padding-top'],
  ['paddingRight', 'padding-right'],
  ['paddingBottom', 'padding-bottom'],
  ['paddingLeft', 'padding-left'],
  ['width', 'width'],
  ['maxWidth', 'max-width'],
]

const SAFE_COLOR = /^#[0-9a-f]{3,8}$/i

// Les sélecteurs sont générés par la preview (tags + nth-child) ; tout ce qui
// sort de cet alphabet est ignoré (une donnée corrompue ne devient pas du CSS).
const SAFE_SELECTOR = /^[a-z0-9 >():-]+$/i

export function elementCssRules(blockId: string, css: unknown): string {
  if (!css || typeof css !== 'object' || Array.isArray(css)) return ''
  const rules: string[] = []
  for (const [sel, raw] of Object.entries(css as Record<string, RemolderElementStyle>)) {
    if (!SAFE_SELECTOR.test(sel)) continue
    const st = raw ?? {}
    const props: string[] = []
    if (typeof st.fontSize === 'number' && Number.isFinite(st.fontSize)) {
      props.push(`font-size: ${st.fontSize}px !important`)
    }
    if (typeof st.radius === 'number' && Number.isFinite(st.radius)) {
      props.push(`border-radius: ${st.radius}px !important`)
    }
    if (typeof st.color === 'string' && SAFE_COLOR.test(st.color)) {
      props.push(`color: ${st.color} !important`)
    }
    if (typeof st.background === 'string' && SAFE_COLOR.test(st.background)) {
      props.push(`background-color: ${st.background} !important`)
    }
    if (typeof st.weight === 'number' && st.weight >= 100 && st.weight <= 900) {
      props.push(`font-weight: ${Math.round(st.weight)} !important`)
    }
    for (const [key, cssProp] of PX_PROPS) {
      const v = st[key]
      if (typeof v === 'number' && Number.isFinite(v) && v >= 0 && v <= 4000) {
        props.push(`${cssProp}: ${v}px !important`)
      }
    }
    if (props.length === 0) continue
    rules.push(`[data-remolder-block="${blockId}"] ${sel} { ${props.join('; ')}; }`)
  }
  return rules.join('\n')
}

// ---- Réglages AVANCÉS au niveau de la SECTION (posés sur le wrapper) --------
// Espacement vertical propre (_pad) et affichage selon l'écran (_hide) : du
// style DONNÉE comme le reste, borné et validé, jamais du code arbitraire.

// Espacement mobile / ordinateur : borne < 768px (md) = « mobile ».
const MOBILE_MAX_PX = 767

function toPx(v: unknown): string | null {
  // 0 = pas d'espacement ajouté : on n'émet rien (le style reste minimal).
  return typeof v === 'number' && Number.isFinite(v) && v > 0 && v <= 600 ? `${v}px` : null
}

// Padding haut/bas ajouté à la section (meta-prop `_pad` = { t?, b? } en px).
// Rendu comme objet de style à étaler sur le wrapper (preview ET prod).
export function sectionPadStyle(props: unknown): Record<string, string> {
  const p = props && typeof props === 'object' ? (props as Record<string, unknown>)._pad : null
  if (!p || typeof p !== 'object') return {}
  const pad = p as Record<string, unknown>
  const out: Record<string, string> = {}
  const t = toPx(pad.t)
  const b = toPx(pad.b)
  if (t) out.paddingTop = t
  if (b) out.paddingBottom = b
  return out
}

// Affichage selon l'écran (meta-prop `_hide` = 'mobile' | 'desktop') : media
// query scopée au wrapper. On masque en display:none (la section reste dans le
// brouillon, juste retirée du rendu à cette taille).
export function sectionHideCss(blockId: string, props: unknown): string {
  const hide = props && typeof props === 'object' ? (props as Record<string, unknown>)._hide : null
  const sel = `[data-remolder-block="${blockId}"]`
  if (hide === 'mobile') {
    return `@media (max-width:${MOBILE_MAX_PX}px){${sel}{display:none !important}}`
  }
  if (hide === 'desktop') {
    return `@media (min-width:${MOBILE_MAX_PX + 1}px){${sel}{display:none !important}}`
  }
  return ''
}
