import React from 'react'
import PropTypes from 'prop-types';
const FormInput = (props) => {
  const {type,placeholder,onChange,name,value} = props
  return (
    <div>
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}

FormInput.propTypes={
  name:PropTypes.string.isRequired,
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
}
FormInput.defaultProps = {
  type: 'text',
}
export default FormInput