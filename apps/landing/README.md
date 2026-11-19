# ResearchOps — Landing

Marketing landing page for ResearchOps.

React 19 + TypeScript + Vite, styled with SASS using CSS Modules. TypeScript is
strict and imports use the `@/` alias for `src/`.

## Commands

```bash
npm run dev      # local dev server
npm run build    # type-check, then production build to dist/
npm run preview  # serve the production build locally
npm run lint     # oxlint
```

## Structure

```text
src/
├── app/                    # App root (composition of layout + page)
├── pages/
│   └── landing/            # One folder per route/page
├── components/
│   ├── layout/             # Site shell: header, footer, layout
│   ├── sections/           # Page sections: Hero, FeatureGrid
│   └── ui/                 # Reusable primitives: Button, Container
├── config/                 # Typed marketing content + site settings
├── lib/                    # Framework-agnostic helpers (cx)
├── styles/
│   ├── abstracts/          # Breakpoints + mixins (no CSS output)
│   ├── base/               # Reset, design tokens, typography
│   └── main.scss           # Global entry, imported once in main.tsx
└── main.tsx                # Browser entry
```

Each component lives in its own folder with a co-located `*.module.scss` and an
`index.ts` barrel, so imports stay short and files move without churn.

## Styling rules

- Global styles are imported exactly once (`src/main.tsx` → `styles/main.scss`).
- Everything else is a CSS Module. Class names never leak between components.
- Colors, spacing, radii, motion and layout values are tokens in
  `styles/base/_tokens.scss`. Don't hardcode them in component files.
- SASS get helpers from `@use 'abstracts' as *;`. Vite's `loadPaths` maps
  `src/styles`, so no long relative paths are needed.
- Responsive rules use the `from($bp)` / `until($bp)` mixins, never raw pixel
  media queries.
- Prefer logical properties (`margin-inline`, `padding-block`) so RTL is cheap.

## Content and auth

Marketing copy and the login destination are typed in `src/config/site.ts`.
The login button renders an `<a>` to `site.loginHref` (`/login`) through the
shared `Button` component. Point that value at the auth app/route when it exists;
no component changes are needed.

## Notes

- `strict` is enabled in both app and tooling TS configs.
- `public/favicon.svg` is the only static asset; template leftovers were removed.
- If the site grows past a few pages, add `react-router` at `app/App.tsx` and pass
  `site.loginHref` to a route instead of an anchor.
