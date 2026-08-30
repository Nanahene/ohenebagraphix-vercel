import { createFileRoute, Link } from '@tanstack/react-router'
import { Award, MapPin } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { imgUrl } from '@/lib/image'
import { siteConfig } from '@/lib/site-config'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — Ohenebagraphix' },
      {
        name: 'description',
        content:
          'Meet Prince Adjei-Addo, founder and designer of Ohenebagraphix, a one-person design studio based in Dansoman, Accra working with clients worldwide.',
      },
    ],
  }),
  component: About,
})

function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <img
            src={imgUrl('/images/brand/prince-adjei-addo.webp', { w: 640, q: 85 })}
            alt="Prince Adjei-Addo, founder and designer of Ohenebagraphix"
            className="w-full rounded-2xl object-cover shadow-lg"
            width={640}
            height={800}
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
              About
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
              {siteConfig.about.intro}
            </h1>
          </Reveal>

          <div className="mt-6 space-y-4">
            {siteConfig.about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 20)} delay={i * 80}>
                <p className="text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

                    <Reveal delay={160} className="mt-8 space-y-6 border-t pt-6" style={{ borderColor: 'var(--line)' }}>
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
              Awards &amp; Recognition
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {siteConfig.about.awards.map((award) => (
                <div
                  key={award.title}
                  className="overflow-hidden rounded-2xl border"
                  style={{ borderColor: 'var(--line)' }}
                >
                  {award.image ? (
                    <img src={award.image} alt={award.title} className="w-full h-auto" />
                  ) : (
                    <div
                      className="flex h-40 w-full items-center justify-center"
                      style={{ backgroundColor: 'var(--paper-warm)' }}
                    >
                      <Award className="h-8 w-8" style={{ color: 'var(--gold)' }} />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-semibold" style={{ color: 'var(--ink)' }}>
                      {award.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <img
                src="/images/brand/award-receiving-certificate.webp"
                alt="Prince Adjei-Addo receiving his TC Shine Awards certificate"
                className="w-full h-auto rounded-xl"
              />
              <img
                src="/images/brand/award-red-carpet-photo.webp"
                alt="Prince Adjei-Addo at the TC Shine Awards"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex items-start gap-3 border-t pt-4" style={{ borderColor: 'var(--line)' }}>
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--gold)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {siteConfig.about.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={220} className="mt-10 grid grid-cols-3 gap-4 border-t pt-8" style={{ borderColor: 'var(--line)' }}>
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold" style={{ color: 'var(--clay)' }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs" style={{ color: 'var(--ink-soft)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={280} className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
            >
              Work with Prince
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
