import playerNext from '../assets/playerbuttons/next.png';
import playerPrev from '../assets/playerbuttons/prev.png';
import playerPlay from '../assets/playerbuttons/play.png';
import playerRepeat from '../assets/playerbuttons/repeat.png';
import playerShuffle from '../assets/playerbuttons/shuffle.png';
import { useSelector } from 'react-redux';
const Player = () => {
	const favSongs = useSelector((state) => state.favorites.favoriteSong);
	return (
		<>
			{' '}
			<div class='container-fluid fixed-bottom bg-container pt-1'>
				<div class='row h-100'>
					<div class='col-lg-10 offset-lg-2'>
						<img src='{favSongs.album.cover_medium}' className='w-100' alt='track' />{' '}
						<div class='row h-100 flex-column justify-content-center align-items-center'>
							<div class='col-6 col-md-4 playerControls'>
								<div class='d-flex'>
									<a href='#'>
										<img src={playerShuffle} />
									</a>
									<a href='#'>
										<img src={playerPrev} />
									</a>
									<a href='#'>
										<img src={playerPlay} />
									</a>
									<a href='#'>
										<img src={playerNext} alt='next' />
									</a>
									<a href='#'>
										<img src={playerRepeat} alt='repeat' />
									</a>
								</div>
								<div class='progress mt-3'>
									<div role='progressbar'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Player;
