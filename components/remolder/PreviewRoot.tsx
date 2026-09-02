'use client'

// [Remolder] Rendu d'une page ASSEMBLÉE EN BLOCS, en direct.
//
// Ne s'occupe QUE des blocs : liste ordonnée, patch instantané venu du Studio,
// sélection, styles d'élément. Tout ce qui est commun à n'importe quelle page
// — protocole avec le Studio, tokens, neutralisation des liens, résolution d'un
// clic vers un champ — vit désormais dans `RemolderBridge`, monté par le layout :
// c'est ce qui rend l'édition au clic disponible sur TOUTES les pages, pas
// seulement celles montées en blocs.

import { Fragment, useEffect, useMemo, useState } from 'react'
import { BLOCK_REGISTRY } from './registry'
import { brandScaleToCssVars } from '@/lib/remolder/colors'
import { elementCssRules, sectionPadStyle, sectionHideCss } from '@/lib/remolder/css'
import type { RemolderBlock, RemolderTokens } from '@/lib/remolder/data'
import { getDeep, norm, resolveHit } from './bridge/resolve'
import {
  activateField,
  clearField,
  getActiveField,
  markField,
  postFieldRect,
  selectOwner,
} from './bridge/field'

interface Props {
  initialBlocks: RemolderBlock[]
  initialTokens: RemolderTokens
}

type BlockMessage =
  | { source: 'remolder'; type: 'patch-block'; blockId: string; props: Record<string, unknown> }
  | { source: 'remolder'; type: 'set-blocks'; blocks: RemolderBlock[] }
  | { source: 'remolder'; type: 'select-block'; blockId: string | null }

export default function PreviewRoot({ initialBlocks }: Props) {
  const [blocks, setBlocks] = useState<RemolderBlock[]>(initialBlocks)
  const [selected, setSelected] = useState<string | null>(null)

  // Messages propres aux blocs (les messages généraux sont traités par le pont).
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const msg = e.data as BlockMessage
      if (!msg || msg.source !== 'remolder') return
      switch (msg.type) {
        case 'patch-block':
          setBlocks((prev) =>
            prev.map((b) =>
              b.id === msg.blockId ? { ...b, props: { ...b.props, ...msg.props } } : b,
            ),
          )
          break
        case 'set-blocks':
          setBlocks(msg.blocks)
          break
        case 'select-block':
          setSelected(msg.blockId)
          if (msg.blockId) {
            requestAnimationFrame(() => {
              document
                .querySelector(`[data-remolder-block="${msg.blockId}"]`)
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            })
          }
          break
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  // Après un patch, l'élément suivi peut avoir été remplacé : on le retrouve
  // par le texte ACTUEL de la propriété éditée.
  useEffect(() => {
    const f = getActiveField()
    if (!f || f.ownerId.startsWith('__') || f.ownerId.includes(':')) return
    if (f.el?.isConnected) {
      postFieldRect()
      return
    }
    const wrapper = document.querySelector(`[data-remolder-block="${f.ownerId}"]`)
    const block = blocks.find((b) => b.id === f.ownerId)
    const value = block ? getDeep(block.props, f.path) : undefined
    if (!wrapper || typeof value !== 'string') {
      clearField()
      return
    }
    const target = norm(value)
    let found: HTMLElement | null = null
    const walk = (el: Element) => {
      for (const child of Array.from(el.children)) walk(child)
      if (!found && el instanceof HTMLElement) {
        const t = norm(el.textContent ?? '')
        if (t && (t === target || (t.length >= 8 && target.includes(t)))) found = el
      }
    }
    walk(wrapper)
    if (found) {
      f.el = found
      markField(found)
      postFieldRect()
    }
  }, [blocks])

  const visibleBlocks = useMemo(() => blocks.filter((b) => b.visible !== false), [blocks])

  return (
    <>
      {/* Voile de survol en CSS pur (::after) : le wrapper garde EXACTEMENT les
          mêmes enfants qu'en production → les sélecteurs des styles d'élément
          (_css) valent pour les deux rendus. */}
      <style>{`.remolder-block::after{content:"";position:absolute;inset:0;z-index:40;pointer-events:none;opacity:0;transition:opacity .15s;box-shadow:inset 0 0 0 1px rgb(var(--brand-500) / 0.4)}.remolder-block:hover::after{opacity:1}`}</style>
      {visibleBlocks.map((block) => {
        const Cmp = BLOCK_REGISTRY[block.type]
        if (!Cmp) return null
        const isSelected = selected === block.id
        // Override local de couleur : la gamme (_accent.scale, calculée par le
        // Studio) est posée en variables CSS sur CE bloc — la cascade fait le reste.
        const accent = accentVars(block.props)
        const rawAnchor = block.props._anchor
        const anchor =
          typeof rawAnchor === 'string' && rawAnchor.trim() ? rawAnchor.trim() : undefined
        const cssRules = elementCssRules(block.id, block.props._css)
        // Fond de la SECTION (_bg) : posé sur le wrapper du bloc, propre à
        // chaque section (chaque section peut avoir sa couleur de fond).
        const rawBg = block.props._bg
        const bg = typeof rawBg === 'string' && /^#[0-9a-f]{3,8}$/i.test(rawBg) ? rawBg : undefined
        // Réglages avancés : espacement vertical (_pad) + affichage selon
        // l'écran (_hide). En preview la section reste toujours sélectionnable,
        // le masquage responsive suit exactement la règle rendue en prod.
        const pad = sectionPadStyle(block.props)
        const hideCss = sectionHideCss(block.id, block.props)
        const rules = [cssRules, hideCss].filter(Boolean).join('\n')
        return (
          <Fragment key={block.id}>
            {rules && <style>{rules}</style>}
            <div
              id={anchor}
              data-remolder-block={block.id}
              // Capture : on intercepte AVANT les <Link>/<Button> du site pour
              // que cliquer une section la sélectionne (jamais naviguer).
              onClickCapture={(e) => {
                e.preventDefault()
                e.stopPropagation()
                selectOwner(block.id)
                const r = resolveHit(
                  block.props,
                  e.clientX,
                  e.clientY,
                  e.target as Element,
                  e.currentTarget,
                )
                if (r) activateField(block.id, r.hit, r.el)
                else clearField()
              }}
              style={{
                position: 'relative',
                cursor: 'pointer',
                outline: isSelected ? '2px solid rgb(var(--brand-500))' : 'none',
                outlineOffset: '-2px',
                ...(bg ? { backgroundColor: bg } : {}),
                ...pad,
                ...accent,
              }}
              className="remolder-block"
            >
              <Cmp {...contentProps(block.props)} />
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

// Props de contenu = props sans les méta-propriétés (préfixe '_').
function contentProps(props: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(props).filter(([k]) => !k.startsWith('_')))
}

// Variables CSS d'un éventuel override d'accent posé par le Studio.
function accentVars(props: Record<string, unknown>): Record<string, string> {
  const accent = props._accent as { scale?: Record<string, string> } | undefined
  if (!accent?.scale) return {}
  return brandScaleToCssVars(accent.scale)
}
