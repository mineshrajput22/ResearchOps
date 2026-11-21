import { useQuery } from '@tanstack/react-query';
import { CatalogCard } from './components/CatalogCard';
import { StatsPanel } from './components/StatsPanel';
import './pokemon-explorer.css';
import { fetchCatalog } from './api/pokeCatalogApi';
import type { PokemonCatalogItem } from './types';
import { useState } from 'react';

export function PokemonExplorer() {
	const [selected, setSelected] = useState('');

	const { data, isPending, isError, error } = useQuery({
		queryKey: ['Catalog'],
		queryFn: fetchCatalog,
		staleTime: 1000 * 60,
	});
	if (isPending) return <p>Loading...</p>;

	if (isError) return <p>{error.message}</p>;

	return (
		<main className='dashboard'>
			<header className='page-heading'>
				<h1>Pokémon Stats Explorer</h1>
				<p>Static preview with sample Pokémon and base stats.</p>
			</header>

			<div className='dashboard-layout'>
				<section aria-labelledby='catalog-title'>
					<h2 id='catalog-title' className='catalog-title'>
						Catalog
					</h2>
					<ul className='catalog-grid'>
						{data.results.map((pokemon: PokemonCatalogItem) => (
							<CatalogCard
								key={pokemon.url}
								pokemon={pokemon}
								selected={}
								onSelected={() => setSelected(pokemon.url)}
							/>
						))}
					</ul>
				</section>
				<StatsPanel pokemon={selected} />
			</div>
		</main>
	);
}
