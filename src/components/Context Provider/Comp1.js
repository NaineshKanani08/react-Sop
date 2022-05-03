import React from 'react';
import Comp2 from './Comp2';
// const Comp1 = ({name}) => {
//   return <div>
//       <Comp2 name={name}/>
//   </div>;
// };

// export default Comp1;

const Comp1 = () => {
    return <div>
        <Comp2 />
    </div>;
  };
  export default Comp1;
