import notFoundImage from '@/assets/no-food-found.png';
import { Link } from 'react-router-dom';

interface Props {
    message?: string,
    explanation?: string
}
export default function ErrorBanner({ message, explanation }: Props) {
	return (
		<div className="not-found-container">
			<img src={notFoundImage} alt="" className="not-found-image"/>
			<h1 className="not-found-header">{message ? message : 'Oops'}</h1>
			<p>{explanation ? explanation : 'Something went wrong'}</p>
			<Link to='/'>Go back</Link>
		</div>
	);
}