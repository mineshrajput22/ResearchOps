export interface PokemonStat {
	label: string;
	value: number;
}

export interface PokemonStats {
	name: string;
	speciesName: string;
	types: string[];
	stats: PokemonStat[];
}

/** A single entry from the PokéAPI `/pokemon` list response. */
export interface PokemonCatalogItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonCatalogItem[];
}

interface NamedApiResource {
	name: string;
	url: string;
}

/** A single Pokémon from the PokéAPI `/pokemon/{name}` response (trimmed). */
export interface PokemonDetailResponse {
	id: number;
	name: string;
	species: NamedApiResource;
	types: Array<{ slot: number; type: NamedApiResource }>;
	stats: Array<{ base_stat: number; effort: number; stat: NamedApiResource }>;
}

export interface EvolutionStage {
	speciesName: string;
	children: EvolutionStage[];
}
