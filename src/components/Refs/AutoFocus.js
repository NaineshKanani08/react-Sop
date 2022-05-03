import React, { Component } from 'react';

export class AutoFocus extends Component {
  render() {
    return <div>
        <input type="text" autoFocus={true} />
        
    </div>;
  }
}

export default AutoFocus;

