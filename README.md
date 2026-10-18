# portfolio

Personal portfolio site for Muhammad Shaheer — a full-stack software engineer. Built with Next.js (App Router) and Tailwind CSS, it presents experience, selected projects, and skills.

## Views

The site is a single-window desktop app. One centered window sits between the top panel and the
dock, and the dock switches which view renders inside it — the page itself never scrolls.

- **Home** — a single fastfetch terminal: `</>` ASCII art, your name, live detail rows, and terminal-styled *view projects* / *get in touch* / *download résumé* buttons
- **Experience** — roles
- **Work** — sub-tabs: **Projects** (commercial and shipped systems) and **Open source** (a library, a dataset and merged/open pull requests)
- **Competencies** — sub-tabs: **Stack** (skills as shields.io badges) and **Education** (study and certifications)
- **Contact** — email, phone, LinkedIn, GitHub, résumé

## Stack

- Next.js 16 (App Router, React 19, Turbopack)
- TypeScript
- Tailwind CSS v4
- `next/font` (IBM Plex Sans, IBM Plex Mono)

## Design

A quiet desktop theme built on the Catppuccin palettes (Mocha by default, Latte for the light
theme), with a single flat accent and no gradients. A top panel (brand, clock, theme toggle,
`⌘K` launcher) and a dock — a floating pill on desktop, a bottom tab bar on mobile — switch views
inside one uniform, centered window whose body scrolls internally when a view runs long. Dark/light
theme persists via `localStorage`.

## Deployment

Statically exported and published to GitHub Pages from this repository by
`.github/workflows/deploy.yml` on every push to `main`, served from the site root at
`https://shaheeranser.github.io/`. `metadataBase` points at the same URL.

`next.config.ts` still honours an optional `NEXT_PUBLIC_BASE_PATH` (default empty) so the site can
be served from a subpath if ever needed; the deploy workflow no longer sets it.

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

The static export is written to `out/` (there is no `next start` — this project is
server-less). To preview the Pages build locally:

```bash
npm run build
npx serve out
```

## Notes

- Site content (profile, roles, projects, contributions, skills) is curated in `src/lib/content.ts`.
- The page is fully statically prerendered; no runtime data fetch.