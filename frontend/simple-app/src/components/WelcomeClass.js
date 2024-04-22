import React, { Component } from 'react'

class Welcome extends Component {

    render() {
  
      const { name, greet, message } = this.props
  
      return(
        <div>
          {/* <h1>This is Child Component</h1> */}
          <h3>Welcome, {name}! <br/> Greetings from {greet}!!! <br/> 
              You got a new message from your {message}</h3>
        </div>
      )
    }
  }

  export default Welcome;