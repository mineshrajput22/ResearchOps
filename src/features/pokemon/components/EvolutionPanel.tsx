import { useId } from 'react';
import { usePokemonEvolution } from '../hooks/usePokemonEvolution';
import type { EvolutionStage } from '../types';

type EvolutionPanelProps = {
	speciesName?: string;
	isWaitingForDetails: boolean;
};

type EvolutionBranchProps = {
	stage: EvolutionStage;
	selectedSpecies?: string;
};

function EvolutionBranch({ stage, selectedSpecies }: EvolutionBranchProps) {
	return (
		<li>
			<span
				className='evolution-stage'
				aria-current={stage.speciesName === selectedSpecies ? true : undefined}>
				{stage.speciesName.replaceAll('-', ' ')}
			</span>
			{stage.children.length > 0 && (
				<ul role='list'>
					{stage.children.map((child) => (
						<EvolutionBranch
							key={child.speciesName}
							stage={child}
							selectedSpecies={selectedSpecies}
						/>
					))}
				</ul>
			)}
		</li>
	);
}

export function EvolutionPanel({
	speciesName,
	isWaitingForDetails,
}: EvolutionPanelProps) {
	const titleId = useId();
	const { species, chain } = usePokemonEvolution(speciesName);
	const failedQuery = species.isError ? species : chain.isError ? chain : undefined;
	const isLoading =
		isWaitingForDetails ||
		Boolean(speciesName && (species.isPending || (species.data && chain.isPending)));

	return (
		<section className='evolution-panel' aria-labelledby={titleId}>
			<h2 id={titleId}>Evolution</h2>
			{failedQuery && (
				<div className='section-error' role='alert'>
				<p>
					{chain.data
						? 'Could not refresh the evolution chain.'
						: 'Could not load the evolution chain.'}
				</p>
					<button
						type='button'
						className='retry-button'
						disabled={failedQuery.isFetching}
						onClick={() => failedQuery.refetch()}>
						Retry evolution
					</button>
				</div>
			)}
			{isLoading && <p role='status'>Loading evolution chain.</p>}
			{!speciesName && !isLoading && <p>Evolution requires Pokémon details.</p>}
			{species.data === null && <p>No evolution chain is available.</p>}
			{chain.data && (
				<>
					<ul className='evolution-tree' role='list'>
						<EvolutionBranch stage={chain.data} selectedSpecies={speciesName} />
					</ul>
					{chain.data.children.length === 0 && <p>This species does not evolve.</p>}
				</>
			)}
		</section>
	);
}
