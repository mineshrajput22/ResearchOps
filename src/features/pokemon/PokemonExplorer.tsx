import { useState } from 'react';
import { CatalogCard } from './components/CatalogCard';
import { StatsPanel } from './components/StatsPanel';
import './pokemon-explorer.css';
import { useAllPokemons } from './hooks/useGetAllPokemons';
import { usePokemonDetails } from './hooks/useGetPokemonDetails';

export function PokemonExplorer() {
	const [selectedName, setSelectedName] = useState<string>();

	const catalog = useAllPokemons();
	const activeName = selectedName ?? catalog.data?.results[0]?.name;
	const details = usePokemonDetails(activeName);

	if (catalog.isPending) return <p>Loading catalog…</p>;

	if (catalog.isError) return <p>{catalog.error.message}</p>;

	return (
		<main className='dashboard'>
			<header className='page-heading'>
				<h1>Pokémon Stats Explorer</h1>
				<p>Browse the catalog and inspect base stats fetched from PokéAPI.</p>
			</header>

			<div className='dashboard-layout'>
				<section aria-labelledby='catalog-title'>
					<h2 id='catalog-title' className='catalog-title'>
						Catalog
					</h2>
					<ul className='catalog-grid'>
						{catalog.data.results.map((pokemon) => (
							<CatalogCard
								key={pokemon.url}
								pokemon={pokemon}
								selected={activeName === pokemon.name}
								onSelected={() => setSelectedName(pokemon.name)}
							/>
						))}
					</ul>
				</section>
				<StatsPanel
					pokemon={details.data}
					isPending={details.isPending}
					isError={details.isError}
				/>
			</div>
		</main>
	);
}
