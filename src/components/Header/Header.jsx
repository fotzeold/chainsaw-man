import { useState, useEffect } from "react";
import CharacterServices from "../../services/CharacterServices";
import './header.scss';

const Header = () => {
	const [valueInp, setValueInp] = useState(null);
	const [searchedChar, setSearchedChar] = useState([]);

	const { characters } = CharacterServices();

	useEffect(() => onSearched(), [searchedChar])

	const onSearched = () => {
		setSearchedChar(characters.filter(e => e.name.includes(valueInp)));
	}

	const togglerBurger = () => {
		document.querySelector(".menu").classList.toggle("active-menu");
		document.querySelector(".menu-bar").classList.toggle("change-bar");
		document.body.classList.toggle("overflow-hidden");
	}

	const removeBurger = () => {
		document.querySelector(".menu").classList.remove("active-menu");
		document.querySelector(".menu-bar").classList.remove("change-bar");
		document.body.classList.remove("overflow-hidden");
	}

	return (
		<>
			<header>
				<div className="header-row">
					<div className="burger">
						<div className="menu-bar" onClick={togglerBurger}>
							<div id="bar1" className="bar avtive"></div>
							<div id="bar2" className="bar avtive"></div>
							<div id="bar3" className="bar avtive"></div>
						</div>
					</div>
					<div className="menu">
						<nav className="nav" id="nav">
							<ul>
								<li className="p-2">
									<a
										onClick={removeBurger}
									>Characters
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
					<div className="search">
						<input
							type="text"
							placeholder='Find you hero'
							onChange={(e) => setValueInp(e.target.value)}
						/>
					</div>
				</div>
			</header >
			<div className="searched-content">
				{searchedChar.length > 0 ?
					searchedChar.map(e => {
						return (
							<div className="hero">
								<h4>{e.name}</h4>
							</div>
						)
					})
					: null}
			</div>
		</>
	)
}

export default Header;