import React from 'react'

const Button = ({ onClick, label = "Click me" } ) => {
  return (
      <button onClick={ onClick } data-testid = "button">
        {label}
      </button>
  )
}

export default Button
