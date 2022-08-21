import React, {useState, useCallback} from 'react'
import ChildComponent from './components/ChildComponent'

function App() {
  const [users, setUsers] = useState([]);
  //The useCallback and useMemo Hooks are similar.
  // The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

  //in JS, assign variable like object, array, function, this is pass by reference, not pass by value
  //so after rerender component, variable like object, array, function will be differ from previous variable
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`)
  },[])

  const handleClick = () => {
    getData('users')
      //dữ liệu lấy về ở trang web này là file api
  //cần convert nó thành JSON để sử dụng
    .then((res) => res.json())
    .then((res) => {
      const users = res.data;
      setUsers(users)
    });
  }
  return (
    <>
    <p>Data:</p>
    <button onClick={handleClick}>Get User Data</button>
    <p>{JSON.stringify(users)}</p>
    <ChildComponent getData={getData}/>
    </>
  );
}

export default App;
