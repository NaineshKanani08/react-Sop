import React,{useState  } from 'react'

const PropsStateFunc = ({title,name,id,countInc}) => {
    const [ids,setIds]=useState(id)

    return (
        <>
            <h1>{title}</h1>
            <h2>NAME: {name}</h2>
            <h3>ID: {ids}</h3>
            <button onClick={()=>{setIds(+ids+1)}}>Click</button>
            <button onClick={countInc}>Count</button>
            {/* <input type="text" autoFocus={true}/> */}
        </>
    )
}

export default PropsStateFunc
