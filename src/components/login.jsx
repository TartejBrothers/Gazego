import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginHome from "../images/loginimage.svg";
import loginbottomleft from "../images/designs/loginbottomleft.svg";
import logintopright from "../images/designs/logintopright.svg";
import emailimg from "../images/icons/email.png";
import passwordimg from "../images/icons/password.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successful, setSuccessful] = useState(null);
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseURL}/api/login`, data, {});

      console.log("Login successful:", response.data);

      setSuccessful("Login successful");
      navigate("/stores");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  const navigateReset = () => {
    navigate("/reset");
  };

  return (
    <div className="loginpage">
      <div className="loginbackleft"></div>
      <div className="loginbackright"></div>
      <div className="loginmain">
        <div className="loginleft">
          <img src={loginHome} alt="Login" />
        </div>
        <div className="loginright">
          <h1>Welcome!</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputdiv">
              <img src={emailimg} alt="Email" />
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputdiv">
              <img src={passwordimg} alt="Password" />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="forgotpasswordtext" onClick={navigateReset}>
              Forgot Password?
            </p>
            <p className="createaccount">
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
            {successful && <p className="successmessage">{successful}</p>}
            {error && <p className="errormessage">{error}</p>}{" "}
            <button type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
