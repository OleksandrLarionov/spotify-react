import { useState } from 'react';
import { Col, Form, FormGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { BsHouseDoorFill, BsBookFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { musicSearchFetch } from '../redux/action';
const SideBarList = () => {
	const [songSearch, setSongSearch] = useState('');
	const dispatch = useDispatch();
	const hadleSubmit = (e) => {
		e.preventDefault();
		dispatch(musicSearchFetch(songSearch));
		setSongSearch('');
	};
	return (
		<ListGroup>
			<ListGroupItem className='border border-0 bg-transparent'>
				<a className='nav-item nav-link d-flex align-items-center' href='#'>
					<BsHouseDoorFill className='fs-3' />
					&nbsp; Home
				</a>
			</ListGroupItem>
			<ListGroupItem className='border border-0 bg-transparent'>
				<a className='nav-item nav-link d-flex align-items-center' href='#'>
					<BsBookFill className='fs-3' />
					&nbsp; Your Library
				</a>
			</ListGroupItem>
			<ListGroupItem className='border border-0 bg-transparent'>
				<Form className='input-group mt-3' onSubmit={hadleSubmit}>
					<Row>
						<Col md={10} className='p-0'>
							<FormGroup>
								<Form.Control
									value={songSearch}
									type='text'
									id='searchField'
									placeholder='Search'
									onChange={(e) => {
										setSongSearch(e.target.value);
									}}
								/>{' '}
							</FormGroup>
						</Col>
						<Col md={2} className='p-0'>
							{' '}
							<button className='btn btn-outline-secondary btn-sm h-100' type='submit'>
								GO
							</button>
						</Col>
					</Row>
				</Form>
			</ListGroupItem>
		</ListGroup>
	);
};
export default SideBarList;
