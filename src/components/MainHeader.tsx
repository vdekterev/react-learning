

export default function MainHeader() {
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
					<input type="text" placeholder="Find a recipe..."/>
					<button>Search</button>
				</div>
			</div>
			<div>
				<img src="/header-img.avif" alt="" className="main_img"/>
			</div>
		</header>
	);
}