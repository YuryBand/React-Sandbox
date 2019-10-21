import React, { Fragment, useEffect } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchMovieDetails } from '../../actions/actionCreators';

const MainPage = props => {

    const {
        movies,
        history
    } = props;

    const handleClick = e => {
        const {
            target: {
                dataset: {
                    id
                }
            }
        } = e;

        props.actions.fetchMovieDetails(`https://the-one-api.herokuapp.com/v1/movie/${id}`)
            .finally(() => {
                history.push(String(id));
            });
    };

    useEffect(() => {
        setTimeout(() => {
            document.querySelectorAll('[data-visibility=false]').forEach(el => {
                el.setAttribute('data-visibility', 'null')
            })
        }, 5000);
    }, []);

    const getMovies = () => {
        return movies.map(m => {
            const {
                _id,
                name
            } = m;
            return (
                <li
                    style={{ cursor: 'pointer' }}
                    key={_id}
                    data-id={_id}
                    onClick={handleClick}
                >
                    { name }
                </li>
            );
        })
    };

    return (
        <Fragment>
            <h3>Movies:</h3>
            <ul>
                { getMovies() }
            </ul>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    movies: state.movies
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchMovieDetails
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

