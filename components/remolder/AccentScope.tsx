// [Remolder] Scope de couleur locale : pose les CSS vars --brand-* sur un
// sous-arbre SANS affecter la mise en page (display: contents). Utilisé pour
// l'override de couleur d'un élément individuel (ex. un bouton), par opposition
// à l'override de brique entière déjà géré par un wrapper équivalent plus haut.
import type { ButtonAccent } from '@/lib/remolder/button'
import { brandScaleToCssVars } from '@/lib/remolder/colors'

export default function AccentScope({
  accent,
  children,
}: {
  accent?: ButtonAccent | null
  children: React.ReactNode
}) {
  if (!accent?.scale) return <>{children}</>
  return (
    <span style={{ display: 'contents', ...brandScaleToCssVars(accent.scale) }}>
      {children}
    </span>
  )
}
