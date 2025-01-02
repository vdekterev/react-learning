import { IRecipeIngredient, IRecipeInstruction } from '@/types.ts';
import { Outlet } from 'react-router-dom';

interface Props {
    instructions: IRecipeInstruction[],
	ingredients: IRecipeIngredient[],
    image: string
}
export default function RecipeInfo({ instructions, ingredients, image }:Props) {
	return (
		<div className="recipe-info">
			<div className="recipe-info-container">
				<Outlet context={{ instructions, ingredients }}/>
			</div>
			<img className="recipe-img" src={image} alt=""/>
		</div>
	);
}