import React from 'react';
import ClickCounter from './ClickCounter';
import HoverClick from './HoverClick';
import InputCount from './InputCount'
const Hoc = () => {
  return <div>
      <h1>Higher Order Component</h1>
      <HoverClick name="HoverCounter"/>
      <ClickCounter name="clickCounter" /><br />
      <InputCount name="InputCount" />
  </div>;
};

export default Hoc;
