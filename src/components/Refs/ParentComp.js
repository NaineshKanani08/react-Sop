import React, { Component } from 'react';
import ChildElemInParentComp from './ChildElemInParentComp'
export class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.parentRef=null
    }
    componentDidMount(){
        console.log(this.parentRef)
        this.parentRef.value="From Parent Component"
    }
  render() {
    return <div>
        <ChildElemInParentComp inputRef={el=>this.parentRef=el}/>
    </div>;
  }
}

export default ParentComp;
