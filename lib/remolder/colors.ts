// [Remolder] Conversion hex -> canaux RGB "r g b" pour les CSS variables de marque.
// (Tailwind utilise rgb(var(--brand-x) / <alpha-value>), d'où le besoin de canaux.)

export function hexToRgbChannels(hex: string): string | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.trim())
  if (!m) return null
  const r = parseInt(m[1], 16)
  const g = parseInt(m[2], 16)
  const b = parseInt(m[3], 16)
  return `${r} ${g} ${b}`
}

export type BrandScale = Record<string, string> // shade -> hex

// Transforme l'échelle de marque (hex) en déclarations CSS var (canaux RGB).
export function brandScaleToCssVars(scale: BrandScale): Record<string, string> {
  const out: Record<string, string> = {}
  for (const [shade, hex] of Object.entries(scale)) {
    const channels = hexToRgbChannels(hex)
    if (channels) out[`--brand-${shade}`] = channels
  }
  return out
}

export function cssVarsToInlineStyle(vars: Record<string, string>): string {
  return Object.entries(vars)
    .map(([k, v]) => `${k}: ${v};`)
    .join(' ')
}
