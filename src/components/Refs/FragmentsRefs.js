// import React from 'react';

// const FragmentsRefs = () => {
//   return <>
//   <h1>
//       Fragments and Refs
//   </h1>

//   </>;
// };

// export default FragmentsRefs;

import React, { Component } from 'react';
import RefsWithFunc from './RefsWithFunc'

export default class FragmentsRefs extends Component {
    constructor() {
        super()
        this.inputRef=React.createRef()
        this.refInput=React.createRef()
    }
    focusOnInput=(value) => {

        document.getElementById('focusIn').focus();
        this.inputRef.current.value=value
        this.refInput.current.focus();
    }
  render() {
    return <>
    <h1>Fragments and Refs</h1> 
    <input type="text" ref={this.refInput} /><br />
    <input id="focusIn" type="text" ref={this.inputRef} />
    <button onClick={()=>this.focusOnInput("Calling from Child")}>FocusButton</button><br />
    <RefsWithFunc />

    </>;
  }
  
}
