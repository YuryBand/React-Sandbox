
import { moviesActionTypes } from "../constants/actionTypes";

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
    case moviesActionTypes.SET_MOVIES:
        return action.movies;
    default:
        return state;
    }
}