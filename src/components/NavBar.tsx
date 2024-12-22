import {Link} from 'react-router-dom';


export default function NavBar() {
	return (
		<nav>
			<div className="nav-container">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>
		</nav>
	);
}