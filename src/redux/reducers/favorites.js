import { GET_FAVORITE_SONG } from '../action';

const initialState = {
	favoriteSong: [],
};

const favoriteSongReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FAVORITE_SONG:
			return {
				...state,
				favoriteSong: [...state.favoriteSong, action.payload],
			};

		default:
			return state;
	}
};

export default favoriteSongReducer;
