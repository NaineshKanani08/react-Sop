import React from 'react'
import FuncLifeCycle from "./FuncLifeCycle"
import ClassLifeCycle from "./ClassLifeCycle"
const LifeCycle = () => {
    // var a=10
    // const Inc=()=>{
    //     console.log("inc",a=a+1)
    // }
    return (
        <>
            {/* <p>{a}</p>
            <button onClick={Inc}>Click</button> */}
            <ClassLifeCycle />
            <FuncLifeCycle count="0"/>
        </>
    )
}

export default LifeCycle
