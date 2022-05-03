import React, { Component } from "react";

export class ChildButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <b>Child Component</b><br /><br />
        Name: <input type="text" ref={this.props.buttonRefComp}/>
      </div>
    );
  }
}

export default React.forwardRef((props,ref)=>{
    return <ChildButton buttonRefComp={ref} {...props} />;
});

