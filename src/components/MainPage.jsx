import { Col, Row } from 'react-bootstrap';
import MainHeaderLinks from './MainHeaderLinks';
import Genre from './Genre';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicFetch } from '../redux/action';
const MainPage = () => {
	const staticDataRock = useSelector(
		(state) => state.songsData.staticGenres && state.songsData.staticGenres[0]
	);
	const staticDataPop = useSelector(
		(state) => state.songsData.staticGenres && state.songsData.staticGenres[1]
	);
	const staticDataHip = useSelector(
		(state) => state.songsData.staticGenres && state.songsData.staticGenres[2]
	);
	const search = useSelector(
		(state) => state.songsData.musicalData && state.songsData.musicalData[0]
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(musicFetch('Rock'));
		dispatch(musicFetch('Pop Culture'));
		dispatch(musicFetch('HipHop'));
	}, []);

	//  col-1 col-sm-2 col-lg-3 col-xl-4 imgLinks py-3
	return (
		<Col className='col-12 col-md-9 offset-md-3 mainPage'>
			<MainHeaderLinks />
			<Row>
				<Col className='col-10'>
					<Row id='searchResults' className={search ? ' d-block d-flex ' : ' d-none'}>
						<h2>Search Results</h2>

						{search &&
							search.map((el) => {
								return <Genre key={el.id} genre={el} />;
							})}
					</Row>
					<h2 className={staticDataRock ? ' d-block d-flex text-white ps-1 pt-3 ' : ' d-none'}>
						Classic Rock
					</h2>

					<Row>
						{staticDataRock &&
							staticDataRock
								.map((album) => {
									return <Genre key={album.id} genre={album} />;
								})
								.slice(0, 4)}
					</Row>
					<h2 className={staticDataPop ? ' d-block d-flex text-white ps-1 pt-3 ' : ' d-none'}>
						Pop Culture
					</h2>
					<Row>
						{staticDataPop &&
							staticDataPop
								.map((album) => {
									return <Genre key={album.id} genre={album} />;
								})
								.slice(0, 4)}
					</Row>
					<h2 className={staticDataHip ? ' d-block d-flex text-white ps-1 pt-3 ' : ' d-none'}>
						#HipHop
					</h2>
					<Row>
						{staticDataHip &&
							staticDataHip
								.map((album) => {
									return <Genre key={album.id} genre={album} />;
								})
								.slice(0, 4)}
					</Row>
				</Col>
			</Row>
		</Col>
	);
};
export default MainPage;
