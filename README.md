# Pokémon Stats Explorer

A React and TypeScript starter for practicing API integration and dashboard performance. The catalog and stats panel use static sample data.

## Run locally

```powershell
pnpm.cmd install --frozen-lockfile
pnpm.cmd run dev
```

Vite prints the local address in your terminal. Use `pnpm.cmd run lint` to check the code and `pnpm.cmd run build` to type-check and build. Run `pnpm.cmd run preview` after a build to preview the production output.

## Using the explorer

- Browse 24 Pokémon at a time. The catalog page and selected Pokémon are shareable through the `page` and `pokemon` URL parameters.
- Search by a full or partial name, such as `chu`, or an exact PokéAPI ID, such as `25` or `#25`. Clearing the search restores the catalog page.
- Select any catalog or search result to see its types, base stats, and evolution chain. Use **Compare** to add up to three Pokémon. Comparison selections stay in place as you browse and search, and reset on reload.

## PokéAPI endpoints

All requests use `GET` with the base URL `https://pokeapi.co/api/v2/`. The shared Axios client uses a 10-second timeout.

| Feature | Endpoint | Data used |
| --- | --- | --- |
| Catalog | `/pokemon/?limit=24&offset={offset}` | Uses `results[].name` and `results[].url` for cards and `next` and `previous` for pagination. The offset is `(page - 1) * 24`. |
| Search | `/pokemon/?limit=1000&offset={offset}` | Loads a name and resource URL index on the first nonempty search. Fetches additional batches while `next` is present. Filters names locally and matches IDs against the final segment of each resource URL. |
| Stats and comparison | `/pokemon/{name}/` | Uses `name`, `types`, `stats`, and `species.name`. The API accepts a name or ID. Search results always use the canonical name for detail requests so they share the same cache entry as catalog selections. |
| Evolution lookup | `/pokemon-species/{name}/` | Reads `evolution_chain.url` and extracts its chain ID. |
| Evolution tree | `/evolution-chain/{id}/` | Maps `chain.species.name` and the nested `evolves_to` arrays into a tree. |

The hosted REST API exposes `limit` and `offset` for lists. Its `q` filter is only available in local PokéAPI deployments. [Pokémon list documentation](https://pokeapi.co/v2/openapi/operations/pokemon_list) · [Pokémon detail documentation](https://pokeapi.co/v2/openapi/operations/pokemon_retrieve) · [PokéAPI v2 reference](https://pokeapi.co/v2)

## Caching and recovery

- Search uses the `['pokemon', 'search-index']` query key. Changing the search text filters the cached index without sending a request for each keystroke.
- Stats and comparison use `['pokemon', 'details', name]`. Comparison fetches missing details in parallel and gives each column its own loading, error, and retry controls.
- React Query keeps data fresh for five minutes by default and retains unused entries for up to 30 minutes. Catalog pages use a one-minute freshness window. Catalog and search failures offer a **Retry** action.

## Source structure

```text
src/
  main.tsx                     Browser entry point
  app/                         App shell, providers, and global styles
  features/pokemon/            Explorer screen and its styles
    api/                       Catalog, search index, details, and evolution requests
    components/                Catalog cards and stats, comparison, and evolution panels
    hooks/                     React Query hooks and explorer URL state
    types.ts                   Shapes used by the UI
  shared/api/                  Configured Axios instance
```
