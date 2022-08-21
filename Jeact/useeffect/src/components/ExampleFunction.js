import React, {useState, useEffect} from 'react'

export default function ExampleFunction() {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('');
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      //like componentDidMount and componentDidUpdates
        document.title = `You click ${count} times`;
        console.log('useEffect');

        return () => {
          //like componentWillUnmount(clean up)
          //will be run before componentDidMount and componentDidUpdates
          console.log('useEffect-cleanup-runbefore');
        }
    },[count])
    
    useEffect(() => {
      fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({res}))
      .catch((err) => console.log(err));
    },[action]);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    }
    useEffect(() => {
      //componentDidMount
      document.addEventListener('scroll',handleScroll)
		//clean-up
      return () => {
        //like componentWillUnmount(clean up)
        document.removeEventListener('scroll', handleScroll)
      }
    },[])

  return (
    //must be 3000px greater than the height of screen laptop, it is must be need scroll
    <div style={{height:'3000px'}}>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setAction('users')}>Set Users</button>
      <button onClick={() => setAction('comments')}>Set Comments</button>
      <p style={{position:'fixed', bottom:'20px', left:'20px'}}>{scrollPosition}</p>
    </div>
  )
}
