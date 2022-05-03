import React,{useState,useRef,useEffect} from 'react';

const RefsWithFunc = () => {
    const [name,setName]=useState('')
    const [controlled,setControlled]=useState('')
    const[val,setVal]=useState('')
    useEffect(()=>{
        inputRef.current.focus()
        inputRef.current.style.color ="red"
    },[])
    const inputRef=useRef(null)
    const nameSet=()=>{
        setName(inputRef.current.value);
        inputRef.current.value='';
    }
    const controlledInput=(e)=>{
        setControlled(e.target.value)
    }
    
  return (<>
  <h1>Refs in Functional Components</h1>
<h3>Name:{name}</h3>
<input type="text" ref={inputRef} />
<button onClick={nameSet}>Set Value</button><br /><br />

<input type="text" value={controlled} onChange={(e)=>{controlledInput(e)}}/>
<button onClick={()=> setVal(controlled)}>Controlled</button>
<p>{val}</p>
  </>);
};

export default RefsWithFunc;
