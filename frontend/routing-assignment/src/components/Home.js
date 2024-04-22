import React from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Hello Aditya, welcome to our website</h1>
      <button onClick={goToAboutPage}>About us</button>
    </div>
  );
};

export default Home;
