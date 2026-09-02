import Link from 'next/link'

interface Section9Props {
  beforeEmailText?: string
  emailAddress?: string
  emailHref?: string
  betweenEmailAndLinkText?: string
  legalLinkText?: string
  legalLinkHref?: string
}

const SECTION9_DEFAULTS = {
  beforeEmailText: 'Pour toute question relative à cette politique, écrivez-nous à ',
  emailAddress: 'contact.reekko@gmail.com',
  emailHref: 'mailto:contact.reekko@gmail.com',
  betweenEmailAndLinkText: ' ou consultez nos ',
  legalLinkText: 'mentions légales',
  legalLinkHref: '/mentions-legales',
}

export default function Section9(props: Section9Props = {}) {
  const { beforeEmailText, emailAddress, emailHref, betweenEmailAndLinkText, legalLinkText, legalLinkHref } = { ...SECTION9_DEFAULTS, ...props } as typeof SECTION9_DEFAULTS

  return (
    <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6">
      <p className="text-sm text-zinc-400">
        {beforeEmailText}
        <a href={emailHref} className="text-indigo-400 hover:text-indigo-300 transition-colors">
          {emailAddress}
        </a>
        {betweenEmailAndLinkText}
        <Link href={legalLinkHref} className="text-indigo-400 hover:text-indigo-300 transition-colors">
          {legalLinkText}
        </Link>
        .
      </p>
    </section>
  )
}