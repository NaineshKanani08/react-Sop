import React, { Component } from "react";
import PropsStateFunc from "./PropsStateFunc";
class PropsStateClass extends Component {
  constructor(props) {
    super();
    this.state = {
      Id: props.id,
      count:0
    };
  }
  Inc = () => {
    this.setState((state) => ({ Id: +state.Id + 1 }));
  };

  countInc = () => {
     this.setState((state)=>({count:state.count+1}));
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>NAME: {this.props.name}</h2>
        <h3>ID:{this.state.Id}</h3>

        <p>count: {this.state.count}</p>
        <button onClick={this.Inc}>Click</button>
        <PropsStateFunc title="Using Functional Components" name="User2" id="1" countInc={this.countInc}/>
      </div>
    );
  }
}
PropsStateClass.defaultProps={
    title:"Using Class Components"
}
export default PropsStateClass;