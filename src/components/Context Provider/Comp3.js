import React from "react";
import { CompName, UseContext } from "./ContextProvider";


// const Comp3 = ({name}) => {
//   return <div>
//       <h3>HEllo Form {name}</h3>           // without ContextProvider
//   </div>;
// };
// export default Comp3;


// const Comp3 = () => {
//     return <div>
//         <CompName.Consumer>
//             {(CompName)=>{
//                 return <h3>HEllo Form {CompName}</h3>       //single value
//             }}
//         </CompName.Consumer>

//     </div>;
//   };



// const Comp3 = () => {
//     return <div>
//         <CompName.Consumer>
//             {(CompName)=>{
//                 return <UseContext.Consumer>
//                     {(inner)=>{
//                         return <h3>HEllo Form {CompName} and {inner}</h3>      //Without UseContext multiple value
//                     }}
//                 </UseContext.Consumer>
//             }}
//         </CompName.Consumer>

//     </div>;
//   };



const Comp3 = () => {
  const outer = React.useContext(CompName);
  const inner = React.useContext(UseContext);                         //With UseContext
  return (         
    <div>
      <h3>
        HEllo Form {outer} and {inner}                       
      </h3>
    </div>
  );
};

export default Comp3;
