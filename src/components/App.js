import React, { Fragment, useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import MainPage from './pages/MainPage';
import MovieDetails from './pages/MovieDetails';

import PortalProvider from './portals/PortalProvider';
import PortalOne from './portals/PortalOne';
import PortalTwo from './portals/PortalTwo';
import PortalThree from './portals/PortalThree';

import { setMovies, fetchMoviesList } from '../actions/actionCreators';

const history = createBrowserHistory();

const App = props => {

    const {
        detailedMovie
    } = props;

    const header = document.getElementById('portal_header');
    const footer = document.getElementById('portal_footer');

    useEffect(() => {
        props.actions.fetchMoviesList('https://the-one-api.herokuapp.com/v1/movie');
    }, [ ]);

    return (
        <Fragment>
            <PortalProvider container={header}>
                <PortalOne/>
                <PortalThree/>
            </PortalProvider>
            <PortalProvider container={footer}>
                <h2>Footer Portal</h2>
                <PortalTwo/>
            </PortalProvider>
            <div data-visibility="true">Hello1</div>
            <div data-visibility="false">Hello2</div>
            <div data-visibility="true">Hello3</div>
            <h1>Router is working...</h1>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/:id'>
                        { detailedMovie ? <MovieDetails/> : <Redirect to='/' /> }
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    detailedMovie: state.detailedMovie,
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchMoviesList,
        setMovies
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);