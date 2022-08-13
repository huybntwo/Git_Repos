import React, {Component} from "react";


export default class ExampleClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        };
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1});
    };

    render(){
        return (
            <div>
                <pre>Functional Components</pre>
                <p>You click {this.state.count} times</p>
                <button onClick={this.handleClick}>Click me</button>
    
            </div>
        )
    }

}