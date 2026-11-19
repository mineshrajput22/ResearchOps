# ResearchOps — Landing

React + TypeScript + Vite, styled with SASS, routed with React Router.

```bash
npm run dev      # local dev
npm run build    # type-check + production build
npm run preview  # serve the build
npm run lint     # oxlint
```

## Routes

| Path          | Page            | Notes                                     |
| ------------- | --------------- | ----------------------------------------- |
| `/`           | `LandingPage`   | Index route, eager-loaded                 |
| `/landingPage`| —               | Redirects to `/` (keeps old links alive)  |
| `/workspaces` | `WorkspacesPage`| Code-split, lazy-loaded                   |
| `*`           | `NotFoundPage`  | 404 inside the site chrome                |

Routes live in `src/router.tsx`; path constants in `src/paths.ts`. Login is a
plain link to `/login` (`loginUrl`), served by the auth app.

## Files

```text
src/
├── main.tsx              # entry, imports global styles
├── index.scss            # reset, tokens, .container, .btn
├── App.tsx               # RouterProvider
├── router.tsx            # route table, redirect, 404, error boundary
├── paths.ts              # route + login URL constants
├── layouts/
│   └── RootLayout.tsx    # header/nav/footer, skip link, scroll restoration
├── lib/
│   └── useDocumentTitle.ts
└── pages/
    ├── LandingPage.tsx   # hero + feature cards
    ├── WorkspacesPage.tsx
    └── StatusPage.tsx    # 404 + route error boundary UI
```

## Deployment note

This is a client-routed SPA. Configure the host to rewrite unknown paths to
`index.html` (Netlify `_redirects`, Vercel rewrites, nginx `try_files`), otherwise
a hard refresh on `/workspaces` returns a server 404.
