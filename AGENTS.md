# Repository Guidelines

## Project Structure & Module Organization

This is a private Next.js 14 marketing site for Agricola Ardal. Application routes live in `src/app`, using the App Router layout convention: `layout.tsx`, `page.tsx`, `not-found.tsx`, and per-route folders such as `src/app/productos`, `src/app/contacto`, and `src/app/limones`. Shared UI components are in `src/components`; small content/data helpers are in `src/lib`. Static assets are in `public`, with images in `public/images` and custom fonts in `public/fonts`.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build and catch TypeScript/build errors.
- `npm run start`: serve the production build after `npm run build`.
- `npm run lint`: run the Next.js ESLint checks.

Use `npm install` to restore dependencies from `package-lock.json`.

## Coding Style & Naming Conventions

Write TypeScript and React components in `.tsx` files. Keep reusable components in `src/components` and name them with PascalCase, for example `CTAButton.tsx`. Route folders should use lowercase Spanish URL names, such as `naranjas` or `albaricoques`.

The project uses strict TypeScript, the `@/*` path alias for `src/*`, Tailwind CSS utility classes, and custom theme tokens from `tailwind.config.js`. Prefer existing color and font tokens (`verde-noche`, `ardalGreen`, `font-heading`, `font-body`) over hard-coded styles. Follow the current two-space JSX indentation and single-quote import style.

## Testing Guidelines

No automated test framework is currently configured. For now, validate changes with:

- `npm run lint`
- `npm run build`
- manual browser checks with `npm run dev`

When adding tests, keep them close to the affected feature or component, use descriptive names such as `Navbar.test.tsx`, and document any new test command in `package.json` and this guide.

## Commit & Pull Request Guidelines

Recent history uses short, descriptive commit subjects, for example `Build out marketing site for Agrícola Ardal` and `Primer commit`. Keep commits focused and written in imperative or concise descriptive form.

Pull requests should include a clear summary, affected pages/components, screenshots for visual changes, and verification commands. Link related issues when available. For content changes, mention affected Spanish copy or assets so reviewers can check tone and accuracy.

## Security & Configuration Tips

Do not commit generated folders such as `.next` or `node_modules`. Keep public-only assets in `public`; do not place secrets, private documents, or credentials there. If environment variables are introduced later, document required names in a local example file without real values.
