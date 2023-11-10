import { Col, ListGroup, Nav, Row } from 'react-bootstrap';

import logo from '../assets/logo/logo.png';
import SideBarList from './SideBarLIst';
import FavoriteList from './FavoriteList';
const SideBar = () => {
	return (
		<Col className='col col-2'>
			<Nav className='navbar navbar-expand-md fixed-left justify-content-between' id='sidebar'>
				<div className='container flex-column align-items-start'>
					<a className='navbar-brand' href='#'>
						<img src={logo} alt='Spotify Logo' width='131' height='40' />
					</a>
					<div className='navbar-nav'>
						<SideBarList />
					</div>
					<Row>
						<Col className='col-12'>
							<ListGroup className=''>
								<FavoriteList />
							</ListGroup>
						</Col>
					</Row>
				</div>
				<Row className='nav-btn'>
					<Col className='justify-content-center d-flex'>
						{' '}
						<button className='signup-btn' type='button'>
							Sign Up
						</button>
					</Col>
					<Col className='justify-content-center d-flex'>
						{' '}
						<button className=' login-btn' type='button'>
							Login
						</button>
					</Col>
					<Col className='text-center' id='links'>
						{' '}
						<a href='#'>Cookie Policy</a> |<a href='#'> Privacy</a>
					</Col>
				</Row>
			</Nav>
		</Col>
	);
};

export default SideBar;
