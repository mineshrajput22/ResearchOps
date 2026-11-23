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

	if (catalog.isError && !catalog.data) {
		return (
			<main className='dashboard'>
				<header className='page-heading'>
					<h1>Pokémon Stats Explorer</h1>
					<p>Browse the catalog and inspect base stats fetched from PokéAPI.</p>
				</header>
				<section className='section-error' role='alert'>
					<p>
						We couldn&apos;t load the Pokémon catalog. Please check your
						connection and try again.
					</p>
					<button
						type='button'
						className='retry-button'
						onClick={() => catalog.refetch()}
						disabled={catalog.isFetching}
					>
						Retry
					</button>
				</section>
			</main>
		);
	}

	const catalogResults = catalog.data?.results ?? [];

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
					{catalog.isError ? (
						<div className='section-error' role='alert'>
							<p>Could not refresh the catalog. Showing the last loaded results.</p>
							<button
								type='button'
								className='retry-button'
								onClick={() => catalog.refetch()}
								disabled={catalog.isFetching}
							>
								Retry
							</button>
						</div>
					) : null}
					{catalogResults.length === 0 ? (
						<p className='catalog-empty' role='status'>
							No Pokémon are available in the catalog.
						</p>
					) : (
						<ul className='catalog-grid'>
							{catalogResults.map((pokemon) => (
								<CatalogCard
									key={pokemon.url}
									pokemon={pokemon}
									selected={activeName === pokemon.name}
									onSelected={() => setSelectedName(pokemon.name)}
								/>
							))}
						</ul>
					)}
				</section>
				<StatsPanel
					pokemon={details.data}
					isPending={Boolean(activeName) && details.isPending}
					isError={details.isError}
					onRetry={() => details.refetch()}
				/>
			</div>
		</main>
	);
}
