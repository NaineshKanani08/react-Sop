import React,{useState} from 'react'

const TernaryCon = () => {
    const [count, setCount]= useState(0);
    return (
        <>
        <h1>TernaryCondition</h1>
            {count<=0 ?<h3>please click the button</h3>:<h3>your count is {count}</h3>}
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    )
}

export default TernaryCon