import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {decrementCount,incrementCount} from '../../REDUX/actions/index'
const ReduxCounter = () => {
    const count=useSelector((state)=>state.IncDecCount)
    const dispatch=useDispatch()
  return (
    <div>
        
     <button onClick={()=>dispatch(decrementCount())}>-</button>
     <input value={count} />
     <button onClick={()=>dispatch(incrementCount())}>+</button>
    </div>
  )
}

export default ReduxCounter