import React,{useState,useEffect} from 'react';
import axios from 'axios'

const RestApi = () => {
    const [email, setEmail] = useState([])
   
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/comments').then((result) =>result.json()).then((data) =>setEmail(data.slice(0,15)))
    },[])

    const mapData=email.map((item,i)=>{
        return(
      <li key={i}>{item.email}</li>  
    )})

  return <>
      <h1>Rest API with Fetch</h1>   
    <ul><strong>Email:</strong>{mapData}</ul>
  </>;
};

export default RestApi;
