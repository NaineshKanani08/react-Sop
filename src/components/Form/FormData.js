import React, { useState,useEffect } from "react";
// import MultipleCheckBox from "./MultipleCheckBox";
const FormData = () => {
    const stateCity={states: [
        {
          name: "gujarat",cities: ["surat", "rajkot"]
        },
        { name: "Up", cities: ["Agra","kanpur"] },]

    }

  const [values, setValues] = useState({
    name: "",email: "",gender:'',reading:'',travelling:'',sports:'',age:'',state:[],hobby:[]
  });
//   const[validate,setValidate]= useState(false)
  const[success,setSuccess] = useState(false)
  const[error,setError]=useState({})
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedHobby, setSelectedHobby] = useState({reading:false,travelling:false,sports:false});
  const hobby=values.reading||values.travelling||values.sports
  const hobbyValid=values.reading===''||values.travelling===''||values.sports==='' 
  // console.log(selectedState)
  // console.log(selectedCity)
  // useEffect(() =>{
  //   setValues(values.state=[{selectedState,selectedCity}])

  // },[selectedState,selectedCity])

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
      if(hobbyValid){
        formErr.hobby='Please select a Hobby'
      }
      if(value.age===''){
        formErr.age='Please enter a Age'
      }
      if(!value.state){
          formErr.state='Please select a State'
      }
      return formErr
  }
  function submitForm(e) {
    e.preventDefault();
    setError(ValidationError(values))
    // if(values.name==='' || || values.gender==='' || hobbyValid || values.age==='') {
    //     setValidate(true)
    // }
    if(values.name && values.email && values.gender && hobby && values.age && values.state ){
        console.log("data", values);
        if(selectedState!=='' && selectedCity!==''){
          setValues(values.state=[{name:selectedState,city:selectedCity}])
        }
        setSuccess(true)
    }
  }

  function clearData(e) {
    setValues({
      name: "",email: "",gender: "",reading:'',travelling:'',sports:'',age:''
    });
    setSuccess(false)
    setSelectedState('')
    setSelectedCity('')
    setError({})
  }
  const handleChangeHobby=(e)=>{
    var {name,checked} = e.target
    setValues(values.hobby=name)
    console.log(name,checked)

  }
  const handleChange=(e)=>{
    //   const {name,value}=e.target
    //   e.target.type!=='checkbox'?
    //   setValues({
    //     ...values,
    //     [name]:value,
    //   })
    //   :setValues({
    //     ...values,
    //     [name] :e.target.checked
    //   })

    const target = e.target
    const name=target.name
    const value = target.type==='checkbox'?target.checked :target.value
    setValues({
        ...values,
        [name]:value,
      })

  }
  const availableCities = stateCity.states.find((c) => c.name === selectedState);

//   const handleNameInputChange = (e) => {
//     setValues((values) => ({
//       ...values,
//       name: e.target.value,
//     }));
//     setValidate(false)
//   };
//   const handleEmailInputChange = (e) => {
//     setValues((values) => ({
//       ...values,
//       email: e.target.value,
//     }));
//     setValidate(false)
//   };

//   const handleGenderInputChange = (e) => {
//     setValues((values) => ({
//       ...values,
//       gender: e.target.value,
//     }));
//     setValidate(false)
//   };
  return (
    <div>
      <h1>Form</h1>
      {success&&<h1>Success!!</h1>}
      <strong>Name:</strong>
      <input type="text" name='name' placeholder="Enter Name" value={values.name} onChange={handleChange}/>
      {/* {validate  && ) <span><b>*Please enter a name</b></span>} */}
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
        <input type="checkbox" name="selectedHobby" checked={selectedHobby.reading} onChange={handleChangeHobby}/>Reading
        <input type="checkbox" name="selectedHobby" checked={selectedHobby.travelling} onChange={handleChangeHobby} />Travelling
        <input type="checkbox" name="selectedHobby" checked={selectedHobby.sports}  onChange={handleChangeHobby}/>Sports
        {/* {validate && hobbyValid && <span><b>please select hobby</b></span> }<br /><br /> */}
        <span><b>{error.hobby}</b></span><br /><br />
       {/* <MultipleCheckBox /><br /><br /> */}
       <strong>Age:</strong><input type="number" name='age' value={values.age} onChange={handleChange}/>
       <span><b>{error.age}</b></span> <br/><br />
       <strong>State:</strong>
        <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
          <option>Choose State</option>
          {stateCity.states.map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
          })}
        </select>
        {/* <span><b>{error.state}</b></span> */}
        <br /><br />
        <strong>City:</strong>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}>
          <option>Choose City</option>
          {availableCities?.cities.map((e, key) => {
            return (
              <option value={e.name} key={key}>
                {e}
              </option>
            );
          })}
        </select><br /><br />

      <button onClick={submitForm}>Submit</button>
      <button type='reset' onClick={clearData}>reset</button>
    </div>
  );
};

export default FormData;
