import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Helmet} from 'react-helmet'
import FormInput from '../Reusable/component/FormInput';
const LoginWithJwt = () => {
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState('')
  const [error,setError] = useState('')
  let token=''
  const handleSubmit = async e => {
    e.preventDefault();
    try{
        const user = { username, password };
        // send the username and password to the server
        const response = await axios.post("http://blogservice.herokuapp.com/api/login",user);
        // set the state of the user
        setUser(response.data.username)
        // store the user in localStorage
        token = response.data.token
        localStorage.setItem('user', response.data.token);
        console.log(response.data)
    }
    catch(err){
        setError(err.message)
    }

  };
//   useEffect(() =>{
//     axios.get('https://jsonplaceholder.typicode.com/posts',
//     {headers: {'Authorization':`Bearer:${token}` ,'Content-Type': 'application/json'}})
//   },[user]);
  const handleLogout = () => {
    setUser('');
    setUsername("");
    setPassword("");
    setError('')
    localStorage.clear();
  };


  return (
    <div>
        <h1>Login With Jwt</h1>
        <Helmet>
        <title>Jwt-Token</title>
        <meta name="description" content="This is a example of a JWT token" />
      </Helmet>
        <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <FormInput name={username} value={username} placeholder="enter a username" onChange={(e) => setUsername(e.target.value)}/>
      <div>
        <label htmlFor="password">password: </label>
        <FormInput type="password" name={password} value={password} placeholder="enter a password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <br/>
      <button type="submit">Login</button>
      <button onClick={handleLogout}>logout</button>
      {user &&<h1>Welcome {user}</h1>}
      {!user && error &&<h3>Sorry!You are not Authenticated</h3>}
    </form>
    </div>
  )
}

export default LoginWithJwt