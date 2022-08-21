import React, {useState, useCallback} from 'react'
import ChildComponent from './components/ChildComponent'


// //way 1 to not re-render ChildComponent, not need to use react memo
// function Counter(){
//   const [count, setCount] = useState(0);
//   return(
//     <>
//        <p>Count:{count}</p>
//       <button onClick={() => {setCount(count + 1)}}>Add</button>
//     </>
//   )
// }

//way 2 use props tech
function NewComponent({children}){
  const [count, setCount] = useState(0);
  return(
    <>
      <p>outer count: {count}</p>
      <div>
        <p>Count:{count}</p>
        <button onClick={() => {setCount(count + 1)}}>Add</button>
        {children}
      </div>
    </>
  )
}

function App() {
  
  const [name, setName] = useState('');
  //nếu truyền function, object, array vào ChildComponents thì khi App component re-render sẽ kéo theo ChildComponent
  //render theo vì các biến này là kiểu tham chiếu.
  const getUsers = useCallback(() => {
    return fetch(`https://reqres.in/api/users`)
  },[])

  return (
   <>
   {/* <Counter/> */}
   <NewComponent>
      <ChildComponent name={name} getUsers={getUsers}/>
   </NewComponent>
   </>
  );
}

export default App;
