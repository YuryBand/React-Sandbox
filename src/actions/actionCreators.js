import api from '../services/api';
import { detailedMovieActionTypes, moviesActionTypes } from "../constants/actionTypes";


export const setMovies = movies => ({
    type: moviesActionTypes.SET_MOVIES,
    movies
});

export const setDetailedMovie = detailedMovie => ({
    type: detailedMovieActionTypes.SET_DETAILED_MOVIE,
    detailedMovie
});

// Async ActionCreators

export const fetchMoviesList = url => async dispatch => {
    const res = await api.getData(url);
    if(res) {
        dispatch(setMovies(res.docs));
    }
};

export const fetchMovieDetails = url => async dispatch => {
    const res = await api.getData(url);
    if(res) {
        dispatch(setDetailedMovie(res));
        return Promise.resolve(res);
    }
};