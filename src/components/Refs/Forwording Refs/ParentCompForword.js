import React, { Component } from 'react';
import ChildButton from './ChildButton';

export class ParentCompForword extends Component {
    constructor(props) {
        super(props);
        this.buttonRef=React.createRef()
    }
    onClickFoucs=()=>{
        this.buttonRef.current.focus()
        document.getElementById('name').innerHTML=this.buttonRef.current.value
        this.buttonRef.current.value=''
    }
  render() {
    return <div>
        <b>Parent Component</b>
      <br />
      <br />
        <ChildButton ref={this.buttonRef}/><br /><br/>
        <p id="name"></p>
      <button onClick={this.onClickFoucs}>Click!</button>

    </div>;
  }
}

export default ParentCompForword;
