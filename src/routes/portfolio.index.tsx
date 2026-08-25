import { createFileRoute } from '@tanstack/react-router'
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
    </div>
  )
}
