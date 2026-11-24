import { skipToken, useQuery } from '@tanstack/react-query';
import {
	fetchEvolutionChain,
	fetchEvolutionChainId,
} from '../api/pokeEvolutionApi';

export function usePokemonEvolution(speciesName?: string) {
	const species = useQuery({
		queryKey: ['pokemon', 'species-chain', speciesName],
		queryFn: speciesName
			? ({ signal }) => fetchEvolutionChainId(speciesName, signal)
			: skipToken,
	});
	const chainId = species.data;
	const chain = useQuery({
		queryKey: ['pokemon', 'evolution-chain', chainId],
		queryFn: chainId
			? ({ signal }) => fetchEvolutionChain(chainId, signal)
			: skipToken,
	});

	return { species, chain };
}
