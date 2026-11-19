# ResearchOps — Landing

Simple landing page: React + TypeScript + Vite, styled with SASS.

```bash
npm run dev      # local dev
npm run build    # type-check + production build
npm run preview  # serve the build
npm run lint     # oxlint
```

## Files

```text
src/
├── main.tsx          # entry, imports global styles
├── index.scss        # reset, colour/spacing variables, base styles
├── App.tsx           # renders the Landing page
└── pages/
    ├── Landing.tsx   # header, hero, feature cards, footer + login button
    └── Landing.scss  # all landing styles (BEM classes), variables from index.scss
```

The login button is a plain link to `/login` — change the `href` when the auth
route exists.
