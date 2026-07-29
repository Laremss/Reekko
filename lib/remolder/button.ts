// [Remolder] Type d'un champ "bouton" éditable : libellé + lien/ancre + couleur
// locale optionnelle. Remplace les anciennes props texte simples (ctaPrimary
// etc.) pour permettre l'édition du lien et un override de couleur par élément
// (le réglage global reste hérité tant qu'aucun accent n'est posé ici).

export interface ButtonAccent {
  hex: string
  scale: Record<string, string>
}

export interface ButtonValue {
  label: string
  href: string
  accent?: ButtonAccent | null
}

// Accepte l'ancien format (string) pour ne jamais casser un contenu déjà
// publié/en cache : une simple chaîne devient un bouton pointant vers `fallbackHref`.
export function resolveButton(
  value: unknown,
  fallback: { label: string; href: string },
): ButtonValue {
  if (typeof value === 'string' && value) {
    return { label: value, href: fallback.href, accent: null }
  }
  if (value && typeof value === 'object') {
    const v = value as Partial<ButtonValue>
    return {
      label: v.label || fallback.label,
      href: v.href || fallback.href,
      accent: v.accent ?? null,
    }
  }
  return { label: fallback.label, href: fallback.href, accent: null }
}
