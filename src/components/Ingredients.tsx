import { Link, useOutletContext, useParams } from 'react-router-dom';
import { IRecipeIngredient } from '@/types.ts';

export default function Ingredients() {
	const { id } = useParams();

	const { ingredients } = useOutletContext();
	return (
		<>
			<div className="recipe-info-header">
				<h3>INGREDIENTS</h3>
				<Link to={`/recipe/${id}/instructions`} className="recipe-info-link">Instructions</Link>
			</div>
			{ingredients.map((ingredient:IRecipeIngredient) => (
				<div className="recipe-info-content-container" key={ingredient.id}>
					<p className="recipe-step">{ingredient.position}</p>
					<p className="recipe-text">{ingredient.raw_text}</p>
				</div>
			))}
		</>
	);
}