import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { WhatsAppFloat } from '@/components/site/WhatsAppFloat'
import { siteConfig } from '@/lib/site-config'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: `${siteConfig.name} — Graphic Designer in Accra, Ghana` },
      {
        name: 'description',
        content: siteConfig.description,
      },
      { name: 'theme-color', content: '#241b14' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'og:title', content: `${siteConfig.name} — Design that moves people` },
      { property: 'og:description', content: siteConfig.description },
      { property: 'og:image', content: '/images/brand/prince-adjei-addo.webp' },
      { property: 'og:url', content: siteConfig.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${siteConfig.name} — Design that moves people` },
      { name: 'twitter:description', content: siteConfig.description },
      { name: 'twitter:image', content: '/images/brand/prince-adjei-addo.webp' },
    ],
    links: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Work+Sans:wght@400;500;600;700&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Ohenebagraphix',
          founder: {
            '@type': 'Person',
            name: 'Prince Adjei-Addo',
          },
          description: siteConfig.description,
          url: siteConfig.url,
          image: `${siteConfig.url}/images/brand/prince-adjei-addo.webp`,
          email: siteConfig.email,
          telephone: siteConfig.phoneDisplay,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dansoman, Accra',
            addressCountry: 'GH',
          },
          areaServed: 'Worldwide',
          sameAs: [
            siteConfig.social.instagram,
            siteConfig.social.tiktok,
            siteConfig.social.facebook,
            siteConfig.social.pinterest,
          ],
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--paper)]"
        >
          Skip to content
        </a>
        <div className="grain-overlay" />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppFloat />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-display text-8xl font-semibold" style={{ color: 'var(--clay)' }}>
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold" style={{ color: 'var(--ink)' }}>
        This page wandered off the canvas.
      </h1>
      <p className="mt-3 text-base" style={{ color: 'var(--ink-soft)' }}>
        The page you're looking for doesn't exist or may have moved. Let's get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-full px-6 py-3 text-sm font-semibold"
          style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
        >
          Back to Home
        </Link>
        <Link
          to="/portfolio"
          className="rounded-full border px-6 py-3 text-sm font-semibold"
          style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
        >
          See the Work
        </Link>
      </div>
    </div>
  )
}
