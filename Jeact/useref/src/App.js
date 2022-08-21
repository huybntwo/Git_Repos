import {useRef, useState, useEffect} from 'react';

//use useRef to save reference or update DOM
function App() {
  //useRef return object, which always reference to only address
  //sự khác nhau giữa countRef và obj(Object thuần) là mỗi lần re-render thì countRef sẽ luôn luôn tham chiếu đến một địa chỉ,
  // còn obj(Object thuần) sẽ tham chiếu đến một địa chỉ mới.
  const countRef = useRef(0);
  const obj = {
    current: 0
  }
  //useRef va useState kha tuong tu nhau, nhung useRef khong gay ra re-render
  const [count, setCount] = useState(0);
  /*
    {
      current: 0
    }
   */
    const handleClick = () => {
      // setCount(count + 1);
      countRef.current = countRef.current + 1;
      obj.current = obj.current + 1;
    }

    // useEffect(() => {
    //   setInterval(() => {
    //     countRef.current = countRef.current + 1;
    //     console.log(countRef.current);
    //   }, 1000);
    // },[])

    // console.log({
    //   count,
    //   countRef,
    //   obj
    // })

    //use useRef to update DOM
    const ref = useRef(null);
    console.log(ref)
    useEffect(() => {
      //ref.current is input tag
      ref.current.focus()
    },[]) 

  return (
    <>
    <button onClick={handleClick}>Click me</button>
    <br></br>
    <input type='text' ref={ref}></input>
    <button>Update DOM</button>
    </>
  );
}

export default App;
