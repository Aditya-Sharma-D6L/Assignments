import React from 'react'

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      { isLoggedIn ? (
        <h1>Welcome back!</h1>
      ): (
        <h1>Please sign up or log in</h1>
      )}
    </div>
  )
}

export default Greeting
