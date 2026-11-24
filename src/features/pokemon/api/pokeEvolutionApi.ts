import axiosInstance from '../../../shared/api/pokeapi-client';
import type { EvolutionStage } from '../types';

type SpeciesResponse = {
	evolution_chain: { url: string } | null;
};

type ChainLink = {
	species: { name: string };
	evolves_to: ChainLink[];
};

export async function fetchEvolutionChainId(
	speciesName: string,
	signal: AbortSignal,
): Promise<string | null> {
	const { data } = await axiosInstance.get<SpeciesResponse>(
		`pokemon-species/${encodeURIComponent(speciesName)}`,
		{ signal },
	);

	if (data.evolution_chain === null) return null;

	const chainPath = new URL(data.evolution_chain.url).pathname;
	const chainId = /^\/api\/v2\/evolution-chain\/([1-9]\d*)\/?$/.exec(
		chainPath,
	)?.[1];
	if (!chainId) throw new Error('Invalid evolution chain link');
	return chainId;
}

function mapStage(link: ChainLink): EvolutionStage {
	return {
		speciesName: link.species.name,
		children: link.evolves_to.map(mapStage),
	};
}

export async function fetchEvolutionChain(
	chainId: string,
	signal: AbortSignal,
): Promise<EvolutionStage> {
	const { data } = await axiosInstance.get<{ chain: ChainLink }>(
		`evolution-chain/${chainId}`,
		{ signal },
	);
	return mapStage(data.chain);
}
