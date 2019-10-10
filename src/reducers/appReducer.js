import { combineReducers } from "redux";

import detailedMovie from './detailedMovieReducer';
import movies from './moviesReducer';
import tab from './tabReducer';

export default combineReducers({
    detailedMovie,
    movies,
    tab
});