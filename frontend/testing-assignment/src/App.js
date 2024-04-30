/////////////////////////////////////////////////////
// import Header from "./components/Header";
// import LoginForm from "./components/LoginForm";

// function App() {
//   return (
//     <div>
//       <Header title="Welcome to My App" variant="h2" />
//       <Header title="About Us" variant="h3" />
//       <Header title="Contact" variant="h4" />

//       <LoginForm />
//     </div>
//   );
// }

// export default App;
////////////////////////////////////////////////////

import React from "react";
import UserList from "./components/UserList";

const usersData = [
  { username: "john_doe", password: "password123" },
  { username: "jane_smith", password: "securePass456" },
  { username: "sam_jackson", password: "strongPassword789" },
];

const App = () => {
  return (
    <div>
      <h2>User List</h2>
      <UserList users={usersData} />
    </div>
  );
};

export default App;
