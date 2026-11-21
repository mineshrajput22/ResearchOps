import type { CatalogPokemon, PokemonStats } from '../types'

export const samplePokemon: CatalogPokemon[] = [
  { id: 25, name: 'Pikachu', type: 'Electric' },
  { id: 1, name: 'Bulbasaur', type: 'Grass' },
  { id: 4, name: 'Charmander', type: 'Fire' },
  { id: 7, name: 'Squirtle', type: 'Water' },
  { id: 133, name: 'Eevee', type: 'Normal' },
  { id: 143, name: 'Snorlax', type: 'Normal' },
]

export const sampleDetails: PokemonStats = {
  name: 'Pikachu',
  type: 'Electric',
  stats: [
    { label: 'HP', value: 35 },
    { label: 'Attack', value: 55 },
    { label: 'Defense', value: 40 },
    { label: 'Sp. Attack', value: 50 },
    { label: 'Sp. Defense', value: 50 },
    { label: 'Speed', value: 90 },
  ],
}
