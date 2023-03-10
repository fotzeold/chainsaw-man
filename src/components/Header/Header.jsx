import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

import SearchField from "../SearchField/SearchField";
import CharacterServices from "../../services/CharacterServices";

import './header.scss';

const Header = () => {
	const [valueInp, setValueInp] = useState(null);
	const [searchedChar, setSearchedChar] = useState([]);
	const [actSearchField, setActSearchField] = useState(false);
	const { characters } = CharacterServices();

	useEffect(() => onSearched(), [valueInp])

	const onSearched = () => {
		if (valueInp) {
			document.querySelector(".searched-content").classList.add("searched-content-active");
			setActSearchField(true);
			const lower = valueInp.toLowerCase();
			setSearchedChar(characters.filter(e => {
				const lowerElement = e.name.toLowerCase();
				if (lowerElement.includes(lower)) return e;
			}));
		} else if (valueInp === '') {
			onBlured();
		} else {
			setSearchedChar([]);
		}
	}

	const onBlured = () => {
		setTimeout(() => {
			setValueInp(null)
			document.querySelector(".searched-content").classList.remove("searched-content-active");
			setActSearchField(false);
			document.querySelector(".search-hero-input").value = '';
		}, 200)
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
									<NavLink
										to="/"
										className="links"
										style={({ isActive }) => ({ color: isActive ? "#000" : "rgb(62, 62, 62)" })}
										onClick={removeBurger}
									>Characters
									</NavLink>
								</li>
								<li className="p-2">
									<NavLink
										to="/movies"
										className="links"
										style={({ isActive }) => ({ color: isActive ? "#000" : "rgb(62, 62, 62)" })}
										onClick={removeBurger}
									>Movies
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<div className="search">
						<input
							type="text"
							className="search-hero-input"
							placeholder='Find you hero'
							onChange={(e) => setValueInp(e.target.value)}
							onBlur={() => onBlured()}
						/>
					</div>

				</div>
			</header >
			<SearchField searchedChar={searchedChar} actSearchField={actSearchField} />
			<Outlet />
		</>
	)
}

export default Header;