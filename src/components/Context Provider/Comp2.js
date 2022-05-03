import React from 'react';
import Comp3 from './Comp3';
import UseContextHook from './UseContextHook';
// import {CompName} from './ContextProvider'
// const Comp2 = ({name}) => {
//   return <div>
//       <Comp3 name={name} />
//   </div>;
// };

// export default Comp2;

const Comp2 = () => {
    return <div>
        {/* <CompName.Consumer>
            {(val)=>{return(
                <div>
                    <h1>Hello From {val}</h1>
                    <Comp3  />
                </div>
            )}}   
        </CompName.Consumer> */}
        <Comp3  />
        <UseContextHook />
    </div>;
  };
  
  export default Comp2;