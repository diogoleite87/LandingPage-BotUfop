import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface IProps {
    key: string,
    initialState: any
}

// type Response<T> = [
//     T,
//     Dispatch<SetStateAction<T>>,
// ];

function usePersistedState(key: string, initialState: any) {

    // const { key, initialState } = props

    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;