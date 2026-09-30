import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { siteConfig, whatsappLink } from '@/lib/site-config'

export const Route = createFileRoute('/portfolio/gradference-26')({
  head: () => ({
    meta: [
      { title: "GRADFERENCE'26 - TC Shine Awards | Ohenebagraphix" },
      {
        name: 'description',
        content:
          "GRADFERENCE'26 - TC Shine Awards: event branding and campaign design commissioned by THEC. From digital promo material to a live red-carpet dinner and awards night.",
      },
      { property: 'og:title', content: "GRADFERENCE'26 - TC Shine Awards | Ohenebagraphix" },
      {
        property: 'og:description',
        content:
          'A full event branding and campaign system carried from digital promo material through to a live red-carpet dinner and awards night.',
      },
      { property: 'og:image', content: `${siteConfig.url}/images/portfolio/gradference-26-cover.webp` },
    ],
  }),
  component: Gradference26,
})

const galleryImages = [
  'gradference-26-co-host.webp',
  'gradference-26-award-presentation-2.webp',
  'gradference-26-winner-kelvin.webp',
  'gradference-26-performance-2.webp',
  'gradference-26-red-carpet-group-2.webp',
]

function Gradference26() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      {/* BREADCRUMB */}
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
          GRADFERENCE'26
        </span>
      </nav>

      <Link to="/portfolio" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'var(--clay-dark)' }}>
        <ArrowLeft className="h-4 w-4" />
        Back to Portfolio
      </Link>

      {/* HEADER */}
      <Reveal className="mt-8 text-center">
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
          style={{ backgroundColor: 'var(--paper-warm)', color: 'var(--clay-dark)' }}
        >
          Event Branding & Campaign Design
        </span>
        <h1 className="font-display mt-4 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          GRADFERENCE'26 - TC Shine Awards
        </h1>
        <p className="mt-3 text-base" style={{ color: 'var(--ink-soft)' }}>
          Client: THEC (The Commissioned) · Graphic Designer · 14 August 2026
        </p>
        <p className="mt-1 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Ministry of Labour, Jobs and Employment Rooftop
        </p>
      </Reveal>

      {/* HERO IMAGE */}
      <Reveal delay={80} className="mx-auto mt-10 max-w-sm overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-cover.webp')}
          className="block w-full focus-visible:outline focus-visible:outline-2"
        >
          <img
            src="/images/portfolio/gradference-26-cover.webp"
            alt="GRADFERENCE'26 main event artwork"
            className="w-full h-auto object-cover"
          />
        </button>
      </Reveal>

      {/* OVERVIEW */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Overview
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          GRADFERENCE'26 was a youth-focused dinner and awards night built around networking, entertainment, a red
          carpet, and the TC Shine Awards. This year's theme, "Catalyzing Youth for the Fourth Industrial
          Revolution: Equipping Minds, Building Skills, Shaping the Future," set the tone for the whole campaign.
        </p>
      </Reveal>

      {/* THE BRIEF */}
      <Reveal delay={120} className="mx-auto mt-12 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          The Brief
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          THEC needed a visual identity that felt premium, youthful, and credible enough to unify several distinct
          event layers, networking, entertainment, and a full awards ceremony, under one consistent look.
        </p>
      </Reveal>

      {/* CREATIVE DIRECTION */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Creative Direction
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The identity was built on a red, black, and gold palette: red for energy and entertainment, black for
          depth and sophistication, and gold for prestige and celebration.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8">
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-theme.webp')}
          className="mx-auto block max-w-md overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-theme.webp"
            alt="GRADFERENCE'26 theme announcement design"
            className="w-full object-cover"
          />
        </button>
      </Reveal>

      {/* BUILDING THE CAMPAIGN */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Building the Campaign
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The rollout opened with a teaser to build early buzz, then expanded into the main event artwork, ticket
          graphics for Regular (GH₵150) and VIP (GH₵500) tiers, entertainer promo graphics, and red-carpet
          promotion, all tied together under one visual system.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-coming-soon.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-coming-soon.webp"
            alt="GRADFERENCE'26 coming soon teaser"
            className="w-full object-cover"
          />
        </button>
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-ticket.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img src="/images/portfolio/gradference-26-ticket.webp" alt="GRADFERENCE'26 ticket graphic" className="w-full object-cover" />
        </button>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-artiste-obed.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-artiste-obed.webp"
            alt="Dance artiste Only Obed promo graphic"
            className="w-full object-cover"
          />
        </button>
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-dj-thunder.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img src="/images/portfolio/gradference-26-dj-thunder.webp" alt="DJ Thunder promo graphic" className="w-full object-cover" />
        </button>
      </Reveal>

      {/* TC SHINE AWARDS */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          TC Shine Awards
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          A dedicated award track ran alongside the main event, nominee graphics, voting communication, and
          certificates, covering the full journey from nomination through to recognition.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-nominations-open.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-nominations-open.webp"
            alt="TC Shine Awards nominations opened graphic"
            className="w-full object-cover"
          />
        </button>
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-nominee-christiana.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-nominee-christiana.webp"
            alt="TC Shine Awards nominee graphic, Christiana Dede Dzoto"
            className="w-full object-cover"
          />
        </button>
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-certificate-fiifi.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-certificate-fiifi.webp"
            alt="Certificate of Nomination, Addo Isaac Fiifi"
            className="w-full object-cover"
          />
        </button>
      </Reveal>

      {/* FROM DIGITAL DESIGN TO REAL-WORLD EXPERIENCE */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          From Digital Design to Real-World Experience
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The identity moved off the screen and into the room on event day, carried through the red carpet, a
          branded photo backdrop, and the award presentations themselves.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-host.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img src="/images/portfolio/gradference-26-host.webp" alt="Event host speaking on mic" className="w-full object-cover" />
        </button>
        <button
          type="button"
          onClick={() => setLightbox('/images/portfolio/gradference-26-hosts-red-carpet.webp')}
          className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
          style={{ borderColor: 'var(--line)' }}
        >
          <img
            src="/images/portfolio/gradference-26-hosts-red-carpet.webp"
            alt="Hosts on the branded red carpet backdrop"
            className="w-full object-cover"
          />
        </button>
      </Reveal>

      {/* THE OUTCOME */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          The Outcome
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          Event documentation captured red-carpet arrivals, award presentations, performances, and group photos,
          tying the whole campaign together on the night.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { src: 'gradference-26-award-presentation-1.webp', alt: 'Award presentation moment' },
          { src: 'gradference-26-winner-fiifi.webp', alt: 'Best Athlete of the Year winner, Addo Isaac Fiifi' },
          { src: 'gradference-26-performance-1.webp', alt: 'Live performance on event day' },
          { src: 'gradference-26-red-carpet-group-1.webp', alt: 'Guests on the red carpet' },
        ].map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setLightbox('/images/portfolio/' + item.src)}
            className="overflow-hidden rounded-2xl border focus-visible:outline focus-visible:outline-2"
            style={{ borderColor: 'var(--line)' }}
          >
            <img src={'/images/portfolio/' + item.src} alt={item.alt} className="w-full object-cover" />
          </button>
        ))}
      </Reveal>

      {/* DELIVERABLES */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Deliverables
        </h2>
        <ul className="mt-4 grid gap-2 text-base leading-relaxed sm:grid-cols-2" style={{ color: 'var(--ink-soft)' }}>
          <li>Event branding &amp; main artwork</li>
          <li>Theme announcement design</li>
          <li>Ticket graphics</li>
          <li>Red-carpet promotional design</li>
          <li>Artiste &amp; entertainment graphics</li>
          <li>TC Shine Awards nominee graphics</li>
          <li>Voting materials</li>
          <li>Social media campaign graphics</li>
        </ul>
      </Reveal>

      {/* FULL GALLERY */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Full Gallery
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((filename) => (
            <button
              key={filename}
              type="button"
              onClick={() => setLightbox('/images/portfolio/' + filename)}
              className="relative aspect-square overflow-hidden rounded-xl border focus-visible:outline focus-visible:outline-2"
              style={{ borderColor: 'var(--line)' }}
            >
              <img
                src={'/images/portfolio/' + filename}
                alt="GRADFERENCE'26 project photo"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Large view of GRADFERENCE'26 photo"
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
            src={lightbox}
            alt="GRADFERENCE'26 large view"
            className="max-h-full max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CALL TO ACTION */}
      <div
        className="mt-16 rounded-2xl border p-8 text-center"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper-warm)' }}
      >
        <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
          A Project by Ohenebagraphix
        </h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Planning an event and need a full campaign identity? Let's build one together.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink("Hi Prince, I saw the GRADFERENCE'26 case study and I'd like something similar.")}
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
