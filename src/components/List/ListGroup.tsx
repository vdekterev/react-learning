import './list.css';
import {useState} from 'react';

interface Cities {
	id:number,
	name:string
}

interface Props {
	heading:string,
	items:Cities[],
	onSelectItem: (item: number) => void
}

export default function ListGroup({ items, heading, onSelectItem }:Props) {
	const [cities] = useState(items);
	const [selectedItem, setSelectedItem] = useState(-1);

	return (
		<>
			<h1>{ heading}</h1>
			<div className="list-group">
				{cities.map(city => (
					<div className={
						city.id === selectedItem
							? 'list-group__item selected'
							: 'list-group__item'
					}
						 key={city.id}
						 onClick={() => {
							 setSelectedItem(city.id);
							 onSelectItem(city.id);
						 }}>
						{city.name}
					</div>
				))}
			</div>
		</>
	);
}