import { createFileRoute, Link } from '@tanstack/react-router'
import { allFaqs } from 'content-collections'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { whatsappLink } from '@/lib/site-config'

export const Route = createFileRoute('/faq')({
  head: () => ({
    meta: [
      { title: 'FAQ — Ohenebagraphix' },
      {
        name: 'description',
        content: 'Answers to common questions about working with Ohenebagraphix: turnaround time, revisions, file formats and international clients.',
      },
    ],
  }),
  component: Faq,
})

function Faq() {
  const faqs = [...allFaqs].filter((f) => f.published).sort((a, b) => a.order - b.order)

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          FAQ
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Frequently asked questions
        </h1>
      </Reveal>

      <div className="mt-10 divide-y" style={{ borderColor: 'var(--line)' }}>
        {faqs.map((faq, i) => (
          <Reveal key={faq._meta.path} delay={i * 40} as="div">
            <details className="group py-5" style={{ borderColor: 'var(--line)' }}>
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-semibold"
                style={{ color: 'var(--ink)' }}
              >
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 group-open:rotate-180" style={{ color: 'var(--clay)' }} />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {faq.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>

      <Reveal
        className="mt-14 rounded-2xl border p-8 text-center"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper-warm)' }}
      >
        <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
          Still have questions?
        </h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Reach out directly and I'll get back to you as soon as I can.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full px-6 py-3 text-sm font-semibold"
            style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
          >
            Contact Me
          </Link>
          <a
            href={whatsappLink('Hi Prince, I have a question about working with Ohenebagraphix.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-6 py-3 text-sm font-semibold"
            style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          >
            WhatsApp Me
          </a>
        </div>
      </Reveal>
    </div>
  )
}
