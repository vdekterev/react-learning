import {IconType} from 'react-icons';

interface Props {
	name: string,
	amount: number,
	Icon: IconType,
}

export default function RecipeNutritionalFact({name, amount, Icon}:Props) {
	return (
		<div className="recipe-fact-container">
			<Icon/>
			<h3>{amount}</h3>
			<p>{name}</p>
		</div>
	);
}