# Ohenebagraphix

A portfolio and service website for **Ohenebagraphix**, a one-person graphic design studio in Dansoman, Accra, Ghana, run by founder Prince Adjei-Addo. The site presents a filterable portfolio library, service pricing, testimonials, an FAQ, and a project-enquiry contact flow with a WhatsApp fallback.

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, TanStack Router, Vite 7, Nitro)
- Tailwind CSS v4
- [Content Collections](https://www.content-collections.dev/) — markdown-driven content for portfolio, services, testimonials, and FAQs
- Vercel (hosting)

## Local Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Editing Content

All portfolio projects, services, testimonials, and FAQs live as markdown files with frontmatter under `content/`. No code changes are required to add, edit, or remove an entry:

- `content/portfolio/*.md` — one file per project (title, client, category, description, cover image, gallery, tools, year)
- `content/services/*.md` — one file per service (title, price, summary)
- `content/testimonials/*.md` — one file per client quote
- `content/faqs/*.md` — one file per question/answer pair

Valid categories are defined in `content-collections.ts`. Images referenced in frontmatter should be placed in `public/images/` — ideally as compressed `.webp` files, since they're served as-is with no build-time or runtime resizing step.

## Contact Form

The "Start a Project" form has no backend attached. On submit, `src/routes/contact.tsx` builds a `mailto:` link from the filled-in fields and hands it to the visitor's email client, so no third-party form service or API key is required. WhatsApp is offered as a faster alternative throughout the site.

## Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects TanStack Start (via the Nitro Vite plugin) — no build command or output directory overrides are needed.
4. Deploy. Every push to your main branch triggers a new deployment.

After your first deploy, update `url` in `src/lib/site-config.ts` and the URLs in `public/sitemap.xml` to match your real Vercel domain (or custom domain), then redeploy.

## Domain

The site deploys to a free `*.vercel.app` subdomain by default. A custom domain can be attached at any time from the Vercel project's Domains settings, with no code changes required beyond the `url` update mentioned above.
