import {useParams} from 'react-router-dom';
import {useFetchOneRecipe} from '@/hooks/useFetchOneRecipe.ts';
import {useEffect, useState} from 'react';
import Loading from '@/components/Loading.tsx';
import RecipeHeader from '@/components/RecipeHeader.tsx';
import RecipeInfo from '@/components/RecipeInfo.tsx';


export default function RecipePage() {
	const [recipe, setRecipe] = useState(null);
	const { id } = useParams();

	const [fetchRecipe, {data, loading, error}] = useFetchOneRecipe();

	useEffect(() => {
		fetchRecipe(id);
	}, []);

	if (loading) return <Loading/>;
	if (error) return <p>Something went wrong</p>;

	return (
		<div>
			{data &&
			<>
				<RecipeHeader title={data.name} nutritionalFacts={data.nutrition}/>
				<RecipeInfo instructions={data.instructions} image={data.thumbnail_url}/>
			</>
			}
		</div>
	);
}