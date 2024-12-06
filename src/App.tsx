import './App.css';
import ListGroup from '@/components/List/ListGroup.tsx';

function App() {
	const cities = [
		{
			id: 1,
			name: 'New York'
		},
		{
			id: 2,
			name: 'Los Angeles'
		},
		{
			id: 3,
			name: 'Texas'
		},
		{
			id: 4,
			name: 'Alabama'
		}

	];

	const handleSelectItem = (itemId:number) => {
		console.log(itemId);
	};
	return (
		<>
			<ListGroup heading="Cities" items={cities} onSelectItem={handleSelectItem} />
		</>
	);

}

export default App;
