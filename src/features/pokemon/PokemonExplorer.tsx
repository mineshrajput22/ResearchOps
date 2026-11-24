import { CatalogCard } from './components/CatalogCard';
import { EvolutionPanel } from './components/EvolutionPanel';
import { StatsPanel } from './components/StatsPanel';
import './pokemon-explorer.css';
import {
	CATALOG_PAGE_SIZE,
	useExplorerLocation,
} from './hooks/useExplorerLocation';
import { useAllPokemons } from './hooks/useGetAllPokemons';
import { usePokemonDetails } from './hooks/useGetPokemonDetails';

export function PokemonExplorer() {
	const { page, selectedName, setPage, setSelectedName } =
		useExplorerLocation();
	const catalog = useAllPokemons(
		CATALOG_PAGE_SIZE,
		(page - 1) * CATALOG_PAGE_SIZE,
	);
	const activeName = selectedName ?? catalog.data?.results[0]?.name;
	const details = usePokemonDetails(activeName);
	const isLoadingDetails = Boolean(activeName) && details.isPending;
	const catalogResults = catalog.data?.results ?? [];
	const canGoPrevious =
		!catalog.isPlaceholderData && Boolean(catalog.data?.previous);
	const canGoNext = !catalog.isPlaceholderData && Boolean(catalog.data?.next);

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
					{catalog.isError ?
						<div className='section-error' role='alert'>
							<p>
								{catalog.data ?
									'Could not refresh the catalog. Showing the last loaded results.'
								:	`Could not load catalog page ${page}. Please try again.`}
							</p>
							<button
								type='button'
								className='retry-button'
								onClick={() => catalog.refetch()}
								disabled={catalog.isFetching}>
								Retry
							</button>
						</div>
					:	null}
					{catalog.isPending ?
						<p className='catalog-empty' role='status'>
							Loading catalog…
						</p>
					: catalog.data && catalogResults.length === 0 ?
						<p className='catalog-empty' role='status'>
							No Pokémon are available on this page.
						</p>
					: catalogResults.length > 0 ?
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
					:	null}
					<nav className='catalog-pagination' aria-label='Catalog pages'>
						<button
							type='button'
							className='retry-button'
							disabled={!canGoPrevious}
							onClick={() => setPage(page - 1)}>
							Previous
						</button>
						<span role='status'>
							{catalog.isPlaceholderData ?
								`Loading page ${page}…`
							:	`Page ${page}`}
						</span>
						<button
							type='button'
							className='retry-button'
							disabled={!canGoNext}
							onClick={() => setPage(page + 1)}>
							Next
						</button>
					</nav>
				</section>
				<div className='pokemon-panels'>
					<StatsPanel
						pokemon={details.data}
						isPending={isLoadingDetails}
						isError={details.isError}
						onRetry={() => details.refetch()}
					/>
					<EvolutionPanel
						speciesName={details.data?.speciesName}
						isWaitingForDetails={isLoadingDetails || catalog.isPending}
					/>
				</div>
			</div>
		</main>
	);
}
