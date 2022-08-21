import React,{useState, useReducer} from 'react'

//state === count
//reducer là gì, đơn giản là một hàm có 2 tham số là state, action và trả về new state sau khi thực hiện một action
const reducer = (state,action) => {
  switch (action){
    case 'TANG':
      return state + 1;
    case 'GIAM':
      return state - 1;
    case 'XOA TAT CA':
      return 0;
    default:
      return state;
  }
}


const reducer2 = (state, action) => {
  switch(action.type){
    case 'GAN GIA TRI':
      return action.data;
    default:
      return state;
  }
}

const initState = {
  loading: false,
  data: [],
  error: null
}
//state === user
const userReducer = (state, action) => {
  switch(action.type){
    case 'GET_USER_REQUEST':
      return{
        ...state,
        loading:true
      }
    case 'GET_USER_SUCCESS':
      return{
        ...state,
        loading: false,
        data: action.data
      }
    case 'GET_USER_ERROR':
      return{
        ...state,
        data: [],
        error: action.data
      }

    default:

  }
}
function App() {
//state === count
//dispatch is method
//count == 0 when initiate
  const [count, dispatch] = useReducer(reducer,0);
  const [count2, dispatch2] = useReducer(reducer2,0);
  const [user, userDispatch] =useReducer(userReducer,initState);
  /*
  ACTION: 'ADD_NEW_ITEM'

  VIEW: Nhan len 1 BUTTON: dispatch('ADD_NEW_ITEM')

  REDUCERS(state, action) => {
    switch(action){
      case 'ADD_NEW_ITEM':
        return state + 1;
      case ...
    }
  }
   */
  const getUsers= () => {
    //sau khi goi ham userDispatch, se goi ham userReducer, cu tuan tu nhu vay
    userDispatch({
      type: 'GET_USER_REQUEST'
    })
    setTimeout(() => {
      fetch(`https://reqres.in/api/users`)
      .then(res => res.json())
      .then(res => {
        userDispatch({
          type: 'GET_USER_SUCCESS',
          data: res
        })
      })
      .catch(err => {
        userDispatch({
          type: 'GET_USER_ERROR',
          data: err
        })
      })
    },2000)
    
  }
  //đầu tiên user là một object khởi tạo như trên nên sẽ hiển thị là {"loading":false,"data":[],"error":null}
  //khi ta nhấn button getUsers, nó sẽ gọi hàm userDispatch
  //in case usually use useReducer when you called API and you want to have icon loading 
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() =>  dispatch('TANG')}>Tang</button>
      <button onClick={() =>  dispatch('GIAM')}>Giam</button>
      <button onClick={() =>  dispatch('XOA TAT CA')}>Xoa Tat Ca</button>
      <p>Count2:{count2}</p>
      <button onClick={() => dispatch2({
        type:'GAN GIA TRI',
        data:10
      })}>GAN</button>
      <br/>
      <br/>
      <button onClick={getUsers}>getUsers</button>
      {user.loading?<p>loading...</p>:<p>{JSON.stringify(user)}</p>}
    </>
  );
}

export default App;
