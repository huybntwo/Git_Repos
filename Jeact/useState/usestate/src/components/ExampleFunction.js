import React, {useState} from 'react';

export default function ExampleFunction(){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <pre>Functional Components</pre>
            <p>You click {count} times</p>
            <button onClick={handleClick}>Click me</button>

        </div>
    )
}
