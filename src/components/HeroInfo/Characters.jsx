import Slider from "react-slick";

import './characters.scss';
import '../../../node_modules/slick-carousel/slick/slick.css'
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Characters = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
		beforeChange: function (currentSlide, nextSlide) {
			console.log("before change", currentSlide, nextSlide);
		},
		afterChange: function (currentSlide) {
			console.log("after change", currentSlide);
		}
	};
	return (
		<div>
			<Slider className="vertical-slick" {...settings}>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_1_stand.png" alt="" />
				</div>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_5_stand.png" alt="" />
				</div>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_2_stand.png" alt="" />
				</div>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_4_stand.png" alt="" />
				</div>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_3_stand.png" alt="" />
				</div>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_6_stand.png" alt="" />
				</div>
				<div className="character-container">
					<img src="https://chainsawman.dog/assets/img/chara/chara_7_stand.png" alt="" />
				</div>

			</Slider>
		</div>
	);
}

export default Characters;