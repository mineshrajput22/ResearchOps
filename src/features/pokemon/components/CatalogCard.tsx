import type { PokemonCatalogItem } from '../types';

type CatalogCardProps = {
	pokemon: PokemonCatalogItem;
	selected: boolean;
	onSelected: () => void;
};

export function CatalogCard({ pokemon, selected, onSelected }: CatalogCardProps) {
	return (
		<li className='catalog-card' data-selected={selected}>
			<button type='button' aria-pressed={selected} onClick={onSelected}>
				<h3>{pokemon.name}</h3>
			</button>
		</li>
	);
}
