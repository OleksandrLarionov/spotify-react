import { Col, Row } from 'react-bootstrap';
import ButtonFav from './ButtonFav';
import { getFavorite, playerAdd } from '../redux/action';
import { useDispatch } from 'react-redux';

const Genre = ({ genre }) => {
	const dispatch = useDispatch();
	return (
		genre && (
			<Col className=' text-center  col-12 col-sm-6   col-lg-3 px-0'>
				<div className='mx-0 position-relative p-2'>
					<img
						src={genre.album.cover_medium}
						className='w-100'
						alt='track'
						onClick={(e) => {
							e.preventDefault();
							dispatch(playerAdd(genre));
						}}
					/>{' '}
					<ButtonFav song={genre} />
				</div>
				<Row className='d-flex justify-content-center'>
					<Col className='col-10'>
						{' '}
						<p>
							Track:
							{genre.title}
							{genre.title.substring(0, 16)}
							Artist: {genre.artist.name}
						</p>
					</Col>
				</Row>
			</Col>
		)
	);
};
export default Genre;
