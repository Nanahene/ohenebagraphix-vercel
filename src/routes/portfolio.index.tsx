import { createFileRoute, Link } from '@tanstack/react-router'
import { allPortfolios } from 'content-collections'
import { useMemo, useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { PortfolioCard } from '@/components/site/PortfolioCard'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/portfolio/')({
  head: () => ({
    meta: [
      { title: 'Portfolio — Ohenebagraphix' },
      {
        name: 'description',
        content:
          'Browse flyers, brand identity, letterheads, business cards and more designed by Ohenebagraphix, filterable by category.',
      },
    ],
  }),
  component: Portfolio,
})

const featuredCaseStudies = [
  {
    slug: 'valentines-diary',
    badge: 'Independent Project',
    title: "Valentine's Diary",
    description:
      "A personalized printed diary designed as a Valentine's Day gift, made to be kept and used long after the occasion.",
    cover: '/images/portfolio/valentines-diary-01-cover.webp',
    alt: "Valentine's Diary independent project",
  },
  {
    slug: 'gradference-26',
    badge: 'Event Branding & Campaign Design',
    title: "GRADFERENCE'26 - TC Shine Awards",
    description:
      'A full event branding and campaign system for THEC, carried from digital promo material through to a live red-carpet dinner and awards night.',
    cover: '/images/portfolio/gradference-26-cover.webp',
    alt: "GRADFERENCE'26 - TC Shine Awards event branding case study",
  },
]

function Portfolio() {
  const projects = useMemo(
    () => [...allPortfolios].filter((p) => p.published).sort((a, b) => a.order - b.order),
    [],
  )
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return ['All', ...Array.from(set)]
  }, [projects])

  const [active, setActive] = useState('All')

  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Portfolio
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          A library of work, not a static gallery
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          Filter by category to explore flyers, brand identity, print collateral and more. Every design opens into
          its own project page with related designs.
        </p>
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter portfolio by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
            )}
            style={
              active === category
                ? { backgroundColor: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)' }
                : { borderColor: 'var(--line)', color: 'var(--ink-soft)' }
            }
          >
            {category}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <PortfolioCard key={project._meta.path} project={project} />
          ))}
        </div>
      ) : (
        <div
          className="mt-10 rounded-2xl border border-dashed p-12 text-center"
          style={{ borderColor: 'var(--line)' }}
        >
          <p className="font-display text-lg font-semibold" style={{ color: 'var(--ink)' }}>
            No projects in this category yet
          </p>
          <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
            New work is added regularly, check back soon or explore another category.
          </p>
        </div>
      )}

      <div className="mt-20 border-t pt-14" style={{ borderColor: 'var(--line)' }}>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Case Studies
        </p>
        <h2 className="font-display mt-3 text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--ink)' }}>
          In-depth looks at select projects
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          A closer look at a few projects, personal and commissioned, told from brief to outcome.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredCaseStudies.map((project) => (
            <Link
              key={project.slug}
              to={`/portfolio/${project.slug}`}
              className="group grid gap-0 overflow-hidden rounded-2xl border transition-shadow duration-300 hover:shadow-xl sm:grid-cols-2"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="aspect-[4/3] overflow-hidden sm:aspect-auto" style={{ backgroundColor: 'var(--paper-warm)' }}>
                <img
                  src={project.cover}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span
                  className="inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ backgroundColor: 'var(--paper-warm)', color: 'var(--clay-dark)' }}
                >
                  {project.badge}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold" style={{ color: 'var(--ink)' }}>
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                  {project.description}
                </p>
                <span className="mt-4 text-sm font-semibold" style={{ color: 'var(--clay-dark)' }}>
                  View case study &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
      }
