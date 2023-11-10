import { Col, Container, Row } from 'react-bootstrap';
import ButtonFav from './ButtonFav';

const Genre = ({ genre }) => {
	return (
		genre && (
			<Col className=' text-center  col-12 col-sm-6   col-lg-3 px-0'>
				<div fluid className='mx-0 position-relative p-2'>
					<img src={genre.album.cover_medium} className='w-100' alt='track' />{' '}
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
