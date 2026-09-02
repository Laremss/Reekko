import { ReactNode } from 'react'

interface MentionsLegalesProps {
  subtitle?: string
  title?: string
  lastUpdate?: string
}

const MENTIONSLEGALES_DEFAULTS = {
  subtitle: 'Informations légales',
  title: 'Mentions légales',
  lastUpdate: 'Dernière mise à jour : mars 2026'
}

export default function MentionsLegales(props: MentionsLegalesProps = {}) {
  const { subtitle, title, lastUpdate } = { ...MENTIONSLEGALES_DEFAULTS, ...props } as typeof MENTIONSLEGALES_DEFAULTS

  return (
    <div className="mb-12">
      <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">{subtitle}</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-zinc-500 text-sm">{lastUpdate}</p>
    </div>
  )
}