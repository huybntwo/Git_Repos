import { useState } from "react"

//reducer is fetchReducer function
export const useReducer = (reducer, initValue ) => {
    //state is kho chung
    const [state, setState] = useState(initValue);
    //
    console.log("huybn2");
    //
    function dispatch(action) {
        //reducer is fetchReducer function
        const newState = reducer(state, action);
        setState(newState);
    }
    return[state, dispatch];
}