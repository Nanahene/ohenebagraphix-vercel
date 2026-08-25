import { createFileRoute, Link } from '@tanstack/react-router'
import { allServices } from 'content-collections'
import { Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { siteConfig } from '@/lib/site-config'

export const Route = createFileRoute('/pricing')({
  head: () => ({
    meta: [
      { title: 'Pricing — Ohenebagraphix' },
      {
        name: 'description',
        content:
          'Transparent pricing for flyer design, invitations, brochures, business cards, letterheads and full brand identity systems from Ohenebagraphix.',
      },
    ],
  }),
  component: Pricing,
})

function Pricing() {
  const services = [...allServices].filter((s) => s.published).sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Pricing
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Clear pricing, no surprises
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          Standard pricing below, final quotes may vary slightly depending on project complexity. Prices shown in
          Ghana cedis, equivalent terms apply for international clients.
        </p>
      </Reveal>

      <Reveal className="mt-10 overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">Ohenebagraphix standard service pricing</caption>
          <thead>
            <tr style={{ backgroundColor: 'var(--paper-warm)' }}>
              <th scope="col" className="px-5 py-3 text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                Service
              </th>
              <th scope="col" className="px-5 py-3 text-right text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._meta.path} className="border-t" style={{ borderColor: 'var(--line)' }}>
                <th scope="row" className="px-5 py-4 text-sm font-medium" style={{ color: 'var(--ink)' }}>
                  {service.title}
                  {service.priceNote && (
                    <span className="mt-0.5 block text-xs font-normal italic" style={{ color: 'var(--ink-soft)' }}>
                      {service.priceNote}
                    </span>
                  )}
                </th>
                <td className="px-5 py-4 text-right font-display text-base font-semibold" style={{ color: 'var(--clay)' }}>
                  {service.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Reveal className="rounded-2xl border p-6" style={{ borderColor: 'var(--line)' }}>
          <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--ink)' }}>
            Premium add-ons
          </h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.addOns.map((addon) => (
              <li key={addon.title} className="flex items-center justify-between text-sm" style={{ color: 'var(--ink-soft)' }}>
                <span>{addon.title}</span>
                <span className="font-semibold" style={{ color: 'var(--clay)' }}>
                  {addon.price}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={90} className="rounded-2xl border p-6" style={{ borderColor: 'var(--line)' }}>
          <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--ink)' }}>
            Terms
          </h2>
          <ul className="mt-4 space-y-2.5">
            {siteConfig.pricingTerms.map((term) => (
              <li key={term} className="flex items-start gap-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
                <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--clay)' }} />
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className="mt-14 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
        >
          Request a Quote
        </Link>
      </Reveal>
    </div>
  )
}
