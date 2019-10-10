
import { detailedMovieActionTypes } from "../constants/actionTypes";

const initialState = null;

export default (state = initialState, action) => {
    switch(action.type) {
    case detailedMovieActionTypes.SET_DETAILED_MOVIE:
        return action.detailedMovie;
    default:
        return state;
    }
}