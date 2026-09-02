'use client'

// [Remolder] PONT D'ÉDITION — fonctionnalité de BASE du site monté.
//
// Ce composant est monté dans le LAYOUT en mode brouillon : il vaut donc pour
// toutes les pages, qu'elles soient assemblées en blocs, rendues par un gabarit
// partagé (article) ou écrites sur mesure (page de liste). Auparavant ce
// mécanisme était enfermé dans la route `/preview`, ce qui rendait le Studio
// incohérent : édition en place ici, panneau latéral en lecture seule ailleurs.
//
// Il porte tout ce qui ne dépend pas des blocs :
//   - le protocole avec le Studio (poignée de main, tokens, nettoyage) ;
//   - l'application des variables de design en direct ;
//   - la neutralisation de la navigation (l'aperçu ne doit pas partir ailleurs) ;
//   - la résolution d'un clic vers un champ, contre les ZONES déclarées.
//
// Le rendu par blocs (PreviewRoot) reste à part et gère ses propres clics : il
// connaît ses frontières de bloc, ce que le pont n'a pas à savoir.

import { useCallback, useEffect, useRef, useState } from 'react'
import { brandScaleToCssVars } from '@/lib/remolder/colors'
import type { RemolderTokens } from '@/lib/remolder/data'
import { resolveHit } from './bridge/resolve'
import { activateField, clearField, postFieldRect, selectOwner } from './bridge/field'
import { getZones, registerZone, subscribeZones, updateZoneData } from './bridge/zones'

// Applique la police d'affichage choisie dans le Studio : charge la Google Font
// et impose la famille sur tout le site (une balise <style> dédiée, remplacée à
// chaque changement). Sans police définie, on retire l'override (retour au
// dessin d'origine du site).
function applyDisplayFont(display?: string) {
  if (typeof document === 'undefined') return
  const STYLE_ID = 'remolder-font-override'
  const LINK_ID = 'remolder-font-link'
  const existingStyle = document.getElementById(STYLE_ID)
  if (!display) {
    existingStyle?.remove()
    document.getElementById(LINK_ID)?.remove()
    return
  }
  let link = document.getElementById(LINK_ID) as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.id = LINK_ID
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  }
  const family = display.replace(/ /g, '+')
  link.href = `https://fonts.googleapis.com/css2?family=${family}:wght@400;500;600;700&display=swap`
  const css = `:root, body { font-family: '${display}', ui-sans-serif, system-ui, sans-serif !important; }`
  if (existingStyle) {
    existingStyle.textContent = css
  } else {
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = css
    document.head.appendChild(style)
  }
}

// Couleur de fond du site : imposée sur html + body via une balise <style>
// dédiée (remplacée à chaque changement). Sans valeur, on retire l'override
// (retour au fond d'origine).
function applyBackground(hex?: string) {
  if (typeof document === 'undefined') return
  const STYLE_ID = 'remolder-bg-override'
  const existing = document.getElementById(STYLE_ID)
  if (!hex || !/^#[0-9a-f]{3,8}$/i.test(hex)) {
    existing?.remove()
    return
  }
  const css = `html, body { background-color: ${hex} !important; }`
  if (existing) {
    existing.textContent = css
  } else {
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = css
    document.head.appendChild(style)
  }
}

interface Props {
  /** Tokens initiaux (rendu serveur) ; le Studio peut les remplacer en direct. */
  initialTokens?: RemolderTokens
}

export default function RemolderBridge({ initialTokens }: Props) {
  const [tokens, setTokens] = useState<RemolderTokens | null>(initialTokens ?? null)
  // Le chrome est une zone comme une autre, simplement déclarée par le pont
  // lui-même puisque le Studio en pousse les données par message.
  const chromeRef = useRef<{ header: Record<string, unknown>; footer: Record<string, unknown> }>({
    header: {},
    footer: {},
  })

  // --- Variables de design appliquées en direct sur :root ---------------------
  const appliedVarsRef = useRef<string[]>([])
  useEffect(() => {
    if (!tokens) return
    const vars: Record<string, string> = {
      ...brandScaleToCssVars(tokens.brand?.scale ?? {}),
      ...(tokens.vars ?? {}),
    }
    const root = document.documentElement
    for (const k of appliedVarsRef.current) if (!(k in vars)) root.style.removeProperty(k)
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v)
    appliedVarsRef.current = Object.keys(vars)
    if (tokens.fontScale && Math.round(tokens.fontScale) !== 100) {
      root.style.fontSize = `${tokens.fontScale}%`
    } else {
      root.style.removeProperty('font-size')
    }
    applyDisplayFont(tokens.font?.display)
    applyBackground(tokens.background)
  }, [tokens])

  // --- Zones : le chrome est déclaré ici, les pages déclarent les leurs -------
  useEffect(() => {
    const offHeader = registerZone({ id: '__chrome__', data: {}, selector: 'header, [role="banner"]' })
    const offFooter = registerZone({ id: '__footer__', data: {}, selector: 'footer, [role="contentinfo"]' })
    return () => {
      offHeader()
      offFooter()
    }
  }, [])

  // --- Protocole avec le Studio ----------------------------------------------
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const msg = e.data as { source?: string; type?: string; [k: string]: unknown }
      if (!msg || msg.source !== 'remolder') return
      switch (msg.type) {
        case 'set-tokens':
          setTokens(msg.tokens as RemolderTokens)
          break
        case 'clear-field':
          clearField()
          break
        case 'set-chrome':
          // Les composants Header/Footer écoutent ce même message pour leur
          // rendu ; ici on retient la DONNÉE pour résoudre les clics dessus.
          if (msg.header) {
            chromeRef.current.header = msg.header as Record<string, unknown>
            updateZoneData('__chrome__', chromeRef.current.header)
          }
          if (msg.footer) {
            chromeRef.current.footer = msg.footer as Record<string, unknown>
            updateZoneData('__footer__', chromeRef.current.footer)
          }
          break
        case 'editor-hello':
          window.parent?.postMessage({ source: 'remolder', type: 'ready' }, '*')
          break
      }
    }
    window.addEventListener('message', onMessage)
    window.parent?.postMessage({ source: 'remolder', type: 'ready' }, '*')

    // L'aperçu ne doit jamais quitter la page en cours d'édition.
    function blockNav(e: MouseEvent) {
      const a = (e.target as HTMLElement).closest('a')
      // preventDefault seul : la navigation est annulée mais l'événement
      // poursuit sa route, donc la sélection continue de fonctionner.
      if (a) e.preventDefault()
    }
    document.addEventListener('click', blockNav, true)

    return () => {
      window.removeEventListener('message', onMessage)
      document.removeEventListener('click', blockNav, true)
    }
  }, [])

  // --- Clic -> champ, contre les zones déclarées ------------------------------
  const onDocClick = useCallback((e: MouseEvent) => {
    const t = e.target as Element | null
    if (!t) return
    // Une page montée en blocs gère elle-même ses clics (elle connaît ses
    // frontières) : le pont ne s'occupe que de ce qui vit en dehors.
    if (t.closest('[data-remolder-block]')) return

    const zones = getZones().filter((z) => Object.keys(z.data).length > 0)
    // On essaie d'abord les zones qui CONTIENNENT le clic (plus spécifiques),
    // puis les zones sans frontière (l'article occupe toute la page).
    const scoped = zones
      .map((z) => ({ zone: z, boundary: z.selector ? t.closest(z.selector) : null }))
      .filter((x) => !z_needsBoundary(x.zone) || x.boundary)
    const ordered = [
      ...scoped.filter((x) => x.boundary),
      ...scoped.filter((x) => !x.boundary),
    ]

    for (const { zone, boundary } of ordered) {
      const limit = boundary ?? document.body
      const r = resolveHit(zone.data, e.clientX, e.clientY, t, limit)
      if (r) {
        selectOwner(zone.id)
        activateField(zone.id, r.hit, r.el)
        return
      }
    }
    // Zone identifiée mais aucun champ précis : sélection simple, le Studio
    // ouvre le panneau correspondant.
    const hit = ordered.find((x) => x.boundary)
    if (hit) {
      clearField()
      selectOwner(hit.zone.id)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('click', onDocClick, true)
    const unsub = subscribeZones(() => {})
    return () => {
      document.removeEventListener('click', onDocClick, true)
      unsub()
    }
  }, [onDocClick])

  // --- Le popover du Studio suit l'élément quand la page défile ---------------
  useEffect(() => {
    let raf = 0
    const onMove = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(postFieldRect)
    }
    window.addEventListener('scroll', onMove, true)
    window.addEventListener('resize', onMove)
    return () => {
      window.removeEventListener('scroll', onMove, true)
      window.removeEventListener('resize', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}

/** Le chrome est délimité (header/footer) ; une zone de contenu peut occuper
 *  toute la page et n'a donc pas de frontière obligatoire. */
function z_needsBoundary(zone: { id: string }): boolean {
  return zone.id === '__chrome__' || zone.id === '__footer__'
}
