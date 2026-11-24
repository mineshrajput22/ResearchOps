import axiosInstance from '../../../shared/api/pokeapi-client';
import type {
	PokemonDetailResponse,
	PokemonListResponse,
	PokemonStats,
} from '../types';

export const fetchCatalog = async (
	limit: number,
	offset: number,
	signal: AbortSignal,
) => {
	const response = await axiosInstance.get<PokemonListResponse>('pokemon', {
		params: { limit, offset },
		signal,
	});
	return response.data;
};

const STAT_LABELS: Record<string, string> = {
	hp: 'HP',
	attack: 'Attack',
	defense: 'Defense',
	'special-attack': 'Sp. Attack',
	'special-defense': 'Sp. Defense',
	speed: 'Speed',
};

const capitalize = (value: string) =>
	value.charAt(0).toUpperCase() + value.slice(1);

/** Fetches one Pokémon and shapes the response for the stats panel. */
export const fetchPokemonDetails = async (
	name: string,
	signal: AbortSignal,
): Promise<PokemonStats> => {
	const response = await axiosInstance.get<PokemonDetailResponse>(
		`pokemon/${encodeURIComponent(name)}`,
		{ signal },
	);
	const { name: displayName, species, types, stats } = response.data;

	return {
		name: capitalize(displayName),
		speciesName: species.name,
		types: types.map(({ type }) => capitalize(type.name)),
		stats: stats.map(({ base_stat, stat }) => ({
			label: STAT_LABELS[stat.name] ?? capitalize(stat.name.replace('-', ' ')),
			value: base_stat,
		})),
	};
};
