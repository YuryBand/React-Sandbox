import React, { useEffect, useReducer, useRef } from 'react';
import { connect } from 'react-redux';

import { usePrevious } from "../../hooks/usePrevious";

export const PortalOne = props => {

    const reducer = (state, action) => {
        switch(action.type) {
        case 'INCREASE_COUNTER':
            return state + 1;
        default:
            return state;
        }
    };

    const refToHeader = useRef();

    const refToPortalContainer = useRef();

    useEffect(() => {

        const checkIfHovered = e => {
            return e.parentElement.querySelector(':hover') === e;
        };

        setTimeout(() => {
            refToPortalContainer.current.onmouseenter = () => {
                refToHeader.current.textContent = 'a';
            };
            refToPortalContainer.current.onmouseleave = () => {
                if(!checkIfHovered(refToPortalContainer.current)) {
                    refToHeader.current.textContent = 'Header Portal';
                }
            };
        }, 5000);
    }, []);


    const [ counter, dispatch ] = useReducer(reducer, 0);

    const previousCounter = usePrevious(counter);

    return (
        <div ref={refToPortalContainer}>
            <h2 ref={refToHeader}>Header Portal</h2>
            <h2> { props.tab } </h2>
            <button onClick={() => dispatch({ type: 'INCREASE_COUNTER' })}>Counter</button>
            <h2>{ `Current counter: ${counter}, previous counter: ${previousCounter}` }</h2>
        </div>

    )
};

const mapStateToProps = state => ({
   tab: state.tab
});

export default connect(mapStateToProps)(PortalOne);