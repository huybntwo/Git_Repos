import React, {useState} from 'react';

export default function ExampleFunction(){
    // const initialValues = () => {
    //     let total = 0;
    //     for(let i=0;i<100000;++i){
    //         total += i;
    //     }
    //     console.log("initialValues");
    //     return total;
    // }


    // //improve performance
    // const [count, setCount] = useState(() => {
    //     return initialValues();
    // });

    //useState dung de quan ly state cua function component
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
        name:'huybn2',
        age:28,
    });

    const handleClick = () => {
        setCount(previCount => {
            return previCount + 1;
        });
        setCount(previCount => {
            return previCount + 1;
        });
        //override states, not merge states
        setUser({name:'mienhv1'});
    }
    return (
        <div>
            <pre>Functional Components</pre>
            <p>You click {count} times</p>
            <button onClick={handleClick}>Click me</button>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}
