import React from "react";
const UpdatedComp = (OriginalComp,initValue) => {
  const NewComp = (props) => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
      setCount(count + initValue);
    };
    
    return <OriginalComp style={{backgroundColor:'red'}} count={count} handleClick={handleClick} {...props} />;
    
  };
  return NewComp;
};
export default UpdatedComp;
