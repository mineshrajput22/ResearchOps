# Pokémon Stats Explorer

A React and TypeScript starter for practicing API integration and dashboard performance. The catalog and stats panel are a static UI preview using sample data.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Vite prints the local address in your terminal. Use `npm.cmd run lint` to check the code and `npm.cmd run build` to type-check and build. Run `npm.cmd run preview` after a build to preview the production output.

## Start here

The sample data and UI components are in `src/App.tsx`. `src/App.css` contains the responsive layout and component styles. `src/index.css` sets the global defaults.

1. Open the [PokéAPI list response](https://pokeapi.co/api/v2/pokemon/?limit=24&offset=0). Inspect `results`, `next`, and `previous` in the browser.
2. Render the first page from the API. Start with names, since the list returns `name` and `url`. Add loading, empty, and error states.
3. Open the [Pikachu detail response](https://pokeapi.co/api/v2/pokemon/pikachu/). Use the selected Pokémon's detail URL to populate the stats panel, and cache fetched responses as described in the [PokéAPI docs](https://pokeapi.co/docs/v2).
4. Add pagination. Once the flow works, save a baseline commit before profiling or optimizing it.
