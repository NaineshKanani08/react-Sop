import React from 'react';
import UpdatedComp from './withHoc'
const HoverClick = ({count,handleClick,name,style}) => {
    // const [count, setCount] =React.useState(0)
    // const handleClick = () => {
    //     setCount(count+1)
    // }
  return <div style={style}>
      <h3>{name}</h3>
      <h2 onMouseOver={handleClick}>
        You Fired {count} times
      </h2>
  </div>;
};

export default UpdatedComp(HoverClick,1);


