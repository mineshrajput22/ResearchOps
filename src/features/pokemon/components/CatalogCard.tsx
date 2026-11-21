import type { PokemonCatalogItem } from '../types';
import { TypeBadge } from './TypeBadge';

type CatalogCardProps = {
	pokemon: PokemonCatalogItem;
	onSelected: () => void;
};

export function CatalogCard({ pokemon, onSelected }: CatalogCardProps) {
	return (
		<li className='catalog-card'>
			<button onClick={onSelected}>
				<h3>{pokemon.name}</h3>
			</button>
		</li>
	);
}
