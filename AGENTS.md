# AGENTS.md

Overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

Ohenebagraphix is a portfolio/service website for a one-person graphic design studio (Dansoman, Accra, Ghana). It presents a categorized, filterable portfolio library, service pricing, testimonials, an FAQ, and a project-enquiry contact form with a WhatsApp fallback. Built with TanStack Start and deployed on Vercel.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| Forms | `mailto:` link built client-side, no backend |
| Images | Static `.webp` files served from `public/images/`, pre-compressed |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Vercel (Nitro Vite plugin) |

## Directory Structure

```
├── content
│   ├── portfolio/*.md     # One file per project: title, client, category, description, cover, gallery, tools, year, order
│   ├── services/*.md      # One file per service: title, price, summary, category
│   ├── testimonials/*.md  # One file per client quote
│   └── faqs/*.md          # One file per question/answer pair
├── public
│   ├── sitemap.xml
│   ├── robots.txt
│   └── images/
│       ├── brand/         # Founder photo
│       └── portfolio/     # Portfolio project images
├── src
│   ├── components
│   │   ├── site/          # Header, Footer, SocialLinks, WhatsAppFloat, PortfolioCard
│   │   ├── icons.tsx       # Inline SVGs for brand icons not in lucide-react (TikTok, Pinterest)
│   │   └── Reveal.tsx      # IntersectionObserver-based scroll-reveal wrapper, respects prefers-reduced-motion
│   ├── hooks
│   │   └── use-reveal.ts
│   ├── lib
│   │   ├── site-config.ts  # Single source of truth: contact info, social links, WhatsApp helper, about/stats copy
│   │   ├── image.ts        # Passthrough helper for static image URLs
│   │   └── utils.ts        # cn() helper
│   ├── routes
│   │   ├── __root.tsx           # Root layout: fonts, SEO/OG meta, JSON-LD, header/footer, 404
│   │   ├── index.tsx             # Home
│   │   ├── portfolio.index.tsx   # Portfolio grid with category filter (route: /portfolio)
│   │   ├── portfolio.$slug.tsx   # Project detail: gallery, lightbox, prev/next, related designs
│   │   ├── services.tsx
│   │   ├── pricing.tsx
│   │   ├── about.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   └── contact.tsx           # Project-enquiry form + direct contact/social info
│   ├── router.tsx
│   └── styles.css                # Tailwind import, color tokens, typography, reveal/motion classes
├── content-collections.ts  # Zod schemas + shared CATEGORIES list for portfolio/services/testimonials/faqs
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are flat files under `src/routes/` using dot notation. `portfolio.index.tsx` (path `/portfolio/`) and `portfolio.$slug.tsx` are siblings, not parent/child — this avoids the implicit-layout requirement TanStack Router applies when a bare `portfolio.tsx` coexists with `portfolio.$slug.tsx`.

### Content Collections as CMS

Portfolio, services, testimonials, and FAQ content is authored as markdown with frontmatter under `content/`, validated by Zod schemas in `content-collections.ts`. This gives non-technical editing (add/edit a `.md` file, no code changes) while keeping type safety and supporting a large, growing portfolio library. Categories used for filtering are the shared `CATEGORIES` array exported from `content-collections.ts`.

### Contact Form (project-enquiry)

`src/routes/contact.tsx` has no backend attached. On submit it builds a `mailto:` link containing the filled-in fields and navigates the browser to it, which opens the visitor's own email client with the enquiry pre-filled. This avoids depending on any third-party form service or API key.

### Design System

Typography pairs Fraunces (display serif, headings) with Work Sans (body) — a deliberate move away from generic sans-only AI aesthetics. Colors are a warm editorial palette (paper cream, off-black ink, clay/terracotta, gold) defined as CSS variables in `styles.css`. Motion is intentionally restrained: `Reveal` fades/translates elements a small amount on scroll via `IntersectionObserver`, and is fully disabled under `prefers-reduced-motion`.

### Images

Portfolio and brand images live in `public/images/` as pre-compressed `.webp` files (resized and re-encoded once before committing) and are served as static assets from Vercel's CDN. `imgUrl()` in `src/lib/image.ts` is kept as a passthrough so call sites don't need to change, but it no longer proxies through a resize service.

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | TanStack Start, Nitro, Tailwind, Content Collections plugins |
| `tsconfig.json` | Strict TypeScript, `@/*` alias for `src/*`, `noUnusedLocals`/`noUnusedParameters` enabled |
| `content-collections.ts` | Zod schemas + `CATEGORIES` for portfolio/services/testimonials/faqs |
| `src/lib/site-config.ts` | Contact info, social links, WhatsApp helper — the place to update phone/email/socials |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Conventions

- Components: PascalCase. Utilities/hooks: camelCase. Routes: TanStack Router flat dot-notation.
- Tailwind utility classes; `cn()` for conditional class merging; CSS variables in `styles.css` for theme tokens.
- Strict TypeScript, `@/` import alias, Zod for content schemas, type-only imports where applicable.
- When adding a new portfolio category, add it to `CATEGORIES` in `content-collections.ts` first.

## Domain

The site is configured to deploy on a free `*.vercel.app` subdomain, changeable at any time from the Vercel dashboard. After attaching a domain, update `url` in `src/lib/site-config.ts` and the URLs in `public/sitemap.xml` to match.
