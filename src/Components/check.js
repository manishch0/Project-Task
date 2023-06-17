import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3200/", {
        username,
        password,
      });

      if (response.status === 200) {
        setUserData(response.data);
        setShowPopUp(true);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Test data </h1>
      {isLoggedIn && (
        <div className="popup">
          <p>Welcome, {userData.name}!</p>
        </div>
      )}

      {!isLoggedIn && (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
