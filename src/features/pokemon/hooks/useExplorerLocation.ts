import { useLocation, useNavigate } from 'react-router';

export const CATALOG_PAGE_SIZE = 24;

export function useExplorerLocation() {
	const { pathname, search, hash } = useLocation();
	const navigate = useNavigate();
	const params = new URLSearchParams(search);
	const rawPage = params.get('page') ?? '';
	const page = Number(rawPage);
	const offset = (page - 1) * CATALOG_PAGE_SIZE;
	const pokemon = params.get('pokemon')?.trim().toLowerCase();

	function updateParam(key: 'page' | 'pokemon', value: string) {
		if (params.get(key) === value) return;

		const nextParams = new URLSearchParams(params);
		nextParams.set(key, value);
		void navigate({ pathname, search: `?${nextParams}`, hash });
	}

	return {
		page: /^[1-9]\d*$/.test(rawPage) && Number.isSafeInteger(offset) ? page : 1,
		selectedName: pokemon && /^[a-z0-9-]+$/.test(pokemon) ? pokemon : undefined,
		setPage: (page: number) => updateParam('page', String(page)),
		setSelectedName: (name: string) => updateParam('pokemon', name),
	};
}
