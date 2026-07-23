// [Remolder] Résolution d'un clic vers le CHAMP de données qui l'a produit.
//
// Cœur du pont d'édition, volontairement SANS React et SANS notion de bloc :
// on donne un objet de données quelconque (props d'une section, données d'un
// article, réglages d'une page de liste, contenu du header) et un point cliqué,
// on renvoie le chemin de la propriété correspondante. C'est ce qui permet au
// pont de fonctionner sur N'IMPORTE QUELLE page — pas seulement celles montées
// en blocs.

export interface FieldHit {
  path: string
  value: string
}

export function norm(s: string): string {
  return s.replace(/\s+/g, ' ').trim()
}

/** Parcourt récursivement des données (listes, objets, boutons) en ignorant les
 *  méta-propriétés (préfixe `_`). */
function visitStrings(
  data: Record<string, unknown>,
  fn: (value: string, path: string) => boolean | void,
): void {
  let stop = false
  const visit = (val: unknown, path: string) => {
    if (stop) return
    if (typeof val === 'string') {
      if (fn(val, path) === true) stop = true
    } else if (Array.isArray(val)) {
      val.forEach((item, i) => visit(item, `${path}.${i}`))
    } else if (val && typeof val === 'object') {
      for (const [k, v] of Object.entries(val as Record<string, unknown>)) {
        if (k.startsWith('_')) continue
        visit(v, `${path}.${k}`)
      }
    }
  }
  for (const [k, v] of Object.entries(data)) {
    if (k.startsWith('_')) continue
    visit(v, k)
  }
}

/** Champ dont le texte correspond au texte cliqué. Exact d'abord ; sinon celui
 *  qui CONTIENT le texte (une ligne d'un champ multi-lignes rendue en <li>). */
export function resolveField(data: Record<string, unknown>, text: string): FieldHit | null {
  const target = norm(text)
  // Trop court = ambigu ; trop long = on a cliqué un conteneur entier.
  if (!target || target.length > 400) return null
  let exact: FieldHit | null = null
  let contains: FieldHit | null = null
  visitStrings(data, (val, path) => {
    const v = norm(val)
    if (!v) return
    if (v === target) {
      exact = { path, value: val }
      return true
    }
    if (!contains && target.length >= 8 && v.includes(target)) contains = { path, value: val }
  })
  return exact ?? contains
}

/** Image cliquée -> propriété qui porte sa source, y compris derrière
 *  l'optimiseur Next (`/_next/image?url=<src encodé>`). */
export function resolveImage(
  data: Record<string, unknown>,
  img: HTMLImageElement,
): FieldHit | null {
  const attr = img.getAttribute('src') ?? ''
  const cur = img.currentSrc || attr
  if (!attr && !cur) return null
  const matches = (v: string) =>
    v === attr ||
    v === cur ||
    attr.includes(encodeURIComponent(v)) ||
    cur.includes(encodeURIComponent(v)) ||
    ((v.startsWith('/') || v.startsWith('http')) && (attr.endsWith(v) || cur.endsWith(v)))
  let hit: FieldHit | null = null
  visitStrings(data, (val, path) => {
    if (val.length > 3 && matches(val)) {
      hit = { path, value: val }
      return true
    }
  })
  return hit
}

/** Nœud (souvent TEXTE) précisément sous le curseur — indispensable quand deux
 *  propriétés sont rendues côte à côte dans le même élément (titre + accent). */
export function caretNodeFromPoint(x: number, y: number): Node | null {
  const d = document as Document & {
    caretRangeFromPoint?: (x: number, y: number) => Range | null
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node } | null
  }
  if (typeof d.caretRangeFromPoint === 'function') {
    return d.caretRangeFromPoint(x, y)?.startContainer ?? null
  }
  if (typeof d.caretPositionFromPoint === 'function') {
    return d.caretPositionFromPoint(x, y)?.offsetNode ?? null
  }
  return null
}

export function getDeep(root: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, seg) => {
    if (acc == null) return undefined
    if (Array.isArray(acc)) return acc[Number(seg)]
    if (typeof acc === 'object') return (acc as Record<string, unknown>)[seg]
    return undefined
  }, root)
}

/** Couleur calculée (rgb/rgba) -> hex, pour pré-remplir le sélecteur. */
export function rgbToHex(rgb: string): string | undefined {
  const m = rgb.match(/\d+(\.\d+)?/g)
  if (!m || m.length < 3) return undefined
  return (
    '#' +
    m
      .slice(0, 3)
      .map((n) => Math.round(Number(n)).toString(16).padStart(2, '0'))
      .join('')
  )
}

/** Sélecteur structurel de `el` relatif à sa frontière — clé des styles
 *  d'élément (`_css`). Même DOM en aperçu et en production → même sélecteur. */
export function cssPathFrom(wrapper: Element, el: Element): string | null {
  const parts: string[] = []
  let cur: Element | null = el
  while (cur && cur !== wrapper) {
    const parent: Element | null = cur.parentElement
    if (!parent) return null
    const idx = Array.from(parent.children).indexOf(cur) + 1
    parts.unshift(`${cur.tagName.toLowerCase()}:nth-child(${idx})`)
    cur = parent
  }
  return parts.length > 0 ? '> ' + parts.join(' > ') : null
}

/** Résolution complète d'un clic : image, puis nœud texte sous le curseur,
 *  puis remontée de l'élément cliqué jusqu'à `boundary`. */
export function resolveHit(
  data: Record<string, unknown>,
  x: number,
  y: number,
  target: Element,
  boundary: Element,
): { hit: FieldHit; el: HTMLElement } | null {
  if (target instanceof HTMLImageElement) {
    const h = resolveImage(data, target)
    if (h) return { hit: h, el: target }
  }
  const node = caretNodeFromPoint(x, y)
  if (node?.nodeType === Node.TEXT_NODE) {
    const h = resolveField(data, node.textContent ?? '')
    if (h && node.parentElement) return { hit: h, el: node.parentElement }
  }
  let el: Element | null = target
  while (el && el !== boundary) {
    const h = resolveField(data, el.textContent ?? '')
    if (h && el instanceof HTMLElement) return { hit: h, el }
    el = el.parentElement
  }
  return null
}
