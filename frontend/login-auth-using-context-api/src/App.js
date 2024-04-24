import React from "react";
import { AuthProvider } from "./components/AuthContext";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <Router>
      <AuthProvider>
        <LoginForm />
      </AuthProvider>

      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
