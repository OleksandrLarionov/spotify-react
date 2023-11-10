import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const FavoriteList = () => {
	const favSongs = useSelector((state) => state.favorites.favoriteSong);
	return (
		favSongs &&
		favSongs.map((fav, i) => {
			return (
				<ListGroup.Item key={i} className='bg-transparent text-white border-0 '>
					{fav.album.title} | {fav.artist.name}
				</ListGroup.Item>
			);
		})
	);
};

export default FavoriteList;
