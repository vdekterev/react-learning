import axios from 'axios';
import { useState} from 'react';

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

export function useFetchRecipes(offset=0) {
	const [recipes, setRecipes] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	if (offset > 0) {
		options.params.from = offset.toString();
	}

	const fetchRecipes = async (searchParam:string) => {
		setLoading(true);
		setRecipes(null);
		setError(null);
		try {
			const reqOptions = {...options};
			if (searchParam) {
				reqOptions.params.q = searchParam;
			}
			const response = await axios.request(reqOptions);
			setRecipes(response.data.results);
			return response;
		} catch (error: any) {
			console.error(error);
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return [fetchRecipes, {data: recipes, loading, error}];
}
