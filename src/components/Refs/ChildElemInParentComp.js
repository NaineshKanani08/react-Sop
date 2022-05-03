import React, { Component } from 'react';

export class ChildElemInParentComp extends Component {
    constructor(props){
        super(props)
        this.textInput=null
        // this.inputRef=el=>{
        //     this.textInput=el
        // }
    }
  render() {
    return <div>
        {console.log(this.props.inputRef)}
        <input type="text" ref={this.props.inputRef} />

    </div>;
  }
}

export default ChildElemInParentComp;
