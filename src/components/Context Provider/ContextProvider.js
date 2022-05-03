// import React from 'react';
// import Comp1 from './Comp1';
// const ContextProvider = () => {
//   return <div>
//       <Comp1 name={'Comp3'}/>
//   </div>;
// };

// export default ContextProvider;

import React from "react";
import Comp1 from "./Comp1";
const CompName = React.createContext("Default value");
const UseContext = React.createContext("Default value");
const ContextProvider = () => {
  return (
    <div>
      <h1>Context Provider</h1>
      <CompName.Provider value={"Comp3"}>
        <UseContext.Provider value={'USe Context'}>
          <Comp1 />
        </UseContext.Provider>
      </CompName.Provider>
    </div>
  );
};

export default ContextProvider;
export { CompName,UseContext };
