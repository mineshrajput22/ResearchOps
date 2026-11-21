import axiosInstance from '../../../shared/api/pokeapi-client';

export const fetchCatalog = async () => {
	const response = await axiosInstance.get('https://pokeapi.co/api/v2/pokemon');
	return response.data;
};
