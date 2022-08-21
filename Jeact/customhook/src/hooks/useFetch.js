import { useEffect } from "react";
import { useReducer } from "./useReducer";


function fetchReducer(state, action){
    switch(action.type){
      case 'fetchAPI/request':
        return {...state, isLoading: action.isLoading};
      case 'fetchAPI/success':
      case 'fetchAPI/error':
        return{...state,isLoading: action.isLoading, error: action.error, data: action.data};
      default:
        return state;
    }
  }

export const useFetch = (url) => {

    const [state, dispatch] = useReducer(fetchReducer, {
        data: [],
        isLoading: false,
        error: null
      })
    // setIsLoading(true);

    useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/request',
                isLoading: true,
              })
              try{
                const res = await fetch(url);
                const {data} = await res.json();
                //Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
                // setUsers(data);
                // SetError(null);
                // setIsLoading(false);
                dispatch({
                  type: 'fetchAPI/success',
                  isLoading: false,
                  error: null,
                  data,
                })
              }
              catch(err){
                // setIsLoading(false);
                // SetError(err);
                // setUsers([]);
                dispatch({
                  type: 'fetchAPI/error',
                  isLoading: false,
                  error: err,
                  data: []
                })
              }
        })()
    },[url])
  

    //   return {data: state.data, isLoading: DataTransfer.isLoading, error: state.error};// same as
    return {...state};
}