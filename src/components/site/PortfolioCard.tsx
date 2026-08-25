import { Link } from '@tanstack/react-router'
import { imgUrl } from '@/lib/image'

type Project = {
  _meta: { path: string }
  title: string
  client: string
  category: string
  cover: string
}

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project._meta.path }}
      className="group block overflow-hidden rounded-2xl border transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper)' }}
      aria-label={`View ${project.title} for ${project.client}, category ${project.category}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: 'var(--paper-warm)' }}>
        <img
          src={imgUrl(project.cover, { w: 640, h: 800, fit: 'cover' })}
          alt={`${project.title} — ${project.category} design for ${project.client}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          width={640}
          height={800}
        />
        <span
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow"
          style={{ backgroundColor: 'var(--paper)', color: 'var(--clay-dark)' }}
        >
          {project.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-base font-semibold" style={{ color: 'var(--ink)' }}>
          {project.title}
        </h3>
        <p className="mt-0.5 text-sm" style={{ color: 'var(--ink-soft)' }}>
          {project.client}
        </p>
      </div>
    </Link>
  )
}
