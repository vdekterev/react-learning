import axios from 'axios';
import { useState} from 'react';

const options = {
	method: 'GET',
	url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
	params: {id: 0},
	headers: {
		'x-rapidapi-key': 'cfa6fcbabdmsh9200dc53edbc47dp160243jsn0f529d610b82',
		'x-rapidapi-host': 'tasty.p.rapidapi.com'
	}
};

export function useFetchOneRecipe() {
	const [recipe, setRecipe] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchRecipe = async (recipeID: number) => {
		setLoading(true);
		setRecipe(null);
		setError(null);
		try {
			const reqOptions = {
				...options,
				params: {id: recipeID}
			};

			const response = await axios.request(reqOptions);
			setRecipe(response.data);
			return response;
		} catch (error: any) {
			console.error(error);
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return [fetchRecipe, {data: recipe, loading, error}];
}