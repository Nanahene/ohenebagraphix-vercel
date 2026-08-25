import { createFileRoute, Link } from '@tanstack/react-router'
import { allTestimonials } from 'content-collections'
import { Quote } from 'lucide-react'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/testimonials')({
  head: () => ({
    meta: [
      { title: 'Testimonials — Ohenebagraphix' },
      {
        name: 'description',
        content: 'What clients say about working with Ohenebagraphix, from musicians to travel agencies to families.',
      },
    ],
  }),
  component: Testimonials,
})

function Testimonials() {
  const testimonials = [...allTestimonials].filter((t) => t.published).sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Testimonials
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Trusted by artists, brands and families
        </h1>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t._meta.path} delay={(i % 2) * 90}>
            <figure className="h-full rounded-2xl border p-7" style={{ borderColor: 'var(--line)' }}>
              <Quote className="h-7 w-7" style={{ color: 'var(--gold)' }} aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--ink)' }}>
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold" style={{ color: 'var(--ink)' }}>
                  {t.name}
                </span>
                <span style={{ color: 'var(--ink-soft)' }}> — {t.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 text-center">
        <p className="text-base" style={{ color: 'var(--ink-soft)' }}>
          Ready to become the next success story?
        </p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
          style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
        >
          Start a Project
        </Link>
      </Reveal>
    </div>
  )
}
