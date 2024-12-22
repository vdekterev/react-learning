import Card from '@/components/Card.tsx';
import { ICard } from '@/types.ts';


export default function CardList() {
	const sampleCards:ICard[] = [
		{
			id: '1',
			title: 'Poke Bowl',
			img: 'https://baconmockup.com/275/350',
			tags: ['Romantic Dinner', 'Something Else'],
			time: 240
		},
		{
			id: '2',
			title: 'Burger',
			img: 'https://baconmockup.com/275/350',
			tags: ['Fast Food', 'Junk Food'],
			time: 60
		}
	];

	const cards = sampleCards;

	return (
		<section className="cards">
			{cards.map(card => (
				<Card key={card.id} card={card}/>
			))}
		</section>
	);
}