import { GET_MUSIC_DATA } from '../action';
import { GET_STATIC_DATA } from '../action';

const initialState = {
	musicalData: [],
	staticGenres: [],
};

const musicalDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MUSIC_DATA:
			return {
				...state,
				musicalData: [action.payload],
			};
		case GET_STATIC_DATA:
			return {
				...state,
				staticGenres: [...state.staticGenres, action.payload],
			};

		default:
			return state;
	}
};

export default musicalDataReducer;
