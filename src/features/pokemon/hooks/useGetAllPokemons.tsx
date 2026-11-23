import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchCatalog } from '../api/pokeCatalogApi';

export const useAllPokemons = (limit: number, offset: number) =>
	useQuery({
		queryKey: ['pokemon', 'catalog', limit, offset],
		queryFn: ({ signal }) => fetchCatalog(limit, offset, signal),
		placeholderData: keepPreviousData,
		staleTime: 1000 * 60,
	});
