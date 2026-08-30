import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { whatsappLink } from '@/lib/site-config'

export const Route = createFileRoute('/portfolio/valentines-diary')({
  head: () => ({
    meta: [
      { title: "Valentine's Diary - Independent Project | Ohenebagraphix" },
      {
        name: 'description',
        content:
          "Valentine's Diary: an independent creative project by Ohenebagraphix. A personalized printed diary designed as a Valentine's Day gift, made to be kept and used long after the occasion.",
      },
    ],
  }),
  component: ValentinesDiary,
})

const galleryImages = [
  'valentines-diary-08-about-envelope.webp',
  'valentines-diary-19-fan-covers.webp',
  'valentines-diary-20-fan-envelopes.webp',
  'valentines-diary-21-scattered-pile.webp',
  'valentines-diary-22-packaging-lollipop.webp',
  'valentines-diary-23-envelopes-pile.webp',
  'valentines-diary-24-envelope-closeup.webp',
  'valentines-diary-25-packaging-handheld.webp',
  'valentines-diary-26-hand-two-envelopes.webp',
  'valentines-diary-27-hand-envelope-cover.webp',
]

function ValentinesDiary() {
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
          Valentine's Diary
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
          Independent Project
        </span>
        <h1 className="font-display mt-4 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Valentine's Diary
        </h1>
        <p className="mt-3 text-base" style={{ color: 'var(--ink-soft)' }}>
          Graphic Design / Creative Projects - 2026
        </p>
      </Reveal>

     {/* HERO IMAGE */}
      <Reveal delay={80} className="mx-auto mt-10 max-w-sm overflow-hidden rounded-2xl border p-4 flex justify-center items-center" style={{ borderColor: 'var(--line)' }}>
        <img
          src="/images/portfolio/valentines-diary-02-front-back.webp"
          alt="Valentine's Diary physical printed cover"
          className="w-full h-auto rotate-90 scale-125 object-contain"
        />
      </Reveal>

      {/* OVERVIEW */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Overview
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The Valentine's Diary is an independent creative project focused on personal expression and keeping
          meaningful memories. It was designed as a space where people could write, reflect, and create their own
          memories. Each diary was also personalized for its recipient.
        </p>
      </Reveal>

      {/* THE CONCEPT */}
      <Reveal delay={120} className="mx-auto mt-12 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          The Concept
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          I wanted to create a Valentine's gift that could be kept and used beyond the occasion. The idea was to
          give people a space for their thoughts, dreams, memories, and special moments.
        </p>
      </Reveal>

{/* CONCEPT IMAGES */}
      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img
            src="/images/portfolio/valentines-diary-03-open-book-a.webp"
            alt="Valentine's Diary Open Book Spread A"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img
            src="/images/portfolio/valentines-diary-04-open-book-b.webp"
            alt="Valentine's Diary Open Book Spread B"
            className="w-full object-cover"
          />
        </div>
      </Reveal>      
      
      {/* PERSONALIZATION */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Personalization
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          One of the main features of the diary is personalization. The inner pages were prepared with the
          recipient's name, making each diary feel more personal.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img
            src="/images/portfolio/valentines-diary-09-dedication-big-sis.webp"
            alt="Personalized dedication page - Big Sis"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img
            src="/images/portfolio/valentines-diary-10-dedication-abigail.webp"
            alt="Personalized dedication page - Abigail"
            className="w-full object-cover"
          />
        </div>
      </Reveal>

      {/* INSIDE THE DIARY */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Inside the Diary
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The diary gives its owner a personal space to write their own words, thoughts, and memories.
        </p>
        <blockquote
          className="mt-6 rounded-2xl border-l-4 px-6 py-5 text-lg italic leading-relaxed"
          style={{ borderColor: 'var(--clay)', backgroundColor: 'var(--paper-warm)', color: 'var(--ink)' }}
        >
          "The diary isn't meant to tell your story. It's meant to give you somewhere to write it."
        </blockquote>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-12-page-32.webp" alt="Page 32 mockup" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-13-page-22.webp" alt="Page 22 mockup" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-14-page-9.webp" alt="Page 9 mockup" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-15-page-4.webp" alt="Page 4 mockup" className="w-full object-cover" />
        </div>
      </Reveal>

      {/* DESIGN */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Design
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The project brought together the design of the cover, inner pages, and personalized details. I focused
          on creating a design that felt suitable for Valentine's Day while still being personal to each recipient.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-16-page-5.webp" alt="Page 5 design" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-06-about-page.webp" alt="About page back cover" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-04-open-book-b.webp" alt="Open book spread B" className="w-full object-cover" />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img src="/images/portfolio/valentines-diary-11-dedication-prince.webp" alt="Prince Adjei Addo dedication page" className="w-full object-cover" />
        </div>
      </Reveal>

      <Reveal delay={100} className="mt-4 overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
        <img src="/images/portfolio/valentines-diary-05-open-book-c.webp" alt="Open book spread C" className="w-full object-cover" />
      </Reveal>

      {/* PROJECT OUTCOME */}
      <Reveal delay={100} className="mx-auto mt-14 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Project Outcome
        </h2>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          The Valentine's Diary brought together design, personalization, and purpose in one physical product. I
          reached out for support, printed 20 copies, and shared them freely with people who showed interest, as
          well as with family and friends.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img
            src="/images/portfolio/valentines-diary-17-lifestyle-a.webp"
            alt="Physical diary held outdoors"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-2xl border" style={{ borderColor: 'var(--line)' }}>
          <img
            src="/images/portfolio/valentines-diary-18-lifestyle-b.webp"
            alt="Holding Valentine's Diary"
            className="w-full object-cover"
          />
        </div>
      </Reveal>

      {/* FULL GALLERY */}
      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
          Full Gallery
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((filename) => (
            <div key={filename} className="overflow-hidden rounded-xl border" style={{ borderColor: 'var(--line)' }}>
              <img
                src={'/images/portfolio/' + filename}
                alt="Valentine's Diary project photo"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div
        className="mt-16 rounded-2xl border p-8 text-center"
        style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper-warm)' }}
      >
        <h2 className="font-display text-xl font-semibold" style={{ color: 'var(--ink)' }}>
          A Project by Ohenebagraphix
        </h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>
          Have a project in mind? Let's create something meaningful.
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
            href={whatsappLink("Hi Prince, I saw the Valentine's Diary project and I'd like something similar.")}
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
