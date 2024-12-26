import Card from '@/components/Card.tsx';
import { ICard } from '@/types.ts';

interface Props {
	cards: ICard[]
}
export default function CardList({ cards }: Props) {

	return (
		<section className="cards">
			{cards.map(card => (
				<Card key={card.id} card={card}/>
			))}
		</section>
	);
}