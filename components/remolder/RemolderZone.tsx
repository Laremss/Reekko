'use client'

// [Remolder] Déclare qu'une portion de page rend des DONNÉES ÉDITABLES.
//
// C'est le seul geste qu'une page doit faire pour devenir modifiable au clic :
//
//   <RemolderZone enabled={draft} id={`entry:articles:${entry.slug}`} data={entry.data}>
//     …le gabarit d'article, inchangé…
//   </RemolderZone>
//
// Aucune instrumentation des composants n'est nécessaire : le pont retrouve
// tout seul quelle propriété a produit le texte cliqué. Ça vaut pour un article,
// les réglages d'une page de liste, ou n'importe quelle page sur mesure.
//
// Hors mode brouillon, le composant ne rend RIEN de plus que ses enfants : le
// DOM de production reste identique au caractère près.

import { useEffect } from 'react'
import { registerZone, updateZoneData } from './bridge/zones'

export default function RemolderZone({
  id,
  data,
  enabled = true,
  children,
}: {
  id: string
  data: Record<string, unknown>
  enabled?: boolean
  children?: React.ReactNode
}) {
  useEffect(() => {
    if (!enabled) return
    return registerZone({ id, data, selector: `[data-remolder-zone="${id}"]` })
    // `data` volontairement absent : l'inscription vaut pour l'identité de la
    // zone ; les changements de contenu passent par l'effet suivant.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, enabled])

  // Les données changent quand le Studio publie une édition : on tient le
  // registre à jour, sinon le clic suivant résoudrait contre l'ancien texte.
  useEffect(() => {
    if (enabled) updateZoneData(id, data)
  }, [id, data, enabled])

  if (!enabled) return <>{children}</>
  return <div data-remolder-zone={id}>{children}</div>
}
