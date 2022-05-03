import React from 'react'

const Select = (props) => {
    const {data,onChange,value}=props
    let options = data.map(data => (
        <option key={data.id} value={data.name}>
          {data.name}
        </option>
      ))
  return (
    <div>
        <select value={value} onChange={onChange}>
            {options}
        </select>
    </div>
  )
}

export default Select