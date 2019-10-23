import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const PortalProvider = props => {

    const {
        children,
        container
    } = props;

    useEffect(() => {

        const detectClick = e => {
            if(e.target.tagName === 'BUTTON') {
                console.log(e.target.textContent);
            }
        };

        document.addEventListener('click', detectClick);

        return () => {
            document.removeEventListener('click', detectClick);
        }
    }, []);

    if(!container) {
        return null;
    }

    if(!children) {
        return ReactDOM.createPortal(<h2>React children haven't been passed to Portal</h2>, container);
    }

    return ReactDOM.createPortal(children, container);

};

export default PortalProvider;