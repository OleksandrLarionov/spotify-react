import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favoriteSongReducer from '../reducers/favorites';
import musicalDataReducer from '../reducers/songsData';

const allMeteoDataReducers = combineReducers({
	favorites: favoriteSongReducer,
	songsData: musicalDataReducer,
});
const store = configureStore({
	reducer: allMeteoDataReducers,
});

export default store;
