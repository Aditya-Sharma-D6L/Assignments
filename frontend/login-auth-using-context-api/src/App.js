import React from "react";
import { AuthProvider } from "./components/AuthContext";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>

      <Router>
        <Routes>
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
