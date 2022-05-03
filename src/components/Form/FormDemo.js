import React,{useState} from 'react';

const FormDemo = () => {
    // const stateCity={states: [
    //     {
    //       name: "gujarat",cities: ["surat", "rajkot"]
    //     },
    //     { name: "Up", cities: ["Agra","kanpur"] },]

    // }

  const [values, setValues] = useState({
    name: "",email: "",gender:'',age:'',state:'',hobby:'',city:''
  });
  const[success,setSuccess] = useState(false)
  const[error,setError]=useState({})
//   const [selectedHobby, setSelectedHobby] = useState({reading:false,travelling:false,sports:false});
//   const hobby=values.reading||values.travelling||values.sports
//   const hobbyValid=values.reading===''||values.travelling===''||values.sports==='' 


  function ValidationError(value){
      const formErr={}
      if(value.name===''){
          formErr.name='Name is Required'
      }
      else if(/^[0-9]/.test(value.name
      )){
        formErr.name='Please enter a valid name'
      }
      if(value.email===''){
        formErr.email='Email is Required'
      }
      else if(!/[A-Za-z._0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/.test(value.email)){
          formErr.email='Please enter a valid Email'
      }
      if(value.gender===''){
        formErr.gender='Please select a Gender'
      }
      if(value.hobby===''){
        formErr.hobby='Please select a Hobby'
      }
      if(value.age===''){
        formErr.age='Please enter a Age'
      }
      if(!value.state){
          formErr.state='Please select a State'
      }
      if(!value.city){
        formErr.city='Please select a City'
    }
      return formErr
  }
  function submitForm(e) {
    e.preventDefault();
    setError(ValidationError(values))
    // if(values.name==='' || || values.gender==='' || hobbyValid || values.age==='') {
    //     setValidate(true)
    // }
    if(values.name && values.email && values.gender && values.hobby && values.age && values.state && values.city){
        console.log("data", values);
        // if(selectedState!=='' && selectedCity!==''){
        //   setValues(values.state=[{name:selectedState,city:selectedCity}])
        // }
        setSuccess(true)
    }
  }

  function clearData() {
    setValues({
        name: "",email: "",gender:'',age:'',state:'',hobby:'',city:''
    });
    setSuccess(false)
    setError({})
  }
  const handleChange=(e)=>{
    const target = e.target
    const name=target.name
    const value = target.type==='checkbox'?target.checked :target.value
    // const value = target.value
    setValues({
        ...values,
        [name]:value,
      })
  }


  return (
    <div>
      <h1>Form</h1>
      {success&&<h1>Success!!</h1>}
      <strong>Name:</strong>
      <input type="text" name='name' placeholder="Enter Name" value={values.name} onChange={handleChange}/>
      <span><b>{error.name}</b></span>
      <br /><br />
      <strong>Email:</strong>
      <input type="email" name='email' placeholder="Enter Email" value={values.email} onChange={handleChange}/>
      <span><b>{error.email}</b></span>
      <br /> <br />
      <strong>Gender</strong><input type="radio" name="gender" value="male" checked={values.gender==='male'} onChange={handleChange}/>male <input type="radio" checked={values.gender==='female'} name="gender" value="female" onChange={handleChange}/>female
      <span><b>{error.gender}</b></span>
       <br/> <br />  
       <strong>Hobby</strong>
        <input type="checkbox" name="hobby"  value='reading' onChange={handleChange}/>Reading
        <input type="checkbox" name="hobby" value='travelling' onChange={handleChange} />Travelling
        <input type="checkbox" name="hobby" value='sports' onChange={handleChange}/>Sports
        <span><b>{error.hobby}</b></span><br /><br />
       <strong>Age:</strong><input type="number" name='age' value={values.age} onChange={handleChange}/>
       <span><b>{error.age}</b></span> <br/><br />
       <strong>State:</strong>

        <select name='state' value={values.state} onChange={handleChange}>
            <option>Choose State</option>
            <option value='gujarat'>gujarat</option>
        </select>
        
        <span><b>{error.state}</b></span>
        <br /><br />
        <strong>City:</strong>

        <select name='city' value={values.city} onChange={handleChange}>
            <option>Choose City</option>
            <option value='surat'>surat</option>
            <option value='rajkot'>rajkot</option>
        </select>
        <span><b>{error.city}</b></span>
        <br /><br />

      <button onClick={submitForm}>Submit</button>
      <button type='reset' onClick={clearData}>reset</button>
    </div>
  );
};

export default FormDemo;
