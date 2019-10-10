import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const MovieDetails = props => {

    const {
        detailedMovie: {
            academyAwardWins,
            budgetInMillions,
            name
        }
    } = props;

    return (
        <div>
            <h3>Name: { name } </h3>
            <h3>Academy awards: { academyAwardWins }</h3>
            <h3>Budget in millions: { budgetInMillions }</h3>
            <Link to='/'>Back to Main Page</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    detailedMovie: state.detailedMovie
});

export default connect(mapStateToProps)(MovieDetails);