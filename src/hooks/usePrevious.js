import { useEffect, useRef } from 'react';

export const usePrevious = value => {
    const previousValue = useRef();
    useEffect(() => {
        previousValue.current = value;
    });
    return previousValue.current;
};