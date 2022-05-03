import React,{useState} from 'react'
import { addData,deleteData } from '../../actions'
import {useDispatch} from 'react-redux'
const ReduxLogin = () => {
    const [formData,setFormData] =useState({
        name: '',
        email:'',
        password: ''
    })
    const handleChange=(e)=>{
        const target = e.target
        const name=target.name
        const value = target.value
        // const value = target.value
        setFormData({
            ...formData,
            [name]:value,
          })
      } 
    const dispatch =useDispatch()

    const handleSubmit=(e)=>{
      e.preventDefault()
      setFormData({
        name: '',
        email:'',
        password: ''
      })
  }
  return (
    <div>
        <h1>Login with Redux</h1>
        <form onSubmit={handleSubmit}>
        <label> Name:</label>
        <input type="text" name='name' onChange={handleChange} placeholder="Enter Name" value={formData.name} required/> <br /><br />
        <label> Email:</label>
        <input type="email" name='email' onChange={handleChange} placeholder="Enter Email" value={formData.email} required/> <br /><br />
        <label> Password:</label>
        <input type="password" name='password' onChange={handleChange} placeholder="Enter Password" value={formData.password} required/> <br /><br />
        <button onClick={()=>dispatch(addData(formData))} type="submit">Login</button>
        </form>
    </div>
  )
}

export default React.memo(ReduxLogin)
