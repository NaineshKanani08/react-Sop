import React from 'react';

export class PureComp extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    changeCount=()=>{
        this.setState({count:this.state.count})
    }
  render() {
      console.log("Render..")
    return <>
    <h1>Pure Components</h1>
    <p>Count:{this.state.count}</p>

    <button onClick={this.changeCount}>Change</button>
    </>;
  }
}

export default PureComp;
