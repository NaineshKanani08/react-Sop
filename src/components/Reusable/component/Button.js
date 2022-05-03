import React from 'react'

const Button = (props) => {
    const {children,onClick} = props
  return (
    <div>
        <button onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button