// [Remolder] Champ actuellement édité en place, et dialogue avec le Studio.
//
// L'état vit au niveau du MODULE (pas d'un composant) parce qu'un seul champ
// peut être actif dans la page, et que deux acteurs le manipulent : le pont
// générique (chrome, articles, réglages de page) et le rendu par blocs. Les
// deux partagent donc ici la même surbrillance et le même protocole.

import { cssPathFrom, rgbToHex, type FieldHit } from './resolve'

const FIELD_OUTLINE = '1.5px solid rgb(var(--brand-500))'

interface ActiveField {
  /** Propriétaire de la donnée : id de bloc, `__chrome__`, `entry:<id>`… */
  ownerId: string
  path: string
  el: HTMLElement | null
}

let active: ActiveField | null = null

export function getActiveField(): ActiveField | null {
  return active
}

export function clearField(): void {
  if (active?.el) {
    active.el.style.outline = ''
    active.el.style.outlineOffset = ''
  }
  active = null
}

export function markField(el: HTMLElement): void {
  el.style.outline = FIELD_OUTLINE
  el.style.outlineOffset = '3px'
}

/** Position de l'élément actif -> Studio (ouverture, défilement, redimension). */
export function postFieldRect(): void {
  if (!active?.el || !active.el.isConnected) return
  const r = active.el.getBoundingClientRect()
  window.parent?.postMessage(
    {
      source: 'remolder',
      type: 'field-rect',
      rect: { top: r.top, left: r.left, width: r.width, height: r.height },
      viewport: { w: window.innerWidth, h: window.innerHeight },
    },
    '*',
  )
}

/** Active un champ résolu : surbrillance + signalement au Studio avec tout ce
 *  qu'il faut pour ouvrir sa barre d'édition au bon endroit. */
export function activateField(ownerId: string, hit: FieldHit, el: HTMLElement): void {
  clearField()
  active = { ownerId, path: hit.path, el }
  markField(el)
  const r = el.getBoundingClientRect()
  // La frontière de style est le bloc s'il y en a un, sinon la zone éditable
  // (article, réglages de page) : les styles d'élément marchent partout.
  const wrapper = el.closest('[data-remolder-block]') ?? el.closest('[data-remolder-zone]')
  const cssPath = wrapper ? cssPathFrom(wrapper, el) : null
  const cs = window.getComputedStyle(el)
  window.parent?.postMessage(
    {
      source: 'remolder',
      type: 'field-clicked',
      blockId: ownerId,
      path: hit.path,
      value: hit.value,
      multiline: hit.value.includes('\n') || hit.value.length > 90,
      rect: { top: r.top, left: r.left, width: r.width, height: r.height },
      viewport: { w: window.innerWidth, h: window.innerHeight },
      cssPath,
      computed: {
        fontSize: Math.round(parseFloat(cs.fontSize) || 16),
        radius: Math.round(parseFloat(cs.borderRadius) || 0),
        color: rgbToHex(cs.color),
        weight: Math.round(parseFloat(cs.fontWeight) || 400),
      },
    },
    '*',
  )
}

export function selectOwner(ownerId: string): void {
  window.parent?.postMessage({ source: 'remolder', type: 'block-clicked', blockId: ownerId }, '*')
}
