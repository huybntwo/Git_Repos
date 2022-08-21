
import './App.css';
import React, {useState, useMemo, useEffect} from 'react';

  //memorization-expensive function
function expensiveFunction(number){
  console.log('start');
  const start = new Date();
  //wait for 3 seconds
  while((new Date() - start) < 3000);
  console.log('end at',(new Date() - start),'miliseconds')

  return number*number;
}

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(20);

  const number = useMemo(() => {
    return expensiveFunction(num);
  },[num])
  
  return (
    <>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count+1)}>Add</button>
    <p>Number:{number}</p>
    <p>Num:{num}</p>
    <button onClick={() => setNum(num+2)}>Increase Num</button>
    </>
  );
}

export default App;
