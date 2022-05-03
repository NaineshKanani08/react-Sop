import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import Button from './component/Button'
import FomInput from './component/FormInput'
import Select from './component/Select'
const Reusable = () => {
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [state,setState]= useState('')
    const [city,setCity]= useState('')

    const myState = [
      {
        id: "0",
        name: "Select State"
      },

      {
        id: "1",
        name: "Gujarat"
      },
      {
        id: "2",
        name: "UP"
      },
      {
        id: "3",
        name: "MP"
      }
    ];

    const myCity = [
      {
        id: "0",
        name: "Select City"
      },
      {
        id: "1",
        name: "Surat"
      },
      {
        id: "2",
        name: "Agra"
      },
      {
        id: "3",
        name: "Indore"
      }
    ];  

    const handleSubmit=()=>{
      if(name && email && city && state){
        console.log(name,email,state,city)
      }
    }
    const handleReset = () => {
      setName('')
      setEmail('')
      setCity('')
      setState('')
    }
  return (
    <div>
      <Helmet>
        <title>Reusable Component</title>
        <meta name="description" content="This is a reusable component" />
      </Helmet>
      <h1>Reusable Component</h1>
    <FomInput name={name} value={name}  placeholder={"Enter Name"} onChange={(e)=>setName(e.target.value)}/><br />
    <FomInput type={"email"} name={email} value={email} placeholder={"Enter Email"} onChange={(e)=>setEmail(e.target.value)} /><br />
    <Select data={myState} value={state} onChange={(e)=>setState(e.target.value)}/><br />
    <Select data={myCity} value={city} onChange={(e)=>setCity(e.target.value)}/><br />
    {/* <label>I Agree</label><FomInput value={check} type={"checkbox"} onChange={(e)=>setCheck(e.target.checked)} /><br /> */}
    <Button onClick={handleSubmit} >Submit</Button><br />
    <Button onClick={handleReset} >Reset</Button>
    </div>
  )
}

export default Reusable