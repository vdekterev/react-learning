import  { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
interface Props {
	handleSearch: (search: string) => void
}
export default function MainHeader({ handleSearch }: Props ) {
	const [search, setSearch] = useState('');
	const [_, setSearchParams] = useSearchParams();

	const handleClick = () => {
		handleSearch(search);
		if (search) {
			setSearchParams({
				'search': search
			});
		}
		setSearch('');
	};
	return (
		<header className="main_header">
			<div className="text-container">
				<h1 className="header-title">
                    Look for <span>Banger</span> Food
				</h1>
				<p className="header-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid dolorum esse nihil qui, quia quod sequi sint ut vitae voluptatibus.
				</p>
				<div className="header-input-container">
					<input type="text"
						   value={search}
						   onChange={(e) => setSearch(e.target.value)}
						   placeholder="Find a recipe..."
						   onKeyDown={(e) => e.code === 'Enter' && handleClick()}
					/>
					<button onClick={handleClick}>Search</button>
				</div>
			</div>
			<div>
				<img src="/header-img.avif" alt="" className="main_img"/>
			</div>
		</header>
	);
}