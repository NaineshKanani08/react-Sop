import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {decrement,increment,incrementByAmount} from '../../components/counterSlice'
const ReduxToolkitCounter = () => {
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
  return (
    <div>
        
     <button onClick={()=>dispatch(decrement())}>-</button>
     <input value={count} />
     <button onClick={()=>dispatch(increment())}>+</button>
     <button onClick={()=>dispatch(incrementByAmount(5))}>add</button>

    </div>
  )
}

export default ReduxToolkitCounter