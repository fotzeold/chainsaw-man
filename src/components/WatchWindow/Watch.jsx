import { useState } from 'react';
import VideoServices from '../../services/VideoServices';

import tv from '../../assets/img/video/TV.png';
import Slider from "react-slick";

import './watch.scss';
import '../../../node_modules/slick-carousel/slick/slick.css'
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Watch = () => {
	const [currencyVideo, setCurrencyVideo] = useState('https://drive.google.com/file/d/1pLYpDAC54s8ZmGxiFdptIr40LiPpECM-/preview');
	const { dataImage, dataLink } = VideoServices();

	const onSetVideo = (episod) => {
		setCurrencyVideo(episod);
	}

	const settingsSlider = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 2
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 356,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<main>
			<div className="wrapper">
				<div className="video__box">
					<img src={tv} alt="" />
					<iframe title="VideoFrame" src={currencyVideo} allowFullScreen="allowfullscreen"></iframe>
				</div>
				<Slider className='slick' {...settingsSlider}>
					{dataImage.map((e, i) => {
						return (
							<div
								key={'0000' + i}
								className={`slide ${currencyVideo === dataLink[i] ? 'active' : null}`}
								onClick={() => onSetVideo(dataLink[i])}>
								<h3>{`Серия ${i + 1}`}</h3>
								<img src={e} alt={`episod img${i + 1}`} />
							</div>
						)
					})}
				</Slider>
			</div>
		</main>
	)
}

export default Watch;