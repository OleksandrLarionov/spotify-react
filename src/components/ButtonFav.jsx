import { BsStarFill } from 'react-icons/bs';
import { getFavorite } from '../redux/action';
import { useDispatch } from 'react-redux';
const ButtonFav = ({ song }) => {
	const dispatch = useDispatch();
	return (
		<button
			className=' bg-transparent border-0 text-warning position-absolute top-0 end-0 fs-5'
			onClick={(e) => {
				e.preventDefault();
				dispatch(getFavorite(song));
			}}>
			<BsStarFill />
		</button>
	);
};
export default ButtonFav;
