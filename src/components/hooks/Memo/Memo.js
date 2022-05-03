import React,{useState} from 'react';
import ChildMemo from './ChildMemo'
const Memo = () => {
  const [count, setCount]= useState(0)
  const [name, setName]= useState('')
  const onChange=(e) => {
    setName(e.target.value)
  }
  return <>
  <h1>React Memo</h1>
  <button onClick={()=>{setCount(count + 1)}}>Count {count}</button>
  <input type="text" onChange={onChange}/>
      <ChildMemo name={name} />
  </>;
};

export default Memo;

