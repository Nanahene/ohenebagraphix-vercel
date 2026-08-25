import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { allPortfolios } from 'content-collections'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { PortfolioCard } from '@/components/site/PortfolioCard'
import { imgUrl } from '@/lib/image'
import { whatsappLink } from '@/lib/site-config'

export const Route = createFileRoute('/portfolio/$slug')({
  loader: ({ params }) => {
    const published = [...allPortfolios].filter((p) => p.published).sort((a, b) => a.order - b.order)
    const index = published.findIndex((p) => p._meta.path === params.slug)
    if (index === -1) throw notFound()

    const project = published[index]
    const previous = published[(index - 1 + published.length) % published.length]
    const next = published[(index + 1) % published.length]
    const related = published
      .filter((p) => p._meta.path !== project._meta.path && p.category === project.category)
      .slice(0, 3)

    return { project, previous, next, related }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — ${loaderData.project.category} | Ohenebagraphix` },
          { name: 'description', content: loaderData.project.description },
          { property: 'og:title', content: loaderData.project.title },
          { property: 'og:description', content: loaderData.project.description },
          { property: 'og:image', content: loaderData.project.cover },
        ]
      : [],
  }),
  component: ProjectDetail,
})

function ProjectDetail() {
  const { project, previous, next, related } = Route.useLoaderData()
  const [lightbox, setLightbox] = useState<string | null>(null)
  const gallery = project.gallery.length > 0 ? project.gallery : [project.cover]

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link to="/portfolio" className="hover:underline">
          Portfolio
        </Link>
        <span aria-hidden="true">/</span>
        <span style={{ color: 'var(--ink)' }} aria-current="page">
          {project.title}
        </span>
      </nav>

      <Link
        to="/portfolio"
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
        style={{ color: 'var(--clay-dark)' }}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>

      <Reveal className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <button
          type="button"
          onClick={() => setLightbox(project.cover)}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
          aria-label={`View larger version of ${project.title}`}
        >
          <img
            src={imgUrl(project.cover, { w: 1200, q: 85 })}
            alt={`${project.title} — ${project.category} design for ${project.client}`}
            className="w-full object-cover"
            width={1200}
            height={1500}
          />
        </button>

        <div>
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ backgroundColor: 'var(--paper-warm)', color: 'var(--clay-dark)' }}
          >
            {project.category}
          </span>
          <h1 className="font-display mt-4 text-3xl font-semibold sm:text-4xl" style={{ color: 'var(--ink)' }}>
            {project.title}
          </h1>
          <p className="mt-2 text-sm font-medium" style={{ color: 'var(--ink-soft)' }}>
            Client: {project.client}
            {project.year ? ` · ${project.year}` : ''}
          </p>
          <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
            {project.description}
          </p>

          {project.tools.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
                Tools
              </p>
              <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
                {project.tools.join(', ')}
              </p>
            </div>
          )}

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
          >
            Start a similar project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>

      {gallery.length > 1 && (
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
            Additional views
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gallery.map((src) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightbox(src)}
                className="overflow-hidden rounded-xl border focus-visible:outline focus-visible:outline-2"
                style={{ borderColor: 'var(--line)' }}
              >
                <img
                  src={imgUrl(src, { w: 480, h: 480, fit: 'cover' })}
                  alt={`${project.title} additional view`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  width={480}
                  height={480}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Large view of ${project.title}`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white focus-visible:outline focus-visible:outline-2"
            aria-label="Close large view"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={imgUrl(lightbox, { w: 1600, q: 90 })}
            alt={`${project.title} large view`}
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="mt-14 flex items-center justify-between gap-4 border-y py-5" style={{ borderColor: 'var(--line)' }}>
        <Link
          to="/portfolio/$slug"
          params={{ slug: previous._meta.path }}
          className="group flex items-center gap-2 text-sm font-semibold"
          style={{ color: 'var(--ink)' }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Previous:</span>
          <span className="truncate max-w-[140px] sm:max-w-[220px]">{previous.title}</span>
        </Link>
        <Link
          to="/portfolio/$slug"
          params={{ slug: next._meta.path }}
          className="group flex items-center gap-2 text-right text-sm font-semibold"
          style={{ color: 'var(--ink)' }}
        >
          <span className="truncate max-w-[140px] sm:max-w-[220px]">{next.title}</span>
          <span className="hidden sm:inline">:Next</span>
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
            More from this category
          </h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
            Related designs in {project.category}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <PortfolioCard key={item._meta.path} project={item} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 rounded-2xl border p-8 text-center" style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper-warm)' }}>
        <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
          Want something like this?
        </h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Send the brief on WhatsApp or fill out the project form, quotes usually go out within a day.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full px-6 py-3 text-sm font-semibold"
            style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
          >
            Start a Project
          </Link>
          <a
            href={whatsappLink(`Hi Prince, I'd like something similar to your "${project.title}" design.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-6 py-3 text-sm font-semibold"
            style={{ borderColor: 'var(--ink)', color: 'var(--ink)' }}
          >
            WhatsApp Me
          </a>
        </div>
      </div>
    </div>
  )
}
