import { ReactNode } from 'react'

interface MentionsLegalesProps {
  subtitle?: string
  title?: string
  updateDate?: string
}

const MENTIONSLEGALES_DEFAULTS: MentionsLegalesProps = {
  subtitle: 'Informations légales',
  title: 'Mentions légales',
  updateDate: 'Dernière mise à jour : mars 2026',
}

export default function MentionsLegales(props: MentionsLegalesProps = {}) {
  const { subtitle, title, updateDate } = { ...MENTIONSLEGALES_DEFAULTS, ...props }

  return (
    <div className="mb-12">
              <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest mb-3">{subtitle}</p>
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                {title}
              </h1>
              <p className="text-zinc-500 text-sm">{updateDate}</p>
            </div>
  )
}