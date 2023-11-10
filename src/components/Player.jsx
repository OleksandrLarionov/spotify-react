import playerNext from '../assets/playerbuttons/next.png';
import playerPrev from '../assets/playerbuttons/prev.png';
import playerPlay from '../assets/playerbuttons/play.png';
import playerRepeat from '../assets/playerbuttons/repeat.png';
import playerShuffle from '../assets/playerbuttons/shuffle.png';
import { useSelector } from 'react-redux';
const Player = () => {
	const playSongs = useSelector(
		(state) => state.favorites.playerSong && state.favorites.playerSong[0]
	);
	return (
		playSongs && (
			<div className='container-fluid fixed-bottom bg-container pt-1'>
				<div className='row h-100'>
					<div className='col-lg-10 offset-lg-2'>
						<div className='row h-100 flex-column justify-content-center align-items-center'>
							<div className='d-flex justify-content-center'>
								<img src={playSongs.album.cover_small} height={50} width={50} alt='track' />
							</div>
							<div className='col-6 col-md-4 playerControls'>
								<div className='d-flex'>
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
								<div className='progress mt-3'>
									<div role='progressbar'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
};
export default Player;
