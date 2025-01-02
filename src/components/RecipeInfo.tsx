import {IRecipeInstruction} from '@/types.ts';

interface Props {
    instructions: IRecipeInstruction[],
    image: string
}
export default function RecipeInfo({ instructions, image }:Props) {
	return (
		<div className="recipe-info">
			<div className="recipe-info-container">
				<div className="recipe-info-header">
					<h3>INSTRUCTIONS</h3>
				</div>
				{instructions.map(instruction => (
					<div className="recipe-info-content-container" key={instruction.id}>
						<p className="recipe-step">{instruction.position}</p>
						<p className="recipe-text">{instruction.display_text}</p>
					</div>
				))}
			</div>
			<img className="recipe-img" src={image} alt=""/>
		</div>
	);
}