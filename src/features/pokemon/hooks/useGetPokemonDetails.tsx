import { useQuery } from '@tanstack/react-query';
import { fetchPokemonDetails } from '../api/pokeCatalogApi';

export const usePokemonDetails = (name?: string) =>
	useQuery({
		queryKey: ['pokemon', 'details', name],
		queryFn: ({ signal }) => fetchPokemonDetails(name ?? '', signal),
		enabled: Boolean(name),
		staleTime: 1000 * 60 * 5,
	});
