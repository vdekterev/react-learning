import {ICard} from '@/types.ts';

interface Props {
    card: ICard
}

export default function Card({card}: Props) {
	return (
		<div className="card">
			<img
				src={card.img}
				alt=""
			/>
			<div className="card-content">
				<h3>{card.title}</h3>
				<div className="card-info">
					{card.tags?.map(tag => (
						<div className="tag" key={tag}>
							<p>{tag}</p>
						</div>
					))}
					{card.time && <p className="time-text">{card.time} min</p>}
				</div>
			</div>
		</div>
	);
}