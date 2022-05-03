import React,{useState,useCallback} from 'react';
import ChildUseCallback from './ChildUseCallback'
const ParentUseCallback = () => {
    const [count, setCount]= useState(0)
    const [num, setNum]= useState(0)


    // const numInc = () => {
    //     return setNum(num+1)           //without UseCallBack
    // }

    const numInc = useCallback(() => {
        console.log("useCallback call..")
        return setNum(num+1)
      }, [num]);
  return <>
  <h1>UseCallBack</h1>
    <button onClick={()=>{setCount(count + 1)}}>count {count}</button>
    <h3>Number:{num}</h3>
    <ChildUseCallback numberInc={numInc}/>
    

  </>;
};

export default ParentUseCallback;
