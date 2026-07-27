# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (also catches TypeScript errors)
npm run lint     # Run ESLint
npm run start    # Serve production build after build
```

There is no automated test framework. Validate changes with `lint` + `build` + manual browser checks.

## Architecture

This is a **Next.js 14 marketing site** for Agricola Ardal (a fruit-growing company in Murcia, Spain), backed by a **Sanity CMS**. It uses the App Router with no custom API routes and no external state management. All editable copy and images live in Sanity and are fetched server-side per route — there is no client-side data fetching.

**Routing:** Eleven content routes under `src/app/` — home, `/productos`, `/contacto`, `/nosotros`, four product pages (`/albaricoques`, `/nectarinas`, `/naranjas`, `/limones`), and three legal pages (`/aviso-legal`, `/politica-de-cookies`, `/politica-de-privacidad`), plus the embedded Sanity Studio at `/studio`. Route folder names use lowercase Spanish.

**Components** (`src/components/`): Shared UI pieces, now data-driven via props instead of hardcoded content. Two components use `'use client'` for scroll/intersection effects: `WhyChooseSection` (IntersectionObserver staggered cards) and `ParallaxImagePair` (scroll-based parallax). All others are server components.

**Assets** (`public/`): Custom fonts (Grove Peach for headings, Aeonik for body) in `public/fonts/`; product SVGs and orchard PNGs in `public/images/` (used as the original seed source for Sanity image assets — pages now render images from `cdn.sanity.io`, not these local files).

## Sanity CMS

- **Schemas** (`sanity/schemaTypes/`): `siteSettings` and per-route singletons (`homePage`, `productosPage`, `contactoPage`, `nosotrosPage`) hold page copy; `fruitProduct` (one document per fruit) and `legalPage` (one per legal route) are the repeatable document types.
- **Studio:** embedded in this same Next.js app at `/studio` (`sanity.config.ts` at the repo root, must keep its `'use client'` directive or `npm run build` fails while collecting page data). Project ID and dataset are configured via `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` in `.env.local` (see `.env.local.example`).
- **Data access** (`sanity/lib/`): `client.ts` (read client), `fetchers.ts` + `queries.ts` (GROQ queries used by each page's Server Component), `image.ts` (`urlFor()` helper to resolve Sanity image refs to CDN URLs).
- **Seeding:** `sanity/seed.mjs` is a one-off migration script that pushed the site's original hardcoded copy into Sanity; it's safe to re-run (uses `createOrReplace` with fixed `_id`s) but isn't part of the normal dev workflow.
- Pages call their fetcher(s) directly (e.g. `getHomePage()`, `getFruitProductBySlug(slug)`) and pass resolved data down as props — there's no shared root layout fetch, so each page fetches what it needs (`siteSettings` for `Footer`/`ContactCTA`, plus its own page/document data).

## Styling Conventions

Use Tailwind utility classes with the custom theme tokens — never hard-code colors or fonts that have token equivalents:

- **Colors:** `verde-noche` (#0E240B), `ardalGreen` (#8DC83E), `crema` (#F5F0D0), `sand`, `paper`, `ink`, `nectarinaPink`, `naranjaOrange`, `limonYellow`
- **Fonts:** `font-heading` (Grove Peach, serif) and `font-body` (Aeonik, sans-serif)
- **Animation:** `animate-fade-in` (0.9s ease-out scale+opacity)

Use inline styles only for dynamic values (scroll transforms, RGBA overlays) that Tailwind cannot express.

## TypeScript & Code Style

- Strict TypeScript; all components in `.tsx` with PascalCase filenames
- Path alias `@/*` maps to `src/*`
- Two-space JSX indentation, single-quote imports
- Remote images require a domain allowlist entry in `next.config.js` (`images.unsplash.com` is already configured)
