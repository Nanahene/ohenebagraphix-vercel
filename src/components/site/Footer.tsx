import { Link } from '@tanstack/react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { SocialLinks } from '@/components/site/SocialLinks'

const quickLinks = [
  { to: '/portfolio', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--ink)', color: 'var(--paper)' }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">Ohenebagraphix</p>
          <p className="mt-1 text-sm font-medium tracking-wide" style={{ color: 'var(--gold-soft)' }}>
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: '#cbbfae' }}>
            A one-person design studio based in Accra, working with brands and creators around the world.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-soft)' }}>
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm hover:underline" style={{ color: '#e8ded0' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-soft)' }}>
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm" style={{ color: '#e8ded0' }}>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`tel:${siteConfig.whatsappNumber}`} className="hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:underline break-all">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{siteConfig.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: '#3a2f24' }}>
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs sm:px-8" style={{ color: '#9c8d78' }}>
          © 2025-2026 Ohenebagraphix — Prince Adjei-Addo. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
