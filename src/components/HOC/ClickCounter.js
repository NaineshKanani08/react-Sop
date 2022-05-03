import React from 'react';
import UpdatedComp from './withHoc'
const ClickCounter = ({count,handleClick,name}) => {
    // const [count, setCount]= React.useState(0)
    // const handleClick =()=>{
    //     setCount(count+1)
    // }
  return <div>
      <h3>{name}</h3>
      <button onClick={handleClick}>
          Click {count} times
      </button>
  </div>;
};

export default UpdatedComp(ClickCounter,5);
