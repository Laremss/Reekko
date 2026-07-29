// [Remolder] Registre des ZONES ÉDITABLES de la page courante.
//
// Une zone = « ces données-là sont rendues quelque part dans cette page ».
// C'est la généralisation de ce que faisait le pont pour le seul chrome :
//   - `__chrome__` / `__footer__` : navigation et pied de page ;
//   - `entry:<id>`               : un article (entrée de collection) ;
//   - `listpage:<collectionId>`  : les réglages d'une page de liste ;
//   - n'importe quoi d'autre qu'un site déclarera plus tard.
//
// Grâce à ce registre, le pont n'a plus besoin de savoir COMMENT la page est
// construite : il résout un clic contre les zones déclarées. Une page montée en
// blocs, un article ou une page sur mesure sont traités de la même façon.

export interface EditableZone {
  /** Identifiant de la donnée côté Studio (sert au routage de la sauvegarde). */
  id: string
  /** Les données réellement rendues dans cette zone. */
  data: Record<string, unknown>
  /** Sélecteur délimitant la zone dans le DOM. Absent = toute la page. */
  selector?: string
}

const zones = new Map<string, EditableZone>()
const listeners = new Set<() => void>()

function notify() {
  for (const l of listeners) l()
}

export function registerZone(zone: EditableZone): () => void {
  zones.set(zone.id, zone)
  notify()
  return () => {
    zones.delete(zone.id)
    notify()
  }
}

/** Met à jour les données d'une zone déjà déclarée (édition en direct). */
export function updateZoneData(id: string, data: Record<string, unknown>): void {
  const z = zones.get(id)
  if (!z) return
  zones.set(id, { ...z, data })
  notify()
}

export function getZones(): EditableZone[] {
  return [...zones.values()]
}

export function subscribeZones(fn: () => void): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
