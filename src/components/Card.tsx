import {ICard} from '@/types.ts';
import {useNavigate} from 'react-router-dom';

interface Props {
    card: ICard
}

interface Tag {
	id: number,
	name: string
}

export default function Card({ card }: Props) {

	const { name, thumbnail_url, tags, total_time_minutes } = card;

	const navigate = useNavigate();

	const navigateToRecipePage = () => {
		navigate(`/recipe/${card.id}`);
	};

	return (
		<div className="card" onClick={navigateToRecipePage}>
			<img
				src={ thumbnail_url }
				alt=""
			/>
			<div className="card-content">
				<h3>{ name }</h3>
				<div className="card-info">
					{tags?.slice(0, 2).map((tag:Tag) => (
						<div className="tag" key={tag.id}>
							<p>{tag.name}</p>
						</div>
					))}
					{ total_time_minutes &&
						total_time_minutes > 0 ?
						<p className="time-text">{total_time_minutes} min</p>
						: null
					}
				</div>
			</div>
		</div>
	);
}