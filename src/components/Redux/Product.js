import React,{useState} from 'react'
import {addData,deleteData} from '../../actions/index'
import {useSelector,useDispatch} from 'react-redux'
const Product = () => {
    const [inputData,setInputData]=useState('')
    const list= useSelector(state => state.productReducer.list)
    const dispatch =useDispatch()
  return (
    <div>
        <input type='text' onChange={(e)=>setInputData(e.target.value)} placeholder='Add your Product...' value={inputData}/>
        <button onClick={()=>dispatch(addData(inputData))}>Add</button>
        <div>
          {
            list.map((item)=>{
              return (
                <h3>Product:{item.data}</h3>
              )
            })
          }

        </div>

    </div>
  )
}

export default Product