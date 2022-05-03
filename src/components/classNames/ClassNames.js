import React,{useState} from 'react'
import classnames from 'classnames'
import './classNames.css'
const ClassNames = () => {
    const[toggle,setToggle] = useState(false)
  return (
    <><h1>ClassNames</h1>
    <p className={classnames('normal',{changeColor:toggle})}>lorem ipsum dolor sit amet, consectetur adip</p>
    {/* <p className={toggle?'normal changeColor':'normal'}>lorem ipsum dolor sit amet, consectetur adip</p> */}

    <button onClick={()=>{setToggle(!toggle)}}>changeColor</button>
    </>
  )
}

export default ClassNames