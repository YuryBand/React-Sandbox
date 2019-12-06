import React from 'react';

import { useToggle } from "../../hooks/useToggle";

const PortalTwo = () => {

    const [ isSwitchedOn, switchButton ] = useToggle(false);

    return (
        <div>
            <button style={{ color: isSwitchedOn ? 'green' : 'red' }} onClick={switchButton}>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
        </div>
    )
};

export default PortalTwo;