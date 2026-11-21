import { useQuery } from '@tanstack/react-query';
import { fetchCatalog } from '../api/pokeCatalogApi';

export const useAllPokemons = () =>
	useQuery({
		queryKey: ['pokemon', 'catalog'],
		queryFn: fetchCatalog,
		staleTime: 1000 * 60,
	});
