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

This is a **static Next.js 14 marketing site** for Agricola Ardal (a fruit-growing company in Murcia, Spain). It uses the App Router with no API routes, no server-side data fetching, and no external state management — all content is hardcoded in components.

**Routing:** Eight routes under `src/app/` — home, `/productos`, `/contacto`, `/nosotros`, and four product pages (`/albaricoques`, `/nectarinas`, `/naranjas`, `/limones`). Route folder names use lowercase Spanish.

**Components** (`src/components/`): Shared UI pieces. Two components use `'use client'` for scroll/intersection effects: `WhyChooseSection` (IntersectionObserver staggered cards) and `ParallaxImagePair` (scroll-based parallax). All others are server components.

**Data/constants** (`src/lib/`): `contacto.ts` holds company contact info; `images.ts` holds Unsplash fallback URLs used when local images are absent.

**Assets** (`public/`): Custom fonts (Grove Peach for headings, Aeonik for body) in `public/fonts/`; product SVGs and orchard PNGs in `public/images/`.

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
