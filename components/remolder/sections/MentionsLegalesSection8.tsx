import Link from 'next/link'

interface Section8Props {
  contactEmail?: string
  contactEmailLabel?: string
  privacyPolicyHref?: string
  privacyPolicyLabel?: string
  textBeforeEmail?: string
  textBeforeLink?: string
  textAfterLink?: string
}

const SECTION8_DEFAULTS = {
  textBeforeEmail: 'Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à',
  contactEmail: 'mailto:contact.reekko@gmail.com',
  contactEmailLabel: 'contact.reekko@gmail.com',
  textBeforeLink: 'ou consulter notre',
  privacyPolicyHref: '/politique-de-confidentialite',
  privacyPolicyLabel: 'politique de confidentialité',
  textAfterLink: '.',
}

export default function Section8(props: Section8Props) {
  const {
    contactEmail,
    contactEmailLabel,
    privacyPolicyHref,
    privacyPolicyLabel,
    textBeforeEmail,
    textBeforeLink,
    textAfterLink,
  } = { ...SECTION8_DEFAULTS, ...props } as typeof SECTION8_DEFAULTS

  return (
    <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6">
                <p className="text-sm text-zinc-400">
                  {textBeforeEmail}{' '}
                  <a href={contactEmail} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {contactEmailLabel}
                  </a>{' '}
                  {textBeforeLink}{' '}
                  <Link href={privacyPolicyHref as string} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    {privacyPolicyLabel}
                  </Link>{textAfterLink}
                </p>
              </section>
  )
}
