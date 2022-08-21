import React, {Component} from 'react';


export default class ExampleClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name:'huybn2',
            age:28
        };
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1})
        //meger states
        this.setState({name:'mienhv1'});
    };

    render(){
        return (
            <div>
                <pre>Functional Components</pre>
                <p>You click {this.state.count} times</p>
                <button onClick={this.handleClick}>Click me</button>
                <p>{JSON.stringify(this.state)}</p>
            </div>
        )
    }

}