import type { PokemonStats } from '../types';
import { TypeBadge } from './TypeBadge';

export function StatsPanel(pokemon: PokemonStats ) {
	return (
		<aside className='stats-panel' aria-labelledby='stats-title'>
			<p className='section-label'>Stats preview</p>
			<h2 id='stats-title'>{pokemon.name}</h2>
			<ul className='stats-list' aria-label='Base stats'>
				{/* {pokemon.stats.map(({ label, value }) => (
          <li className="stat" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <progress value={value} max={255} aria-hidden="true" />
          </li>
        ))} */}
			</ul>
		</aside>
	);
}
