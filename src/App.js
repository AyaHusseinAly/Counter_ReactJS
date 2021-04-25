import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state={
            counter:0,
            data:{
                id:"1",
                jobTitleName:"Developer",
                firstName:"Ahmed",
                lastName:"Ali",
                fullName:"Ahmed Ali",
                employeeCode:"E1",
                region:"CA",
                phoneNumber:"408-1234567",
                emailAddress:"ahmed.ali@gmail.com"
            }
        }
    }

    changeData=(d)=>{
        this.setState({counter:d})
    }
    render() {
        let style={
            color:"Cyan"
        }
        return (
            <div className="App" >
                <div className="App-header">
                    <Counter counter={this.state.counter} changeFn={this.changeData} > </Counter>
                    <h4 style={style}>{this.state.counter}</h4>
                    <p> {JSON.stringify(this.state.data)}</p>  

                </div>
            </div>
        );
    }
}



class Counter extends Component {
    constructor(props){
        super();
        this.state={
            counter:props.counter
    }
}

    changeCounter = (op)=>{
        if(op=="+"){
            this.props.changeFn(this.state.counter+1);
            this.setState({counter:this.state.counter+1});
            
        }
        else if(op=="-"){
            this.props.changeFn(this.state.counter-1);
            this.setState({counter:this.state.counter-1});
            
        }


        

    }

    render() {
        return ( 
        <div>                 
            <h1>{this.state.counter}</h1>    
            <button onClick={()=>{this.changeCounter("+")}}>Increase</button>
            <button onClick={()=>{this.changeCounter("-")}}>Decrease</button>
        </div>);
        }
    }
    export default App;