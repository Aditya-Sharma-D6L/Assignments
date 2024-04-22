import React, { Component } from 'react'
// import Welcome from './components/WelcomeClass';


// class Greeting extends Component {

//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// class App extends Component {  // App is the parent class here

//   render() {

//     return(
//       <div>
//         <h1>Hello!!!</h1>
//         <hr />
//         <Welcome name="Aditya" greet="D6L!!" message="your HR."  />

//         {/* <Greeting name="Alice"/>
//         <Greeting name="Bob"/>
//         <Greeting name="Charlie"/> */}

//       </div>
//     )
//   }
// }





// functional component
const Greeting = (props) => {

  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <p>props.message</p>
    </div>
  );
}

const Welcome = (props) => {

  return(
    <div>
      <h3>Welcome, {props.name}</h3>
      <p>props.message</p>
    </div>
  )
}

const MessageComponent = (props) => {

  return(
    <div>
      <h3>Welcome, {props.name}</h3>
      <p>props.message</p>
    </div>
  )
}

// parent component
const App = () => {

  return(
    <div>
      <Greeting name="Alice" message="Welcome to our hotel!" />
      <Greeting name="Bob" message="Enjoy your stay!" />

      <Welcome name="Alice" message="Welcome alice" />
      <Welcome name="Bob" message="Welcome bob" />

      <MessageComponent name="Alice" message="Demo message for alice" />
      <MessageComponent name="Bob" message="Demo message for bob" />
    </div>
  );
}



export default App;