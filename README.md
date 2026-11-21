# Pokémon Stats Explorer

A React and TypeScript starter for practicing API integration and dashboard performance. The catalog and stats panel use static sample data.

## Run locally

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd run dev
```

Vite prints the local address in your terminal. Use `pnpm.cmd run lint` to check the code and `pnpm.cmd run build` to type-check and build. Run `pnpm.cmd run preview` after a build to preview the production output.

## Source structure

```text
src/
  main.tsx                     Browser entry point
  app/                         App shell, providers, and global styles
  features/pokemon/            Explorer screen and its styles
    components/                Catalog card, type badge, and stats panel
    data/                      Static preview data
    types.ts                   Shapes used by the UI
  shared/api/                  Configured Axios instance
```

`AppProviders.tsx` creates one React Query client for the app. By default, query data stays fresh for five minutes and unused entries can be kept in memory for up to 30 minutes. `pokeapi-client.ts` contains the PokéAPI base URL and a 10-second request timeout.

## Start here

1. Open the [PokéAPI list response](https://pokeapi.co/api/v2/pokemon/?limit=24&offset=0). Inspect `results`, `next`, and `previous` in the browser.
2. Add your request functions and query hooks under `src/features/pokemon/api/`. Use the shared Axios instance for requests and React Query for cache and loading state. Keep API response types near your requests and map them to the shapes the UI needs.
3. Render the first page in `PokemonExplorer.tsx`. The list returns `name` and `url`. Start with names, and add loading, empty, and error states. Add a Pokémon's type when that data is available.
4. Open the [Pikachu detail response](https://pokeapi.co/api/v2/pokemon/pikachu/). Use the selected Pokémon's details to populate `StatsPanel`.
5. Add pagination. Once the flow works, save a baseline commit before profiling or optimizing it.
