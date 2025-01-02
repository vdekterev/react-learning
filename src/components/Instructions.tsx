import { Link, useParams, useOutletContext } from 'react-router-dom';
import { IRecipeInstruction } from '@/types.ts';

export default function Instructions() {
	const { id } = useParams();
	const { instructions } = useOutletContext();

	return (
		<>
			<div className="recipe-info-header">
				<h3>INSTRUCTIONS</h3>
				<Link to={`/recipe/${id}/ingredients`} className="recipe-info-link">Ingredients</Link>
			</div>
			{instructions.map((instruction:IRecipeInstruction) => (
				<div className="recipe-info-content-container" key={instruction.id}>
					<p className="recipe-step">{instruction.position}</p>
					<p className="recipe-text">{instruction.display_text}</p>
				</div>
			))}
		</>
	);
}