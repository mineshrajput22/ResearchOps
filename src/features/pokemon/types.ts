export interface CatalogPokemon {
	name: string;
	type: string;
}

export interface PokemonStats {
	name: string;
}

export interface PokemonCatalogItem {
	name: string;
	url: string;
	onSelected: () => void;
}
