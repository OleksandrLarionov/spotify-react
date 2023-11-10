import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoriteSongReducer from '../reducers/favorites';
import musicalDataReducer from '../reducers/songsData';

const allDataReducers = combineReducers({
	favorites: favoriteSongReducer,
	songsData: musicalDataReducer,
});
const store = configureStore({
	reducer: allDataReducers,
});

export default store;
