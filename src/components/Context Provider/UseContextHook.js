import React from 'react';
import {UseContext} from './ContextProvider'
const UseContextHook = () => {
    const consumer= React.useContext(UseContext)
  return <div>
      <h3>Use Context Hook {consumer}</h3>
  </div>;
};

export default UseContextHook;
