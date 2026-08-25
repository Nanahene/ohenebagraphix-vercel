import { createFileRoute, Link } from '@tanstack/react-router'
import { allPortfolios, allServices } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { imgUrl } from '@/lib/image'

export const Route = createFileRoute('/services')({
  head: () => ({
    meta: [
      { title: 'Services — Ohenebagraphix' },
      {
        name: 'description',
        content:
          'Flyer design, brand identity, business cards, letterheads, certificates and more from Ohenebagraphix, a graphic design studio in Accra, Ghana.',
      },
    ],
  }),
  component: Services,
})

function Services() {
  const services = [...allServices].filter((s) => s.published).sort((a, b) => a.order - b.order)
  const portfolio = [...allPortfolios].filter((p) => p.published)

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Services
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Every design, built from scratch to fit your brand
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          From a single flyer to a full brand identity system, every service comes with a 72-hour standard
          turnaround and reasonable revisions included.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, i) => {
          const example = service.category
            ? portfolio.find((p) => p.category === service.category)
            : undefined

          return (
            <Reveal key={service._meta.path} delay={(i % 2) * 90}>
              <div
                className="flex h-full flex-col overflow-hidden rounded-2xl border"
                style={{ borderColor: 'var(--line)' }}
              >
                {example && (
                  <div className="aspect-[16/9] w-full overflow-hidden" style={{ backgroundColor: 'var(--paper-warm)' }}>
                    <img
                      src={imgUrl(example.cover, { w: 640, h: 360, fit: 'cover' })}
                      alt={`Example of ${service.title.toLowerCase()}: ${example.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      width={640}
                      height={360}
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
                      {service.title}
                    </h2>
                    <span className="whitespace-nowrap font-display text-lg font-semibold" style={{ color: 'var(--clay)' }}>
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                    {service.summary}
                  </p>
                  {service.priceNote && (
                    <p className="mt-2 text-xs italic" style={{ color: 'var(--ink-soft)' }}>
                      {service.priceNote}
                    </p>
                  )}
                  {example && (
                    <Link
                      to="/portfolio/$slug"
                      params={{ slug: example._meta.path }}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: 'var(--clay-dark)' }}
                    >
                      See an example
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal
        className="mt-16 flex flex-col items-start gap-5 rounded-3xl px-8 py-10 sm:flex-row sm:items-center sm:justify-between"
        style={{ backgroundColor: 'var(--ink)' }}
      >
        <div>
          <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--paper)' }}>
            Not sure what you need?
          </h2>
          <p className="mt-1 text-sm" style={{ color: '#cbbfae' }}>
            Send a message describing your project, I'll help scope it and suggest the right service.
          </p>
        </div>
        <Link
          to="/contact"
          className="rounded-full px-6 py-3 text-sm font-semibold"
          style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
        >
          Start a Project
        </Link>
      </Reveal>
    </div>
  )
}
