import { GET_FAVORITE_SONG, GET_PLAYER_SONG } from '../action';

const initialState = {
	favoriteSong: [],
	playerSong: [],
};

const favoriteSongReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FAVORITE_SONG:
			return {
				...state,
				favoriteSong: [...state.favoriteSong, action.payload],
			};
		case GET_PLAYER_SONG:
			return {
				...state,
				playerSong: [action.payload],
			};

		default:
			return state;
	}
};

export default favoriteSongReducer;
