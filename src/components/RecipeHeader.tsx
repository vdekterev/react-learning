import RecipeNutritionalFact from '@/components/RecipeNutritionalFact.tsx';
import {INutrition} from '@/types.ts';

import { AiOutlineFire } from 'react-icons/ai';
import {CiWheat} from 'react-icons/ci';
import {BiCheese, BiCake} from 'react-icons/bi';
import {IoFishOutline} from 'react-icons/io5';
import { LuLeaf } from 'react-icons/lu';

interface Props {
	title: string,
    nutritionalFacts: INutrition
}

export default function RecipeHeader({ title, nutritionalFacts }: Props) {
	const nutritionArray = [
		{
			name: 'calories',
			amount: nutritionalFacts.calories,
			Icon: AiOutlineFire
		},
		{
			name: 'carbohydrates',
			amount: nutritionalFacts.carbohydrates,
			Icon: CiWheat
		},
		{
			name: 'fats',
			amount: nutritionalFacts.fat,
			Icon: BiCheese
			
		},
		{
			name: 'fiber',
			amount: nutritionalFacts.fiber,
			Icon: LuLeaf
		},
		{
			name: 'protein',
			amount: nutritionalFacts.protein,
			Icon: IoFishOutline
		},
		{
			name: 'sugar',
			amount: nutritionalFacts.sugar,
			Icon: BiCake
		}
	];

	return (
		<div className="recipe-header">
			<h1>{title}</h1>
			<div className="recipe-facts-container">
				{nutritionArray.map(n => (
					<RecipeNutritionalFact key={n.name} name={n.name} amount={n.amount} Icon={n.Icon} />
				))}
			</div>
		</div>
	);
}