import Link from 'next/link'
import { Linkedin, Mail, Zap } from 'lucide-react'

const FOOTER_DEFAULTS = {
  brandName: 'Reekko',
  brandDescription:
    'On construit le moteur commercial qui remplace votre prospection manuelle et génère des rendez-vous qualifiés en continu.',
  linkedinUrl: 'https://linkedin.com/company/reekko',
  emailUrl: 'mailto:contact.reekko@gmail.com',
  navigationLinks: [
    { href: '/methode', label: 'Méthode' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/a-propos', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
    { href: '/agence-growth-marketing-rennes', label: 'Agence à Rennes' },
  ],
  ressourcesLinks: [
    { href: '/blog/growth-marketing', label: 'Qu\'est-ce que le growth marketing ?' },
    { href: '/blog/cold-emailing-b2b', label: 'Guide cold emailing B2B' },
    { href: '/blog/prospection-linkedin-b2b', label: 'Prospection LinkedIn B2B' },
    { href: '/blog/strategies-acquisition-b2b', label: 'Stratégies d\'acquisition B2B' },
  ],
  copyrightText: 'Reekko. Tous droits réservés.',
  legalLinksHref: '/mentions-legales',
  legalLinksLabel: 'Mentions légales',
  privacyLinksHref: '/politique-de-confidentialite',
  privacyLinksLabel: 'Confidentialité',
}

// [Remolder] Contenu éditable du pied de page — même principe que l'en-tête :
// `remolder` (version publiée) fusionnée sur les valeurs d'origine.
export default function Footer({ remolder }: { remolder?: Partial<typeof FOOTER_DEFAULTS> }) {
  const c = { ...FOOTER_DEFAULTS, ...remolder }
  const currentYear = new Date().getFullYear()
  const footerLinks = { navigation: c.navigationLinks, ressources: c.ressourcesLinks }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
                <Zap className="w-4.5 h-4.5 text-white fill-white" />
              </div>
              <span className="font-bold text-white text-xl tracking-tight">{c.brandName}</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              {c.brandDescription}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={c.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={c.emailUrl}
                className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-zinc-800/60 transition-all"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors leading-snug block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            © {currentYear} {c.copyrightText}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={c.legalLinksHref}
              className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors"
            >
              {c.legalLinksLabel}
            </Link>
            <Link
              href={c.privacyLinksHref}
              className="text-zinc-400 hover:text-zinc-200 text-sm transition-colors"
            >
              {c.privacyLinksLabel}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
