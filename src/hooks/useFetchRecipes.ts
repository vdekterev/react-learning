import axios from 'axios';
import { useFetchReducer } from '@/hooks/useFetchReducer.ts';

const options = {
	method: 'GET',
	url: 'https://tasty.p.rapidapi.com/recipes/list',
	params: {
		from: '0',
		size: '20',
		q: ''
	},
	headers: {
		'x-rapidapi-key': 'cfa6fcbabdmsh9200dc53edbc47dp160243jsn0f529d610b82',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};


export function useFetchRecipes(offset = 0) {
	const { state, setLoading, setSuccess, setError } = useFetchReducer();

	if (offset > 0) {
		options.params.from = offset.toString();
	}

	const fetchRecipes = async (searchParam: string) => {
		setLoading();
		try {
			const reqOptions = { ...options };
			if (searchParam) {
				reqOptions.params.q = searchParam;
			}
			const response = await axios.request(reqOptions);
			setSuccess(response.data.results);
			return response;
		} catch (error: any) {
			console.error(error);
			setError(error.message);
		}
	};

	return [fetchRecipes, state];
}
