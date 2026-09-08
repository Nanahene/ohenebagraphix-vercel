import { createFileRoute, Link } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'
import { siteConfig } from '@/lib/site-config'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy Policy — Ohenebagraphix' },
      {
        name: 'description',
        content: 'How Ohenebagraphix collects and uses information from visitors and clients.',
      },
    ],
  }),
  component: Privacy,
})

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Privacy Policy
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Your privacy
        </h1>
        <p className="mt-4 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Last updated: 2026
        </p>
      </Reveal>

      <div className="mt-10 space-y-8">
        <section>
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
            What this covers
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            This page explains what happens to your information when you visit ohenebagraphix.com or get in touch
            through the contact form, WhatsApp, or email.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
            Information from the contact form
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            When you submit the "Start a Project" form, the details you enter (name, email or phone, project
            description, and anything else you type) are sent directly to Prince's email inbox. This information is
            used only to respond to your enquiry and is not sold, shared, or used for advertising.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
            Analytics
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            This site uses privacy-friendly analytics to understand overall traffic, such as which pages are
            visited and which country visitors come from. This does not use cookies and does not track you
            individually across other websites.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
            Payment information
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            Payments made by Mobile Money or bank transfer are handled directly between you and the relevant mobile
            money or banking provider. This site does not process, store, or have access to your card or account
            details.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
            Contact
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            If you have any questions about this policy, reach out at{' '}
            <a href={`mailto:${siteConfig.email}`} className="underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>

      <Reveal className="mt-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
        >
          Back to Home
        </Link>
      </Reveal>
    </div>
  )
        }
