import './App.css';
import {useState} from 'react';

function App() {
	const [cart, setCart] = useState({
		discount: .1,
		items: [
			{id: 1, title: 'Product One', quantity: 1},
			{id: 2, title: 'Product Two', quantity: 2}
		]
	});

	const addQuantity = (itemId: number) => {
		console.log(itemId);
		setCart({
			...cart,
			items: cart.items.map((item) => {
				return item.id === itemId
					? {...item, quantity: item.quantity + 1}
					: item;
			})
		});
	};

	return (
		<div className="flex flex-column gap-3">
			<ul className="list-group">
				{ cart.items.map(item => (
					<li key={item.id}
						className="list-group-item"
						onClick={() => addQuantity(item.id)}
					>
						{ item.title }
						---
						{ item.quantity }
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
