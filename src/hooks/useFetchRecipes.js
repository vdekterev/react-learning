import axios from 'axios';
import {useEffect, useState} from 'react';

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
        from: '0',
        size: '20'
    },
    headers: {
        'x-rapidapi-key': 'cfa6fcbabdmsh9200dc53edbc47dp160243jsn0f529d610b82',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
};

export function useFetchRecipes(offset=0) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    if (offset > 0) {
        options.params.from = offset.toString();
    }

    const fetchRecipes = async () => {
        try {
            const response = await axios.request(options);
            setRecipes(response.data.results);
            return response;
        } catch (error) {
            console.error(error);
        }
    };
    return [recipes];
}
