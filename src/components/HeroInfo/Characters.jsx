import { useState } from "react";
import CharacterServices from "../../services/CharacterServices";

import './characters.scss';
import '../../../node_modules/slick-carousel/slick/slick.css'
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Characters = () => {
	const { characters } = CharacterServices();
	const [currTub, setCurrTub] = useState(0);

	const onNext = () => {
		if (currTub === 14) {
			setCurrTub(0);
		} else {
			setCurrTub(currTub => currTub + 1);
		}
	}

	const onPrev = () => {
		if (currTub === 0) {
			setCurrTub(14);
		} else {
			setCurrTub(currTub => currTub - 1);
		}
	}

	return (
		<section>
			<button className="prev" onClick={onPrev}></button>
			{characters.map((e, index) => {
				if (currTub === index) {
					return (
						<div className="character-container" key={index + '0'}>
							<div className="row-slide">
								<img src={e.thumbnail} alt={e.name} />
								<div className="slide-content">
									<div className="content-wrapper">
										<h2>{e.name}</h2>
										<p>{e.descriptions}</p>
										<a target="_blank" href={e.url} className="more-info">View more info &#10132;</a>
									</div>
								</div>
							</div>
						</div>
					)
				} else {
					return null;
				}
			})}
			<button className="next" onClick={onNext}></button>
		</section>
	);
}

export default Characters;