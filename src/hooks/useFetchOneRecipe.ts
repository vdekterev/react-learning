import axios from 'axios';
import { useFetchReducer } from '@/hooks/useFetchReducer.ts';

const options = {
	method: 'GET',
	url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
	params: { id: 0 },
	headers: {
		'x-rapidapi-key': 'cfa6fcbabdmsh9200dc53edbc47dp160243jsn0f529d610b82',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

export function useFetchOneRecipe() {
	const { state, setLoading, setSuccess, setError } = useFetchReducer();
	const fetchRecipe = async (recipeID: number) => {
		setLoading();
		try {
			const reqOptions = {
				...options,
				params: { id: recipeID }
			};

			const response = await axios.request(reqOptions);
			setSuccess(response.data);
			return response;
		} catch (error: any) {
			console.error(error);
			setError(error.message);
		}
	};

	return [fetchRecipe, state];
}