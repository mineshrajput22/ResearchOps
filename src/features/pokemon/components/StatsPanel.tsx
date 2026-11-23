import type { PokemonStats } from '../types';
import { TypeBadge } from './TypeBadge';

type StatsPanelProps = {
	pokemon?: PokemonStats;
	isPending: boolean;
	isError: boolean;
	onRetry: () => void;
};

export function StatsPanel({
	pokemon,
	isPending,
	isError,
	onRetry,
}: StatsPanelProps) {
	return (
		<aside className='stats-panel' aria-label='Base stats'>
			<p className='section-label'>Base stats</p>
			{isPending ? <p className='stats-empty'>Loading stats…</p> : null}
			{isError ? (
				<div className='section-error' role='alert'>
					<p>
						{pokemon
							? 'Could not refresh these stats.'
							: 'Could not load stats for this Pokémon.'}
					</p>
					<button type='button' className='retry-button' onClick={onRetry}>
						Retry
					</button>
				</div>
			) : null}
			{pokemon ? (
				<>
					<h2>{pokemon.name}</h2>
					<div className='type-list'>
						{pokemon.types.map((type) => (
							<TypeBadge key={type} type={type} />
						))}
					</div>
					<ul className='stats-list' aria-label='Base stats'>
						{pokemon.stats.map(({ label, value }) => (
							<li className='stat' key={label}>
								<span>{label}</span>
								<strong>{value}</strong>
								<progress value={value} max={255} aria-hidden='true' />
							</li>
						))}
					</ul>
				</>
			) : null}
			{!pokemon && !isPending && !isError ? (
				<p className='stats-empty'>
					Select a Pokémon to see its base stats.
				</p>
			) : null}
		</aside>
	);
}
