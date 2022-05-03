import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {userAction} from '../../REDUX/actions/userAction'

const UserDetails = () => {
  const [mapUser,setMapUser] =useState([])
    const dispatch =useDispatch()
    const userList = useSelector(state=>state.UserReducer)
    const {loading,users,error}=userList
    console.log(userList)
    useEffect(() =>{
     dispatch(userAction()) 
    },[dispatch])

    useEffect(() =>{
      if(users.length>0){
        setMapUser(users.map((val,index)=>{return(
          <div key={index}>
          <h2>id:{val.id}</h2>                     
          <h3>Name:{val.name}</h3>
          <h3>Email:{val.email}</h3>
          </div>
        )}))
      }
    },[users])
    
  return (
    <div>
        <h1>UserDetails</h1>
        {loading?<h2>Loading...</h2>:error?<h2>{error}</h2>:mapUser}
    </div>
  )
}

export default UserDetails