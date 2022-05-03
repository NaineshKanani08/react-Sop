import React,{useState,useEffect} from 'react'

const Timer = () => {
    const [timer,setTimer]= useState(new Date())

    useEffect(() =>{
        const time=setInterval(()=>{
            setTimer(new Date())
            console.log("time Updating")
        },1000)

        return()=>{
            clearInterval(time)
        }
    },[])
    return (
        <>
          <h2>{timer.toLocaleTimeString()}</h2>  
        </>
    )
}

export default Timer
