import './header.scss';

const Header = () => {

	const togglerBurger = () => {
		document.querySelector(".menu").classList.toggle("change");
		document.querySelector(".menu-bar").classList.toggle("change-bar");
		document.body.classList.toggle("overflow-hidden");
	}

	const removeBurger = () => {
		document.querySelector(".menu").classList.remove("change");
		document.querySelector(".menu-bar").classList.remove("change-bar");
		document.body.classList.remove("overflow-hidden");
	}

	return (
		<header>
			<div className="header-row">
				<div className="menu">
					<nav className="nav" id="nav">
						<ul>
							<li className="p-2">
								<a
									onClick={removeBurger}
								>Main
								</a>
							</li>
							<li className="p-2">
								<a
									onClick={removeBurger}
								>Movies
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className="burger">
					<div className="menu-bar" onClick={togglerBurger}>
						<div id="bar1" className="bar"></div>
						<div id="bar2" className="bar"></div>
						<div id="bar3" className="bar"></div>
					</div>
				</div>
				<div className="search">
					<input type="text" placeholder='Find you hero' />
				</div>
			</div>
		</header >
	)
}

export default Header;