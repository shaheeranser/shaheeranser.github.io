# shaheeranser.me

Personal portfolio for **Muhammad Shaheer**, a full-stack software engineer. Built with Next.js
(App Router), TypeScript, and hand-written CSS, and exported as static files for GitHub Pages.

Live at **[shaheeranser.me](https://shaheeranser.me)** · [hello@shaheeranser.me](mailto:hello@shaheeranser.me)

## What is on the site

- **Hero** — an editorial introduction with a profile terminal, availability, and a highlights strip.
- **Selected work** — commercial products, case studies, and open-source contributions.
- **Experience** — roles, education, and certifications.
- **Stack** — tools grouped by where they show up in the work.
- **Contact** — email, phone, GitHub, LinkedIn, Medium, and the résumé.
- **Case studies** — `/projects/exam-proctor`, `/projects/watcher`, `/projects/hijri-api`, and an index at `/projects`.

## Stack

- Next.js 16 (App Router, React 19, Turbopack)
- TypeScript
- Tailwind CSS v4 (Preflight only; the visual system is in `src/app/globals.css`)
- `next/font` — Space Grotesk, Inter, JetBrains Mono, Instrument Serif

## Design

A quiet, editorial take on a developer console: one signal-green accent, big display type, a serif
accent for emphasis, mono labels for metadata, and a dark theme by default with a warm light theme.
The site stays deliberately content-first — every section is meant to be scanned in under a minute.

Dark/light preference is persisted in `localStorage` and respects `prefers-color-scheme` on a first
visit. Section navigation highlights the active section with an `IntersectionObserver`.

## Deployment

The site is statically exported (`output: "export"`) and published from this repository to GitHub
Pages by `.github/workflows/nextjs.yml` on every push to `main`. The workflow also runs daily so
build-time data stays current.

`public/CNAME` pins the custom domain to `shaheeranser.me`. `next.config.ts` keeps an empty base
path because the site is served from the domain root (the repository is the user site), and
`metadataBase`, the sitemap, robots, and the Open Graph metadata all point at the custom domain.

### Dynamic data on a static host

There is no server at runtime. GitHub star/fork counts are fetched at build time
(`src/lib/github.ts`) with a last-known fallback, then baked into the export. The daily Pages
rebuild refreshes them. The page itself makes no runtime API calls.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static export is written to `out/`. Preview it locally with:

```bash
npx serve out
```

## Content

Site content lives in two files:

- `src/lib/content.ts` — profile, roles, projects, open-source entries, skills, education, and contact links.
- `src/lib/caseStudies.ts` — long-form case studies rendered at `/projects/[slug]`.

Adding a case study is one object in `caseStudies`; adding a project card is one object in
`projects`. The route and metadata are generated from the same data.

## Notes

- `public/resume.pdf` is the downloadable résumé.
- `public/og.png` is the Open Graph card (1200×630).
- `src/app/icon.svg` is the favicon.
- `public/watcher/index.html` is a legacy redirect into `/projects/watcher/`.
