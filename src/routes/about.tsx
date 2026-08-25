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

          <Reveal delay={160} className="mt-8 space-y-4 border-t pt-6" style={{ borderColor: 'var(--line)' }}>
            <div className="flex items-start gap-3">
              <Award className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--gold)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {siteConfig.about.highlights[0]}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0" style={{ color: 'var(--gold)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                {siteConfig.about.highlights[1]}
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
