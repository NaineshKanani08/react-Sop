import React,{useState,useEffect} from 'react'
import Timer from './Timer'

const FuncLifeCycle = (props) => {
    const [user,setUser]=useState([])
    const [counts,setCounts]=useState(+props.count)
    const [display,setDisplay]=useState(true)

    useEffect(() =>{
        console.log("In function...only once")
        let resData=[{
            id:1,name:'abc'},
        {id:2,name:'xyz'
        }]
        setUser(resData)
    },[])

    useEffect(() =>{
        console.log("In function...Updating")
    },[counts])
    const countFun=()=>{
        setCounts(counts+1)
    }
    
    return (
        <>
        <h1>Functional Component LifeCycle</h1>
        {/* <h2>{nameFun}</h2> */}
        {display?<Timer />:null}
        <h3>Count:{counts}</h3>
        {user.map((item,index)=>{
            return <p key={index}>Name:{item.name}</p>
        })} 
        <button onClick={countFun}>Click</button>

        <button onClick={()=>{setDisplay(!display)}}>Display</button>
        </>
    )
}

export default FuncLifeCycle
