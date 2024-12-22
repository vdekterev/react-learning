import {useParams} from 'react-router-dom';


export default function RecipePage() {
	const { id } = useParams();

	console.log(id);

	return (
		<>
			<h1>RecipePage</h1>
		</>
	);
}