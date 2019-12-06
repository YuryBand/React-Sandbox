import { useState, useCallback } from'react';

export const useToggle = initialValue => {

    const [ value, toggleValue ] = useState(initialValue);

    const toggler = useCallback(() => toggleValue(value => !value));

    return [ value, toggler ];

};



