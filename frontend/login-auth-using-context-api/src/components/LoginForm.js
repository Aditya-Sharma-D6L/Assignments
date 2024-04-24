import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { login, dummyUsers } = useAuth();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/welcome");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = dummyUsers.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (foundUser) {
      login(foundUser);
    } else {
      alert("Invalid credentials");
    }

    setCredentials({ username: "", password: "" }); // Clear form after submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        required
      />
      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        required
      />
      <br />
      <button onClick={handleLoginClick} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
