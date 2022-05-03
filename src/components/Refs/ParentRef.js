import React, { Component } from 'react';
import FragmentsRefs from './FragmentsRefs';
import CallbackRef from './CallbackRef'
export default class ParentRef extends Component {
    constructor(){
        super()
        this.parentRef=React.createRef()
    }
    componentDidMount(){
      console.log(this.parentRef)
        this.parentRef.current.focusOnInput("Calling from Parents")
    }
  render() {
    return <>
        <FragmentsRefs ref={this.parentRef} />
        
        <CallbackRef />
    </>;
  }
}
