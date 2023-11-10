export const GET_MUSIC_DATA = 'GET_MUSIC_DATA';
export const GET_FAVORITE_SONG = 'GET_FAVORITE_SONG';
export const GET_STATIC_DATA = 'GET_STATIC_DATA';
export const GET_PLAYER_SONG = 'GET_PLAYER_SONG';

export const getFavorite = (song) => ({
	type: GET_FAVORITE_SONG,
	payload: song,
});
export const playerAdd = (song) => ({
	type: GET_PLAYER_SONG,
	payload: song,
});
export const musicFetch = (genreMusical) => {
	return async (dispatch) => {
		try {
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + genreMusical,
				{
					method: 'GET',
					headers: {
						'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
						'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
					},
				}
			);
			if (response.ok) {
				let { data } = await response.json();

				dispatch({ type: GET_STATIC_DATA, payload: data });
			} else {
				throw new Error('Error in fetching songs');
			}
		} catch (err) {
			console.log('error', err);
		}
	};
};
export const musicSearchFetch = (search) => {
	return async (dispatch) => {
		try {
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + search,
				{
					method: 'GET',
					headers: {
						'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
						'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
					},
				}
			);
			if (response.ok) {
				let { data } = await response.json();
				dispatch({ type: GET_MUSIC_DATA, payload: data });
			} else {
				throw new Error('Error in fetching songs');
			}
		} catch (err) {
			console.log('error', err);
		}
	};
};
