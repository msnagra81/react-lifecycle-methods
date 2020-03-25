import React, { Component } from 'react';

class LifecycleMethods extends Component {
    constructor(props){
        super(props)
        this.state={
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.fupdate = this.fupdate.bind(this)
        console.log("This is from constructor")
    }
    componentWillMount(){
        console.log('this is from componentWillMount')
    }
    componentDidMount(){
        console.log("this is from componentDidMount method")
    }
    componentDidUpdate(){
        console.log("this is from componentDidUpdate method")
    }
    componentWillUnmount(){
        console.log("this is from componentWillUnmount method")
    }
    increment=()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }
    decrement=()=>{
        if(this.state.counter>0){
            this.setState({
                counter: this.state.counter-1
            })
        }
    }
    fupdate =()=>{
        this.forceUpdate(console.log('Force Update method has been executed'))
    }
    render() {
        console.log("this is from render method")
        return ( 
            <div>
                <h1>Current Count : {this.state.counter}</h1>
                <br/>
                <button onClick={this.increment}>Increment</button>
                <button disabled={this.state.counter==0} onClick={this.decrement}>Decrement</button>
                <br/>
                <button onClick={this.fupdate}>Force Update</button>
            </div>
        );
    }
}

export default LifecycleMethods;