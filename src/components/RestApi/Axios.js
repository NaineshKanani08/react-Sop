import React,{useState,useEffect} from 'react';
import axios from 'axios'

const Axios = () => {
    const [post,setPost] = useState([])
    const [name,setName] = useState('')
    const[email,setEmail] = useState('')
    const url='https://jsonplaceholder.typicode.com/posts'
    // const [newpost,setNewPost] = useState([])
    useEffect(() =>{
        axios.get(`${url}/1`).then((res) =>setPost(res.data));
    },[])

  //   useEffect(() =>{
  //     axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) =>setNewPost(res.data.slice(0,15)));
  // },[])

    // const mapNewData=newpost.map((item,i)=>{
    //     return(
    //   <li key={i}>{item.title}</li>  
    // )})

    const createPost=() => {
        axios.post(`${url}`,{
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
          console.log(response.data);
        setPost(response.data);
      });
    }

    function updatePost() {
        axios
          .put(`${url}/1`, {
            title: "Updated Post!",
            body: "This is an updated post."
          })
          .then((response) => {
            setPost(response.data);
          });
      }
      function deletePost() {
        axios
          .delete(`${url}/1`)
          .then(() => {
            setPost([]);
          })
      }
      

      async function submitForm(e){
        // e.preventDefault();
          const response = await axios.post(`${url}`,{name,email})
          console.log(response.data);
          setName('')
          setEmail('')
        }
        // function clearData() {
        //   setName('');
        //   setEmail('');
        // }

  return <>
  <h1>Axios</h1>
  {/* <ul><strong>Title:</strong>{mapNewData}</ul> */}

  {post.title==='Hello World!'?<h1>Create Post:</h1>:''}
  {post.title==='Updated Post!'?<h1>Update Post:</h1>:''}


  <h3>Title:{post.title}</h3>
  <h4>Description:{post.body}</h4>
  <button onClick={createPost}>Create</button>
  {post.title==='Hello World!' && <button onClick={updatePost}>UpdatePost</button>}
  <button onClick={deletePost}>DeletePost</button>
  <h1>Posting data in Api</h1>
  <strong>Name:</strong> <input type='text' value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/><br /><br />
  <strong>Email:</strong> <input type='email'value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/><br /><br />
  <button onClick={submitForm}>Submit</button>
  {/* <button onClick={clearData}>Clear</button> */}
  </>;
};

export default Axios;


