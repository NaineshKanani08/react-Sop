import React,{useState} from 'react'

const AtoB_BtoA = () => {
    const [encoded_data,setEncoded_data]=useState('')
    const encoded_Data = btoa(encoded_data)
    const decoded_Data = atob(encoded_Data)

  return (
    <div>
        <h1>AtoB_BtoA</h1>
        <h3>Encoded Data:{encoded_Data}</h3>
        <h3>Decoded Data:{decoded_Data}</h3>
        <input type="text" placeholder='Enter Something...' value={encoded_data} onChange={e=>setEncoded_data(e.target.value)}/>

    </div>
  )
}

export default AtoB_BtoA