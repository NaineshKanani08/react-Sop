import React, { Component } from "react"; 

class ClassLifeCycle extends Component {
  constructor() {
    super();
    this.state = {name:'Hello',
  count:0}
    console.log("Initialization")
  }
  componentWillMount()
    {
        console.log("componentWillMount()");
    }
    componentDidMount()
    {
      
        console.log("componentDidMount()");
        setTimeout(() => {
          this.setState({ name: 'World' })
        },2000)  
          
    }
    changeName=()=>
    {
        this.setState(()=>({ name : "React" }));
    }
    shouldComponentUpdate()
    {
        
        console.log("shouldComponentUpdate()");
        return true;
    }
 
    componentWillUpdate()
    {
        console.log("componentWillUpdate()");
    }
 
    componentDidUpdate()
    {
      document.title = `clicked ${this.state.count}`;
        console.log("componentDidUpdate()");
    }
    componentWillUnmount(){
      alert("component is Unmount")
      console.log("componentWillUnmount()")
    }
  render() {
    console.log("Mounting")
    return (
     <>
       <h1>Class Components Life Cycle</h1>
       <h2>{this.state.name}</h2>
       <button onClick={this.changeName}>changeName</button>
       <button onClick={() => this.setState({ count: this.state.count + 1 })}>Count</button>
     </>
    );
  }
}

export default ClassLifeCycle;