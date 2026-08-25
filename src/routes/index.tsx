import { createFileRoute, Link } from '@tanstack/react-router'
import { allPortfolios } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PortfolioCard } from '@/components/site/PortfolioCard'
import { siteConfig, whatsappLink } from '@/lib/site-config'
import { imgUrl } from '@/lib/image'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: `${siteConfig.name} — Design that moves people, crafted not templated` },
      {
        name: 'description',
        content:
          'Ohenebagraphix is a graphic design studio in Accra, Ghana led by Prince Adjei-Addo, delivering flyers, brand identity and print design for clients across Ghana and worldwide.',
      },
    ],
  }),
  component: Home,
})

function Home() {
  const featured = [...allPortfolios]
    .filter((p) => p.published)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b" style={{ borderColor: 'var(--line)' }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: 'var(--line)', color: 'var(--clay-dark)' }}
            >
              Accra, Ghana · Working Worldwide
            </p>
            <h1
              className="font-display mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
              style={{ color: 'var(--ink)' }}
            >
              {siteConfig.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
              {siteConfig.heroIntro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:bg-[var(--paper-warm)]"
                style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
              >
                See the Work
              </Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t pt-8" style={{ borderColor: 'var(--line)' }}>
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold" style={{ color: 'var(--clay)' }}>
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs font-medium leading-snug" style={{ color: 'var(--ink-soft)' }}>
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] hidden sm:block"
              style={{ background: 'linear-gradient(135deg, var(--gold-soft), var(--clay))', opacity: 0.35 }}
              aria-hidden="true"
            />
            <img
              src={imgUrl('/images/brand/prince-adjei-addo.webp', { w: 720, q: 85 })}
              alt="Prince Adjei-Addo, founder and designer of Ohenebagraphix, in professional attire"
              className="w-full rounded-[1.75rem] object-cover shadow-2xl"
              width={720}
              height={900}
              fetchPriority="high"
            />
            <div
              className="absolute -bottom-5 left-5 right-5 rounded-2xl border bg-[var(--paper)] px-5 py-4 shadow-lg sm:left-8 sm:right-auto sm:min-w-[220px]"
              style={{ borderColor: 'var(--line)' }}
            >
              <p className="font-display text-base font-semibold" style={{ color: 'var(--ink)' }}>
                Prince Adjei-Addo
              </p>
              <p className="text-xs" style={{ color: 'var(--ink-soft)' }}>
                Founder &amp; Designer, Ohenebagraphix
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
            What you get
          </p>
          <h2 className="font-display mt-3 max-w-xl text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--ink)' }}>
            Every project is treated like it's the only one.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.whatIYouGet.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border p-6" style={{ borderColor: 'var(--line)' }}>
                <span
                  className="font-display text-2xl font-semibold"
                  style={{ color: 'var(--gold)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="border-y" style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper-warm)' }}>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
                Selected work
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--ink)' }}>
                Recent designs from the studio
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
              style={{ color: 'var(--clay-dark)' }}
            >
              View full portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project._meta.path} delay={(i % 3) * 90}>
                <PortfolioCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <Reveal
          className="flex flex-col items-start gap-6 rounded-3xl px-8 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-12"
          style={{ backgroundColor: 'var(--ink)' }}
        >
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--paper)' }}>
              Have a project in mind?
            </h2>
            <p className="mt-2 max-w-md text-sm" style={{ color: '#cbbfae' }}>
              Tell me what you need and I'll send a quote, usually within a day. Standard delivery is 72 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
            >
              Start a Project
            </Link>
            <a
              href={whatsappLink("Hi Prince, I'd like to start a project with Ohenebagraphix.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-6 py-3 text-sm font-semibold"
              style={{ borderColor: '#5a4c3c', color: 'var(--paper)' }}
            >
              WhatsApp Me
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
