import React, { useState } from 'react';

const PortalThree = () => {

    const [ counter, setCounter ] = useState(0);
    const [ interval, toggleInterval ] = useState(null);

    const handleClick = () => {
        if(!interval) {
            toggleInterval(setInterval(() => {
                setCounter(counter => ++counter);
            }, 1000))
        } else {
            toggleInterval(clearInterval(interval));
        }
    };

    return (
        <div>
            <p>{ `Counter: ${counter}` }</p>
            <button onClick={handleClick}>{ interval ? 'Stop' : 'Start' }</button>
        </div>
    );
};

export default PortalThree;