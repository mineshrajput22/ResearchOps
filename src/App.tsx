import './App.css'

type PokemonCard = {
  id: number
  name: string
  type: 'Electric' | 'Grass' | 'Fire' | 'Water' | 'Normal'
}

const samplePokemon: PokemonCard[] = [
  { id: 25, name: 'Pikachu', type: 'Electric' },
  { id: 1, name: 'Bulbasaur', type: 'Grass' },
  { id: 4, name: 'Charmander', type: 'Fire' },
  { id: 7, name: 'Squirtle', type: 'Water' },
  { id: 133, name: 'Eevee', type: 'Normal' },
  { id: 143, name: 'Snorlax', type: 'Normal' },
]

const sampleStats = [
  { label: 'HP', value: 35 },
  { label: 'Attack', value: 55 },
  { label: 'Defense', value: 40 },
  { label: 'Sp. Attack', value: 50 },
  { label: 'Sp. Defense', value: 50 },
  { label: 'Speed', value: 90 },
]

function TypeBadge({ type }: { type: PokemonCard['type'] }) {
  return <span className={`type type--${type.toLowerCase()}`}>{type}</span>
}

function CatalogCard({ pokemon }: { pokemon: PokemonCard }) {
  return (
    <li className="catalog-card">
      <span className="pokemon-id">#{String(pokemon.id).padStart(3, '0')}</span>
      <h3>{pokemon.name}</h3>
      <TypeBadge type={pokemon.type} />
    </li>
  )
}

function StatsPreview() {
  return (
    <aside className="stats-panel" aria-labelledby="stats-title">
      <p className="section-label">Stats preview</p>
      <h2 id="stats-title">Pikachu</h2>
      <TypeBadge type="Electric" />
      <ul className="stats-list" aria-label="Base stats">
        {sampleStats.map(({ label, value }) => (
          <li className="stat" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <progress value={value} max={255} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default function App() {
  return (
    <main className="dashboard">
      <header className="page-heading">
        <h1>Pokémon Stats Explorer</h1>
        <p>Static preview with sample Pokémon and base stats.</p>
      </header>

      <div className="dashboard-layout">
        <section aria-labelledby="catalog-title">
          <h2 id="catalog-title" className="catalog-title">Catalog</h2>
          <ul className="catalog-grid">
            {samplePokemon.map((pokemon) => (
              <CatalogCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </ul>
        </section>
        <StatsPreview />
      </div>
    </main>
  )
}
