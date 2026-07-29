// [Remolder] Styles d'ÉLÉMENT posés depuis le Studio (meta-prop `_css` des
// blocs) : sélecteur structurel relatif au wrapper du bloc → réglages précis
// (px). Le même DOM étant rendu en preview et en prod, le sélecteur vaut
// pour les deux — c'est du style DONNÉE, jamais du code.

export interface RemolderElementStyle {
  fontSize?: number
  radius?: number
  color?: string
  weight?: number
}

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
    if (typeof st.weight === 'number' && st.weight >= 100 && st.weight <= 900) {
      props.push(`font-weight: ${Math.round(st.weight)} !important`)
    }
    if (props.length === 0) continue
    rules.push(`[data-remolder-block="${blockId}"] ${sel} { ${props.join('; ')}; }`)
  }
  return rules.join('\n')
}
