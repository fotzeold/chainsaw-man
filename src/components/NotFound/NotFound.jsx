import './404.scss';
import { Link } from 'react-router-dom';
import page404 from '../../assets/img/404/404.png'

const NotFound = () => {
	return (
		<div className="not-found">
			<img src={page404} alt="page404" />
			<Link className='back' to="/">Go to Home</Link>
		</div>
	)
}

export default NotFound;

