import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginHome from "../images/loginimage.svg";
import emailimg from "../images/icons/email.png";
import passwordimg from "../images/icons/password.png";
import arrowleft from "../images/icons/arrowleft.png";
import Cookies from "js-cookie";
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
      const responseDataRole = response.data.role;
      const userId = response.data.id;
      const token = response.data.token;
      localStorage.setItem("role", responseDataRole);
      localStorage.setItem("userId", userId);

      Cookies.set("token", token);
      setSuccessful("Login successful");
      if (responseDataRole === "admin") {
        navigate("/admin/vendors");
      } else if (responseDataRole === "vendor") {
        navigate(`/vendor/menu/${userId}`);
      } else navigate("/stores");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
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
          <div
            className="loginnavigator"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={arrowleft} alt="Back" />
            Home
          </div>
          <h1>Welcome!</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputdiv">
              <img src={emailimg} alt="Email" />
              <input
                type="email"
                name="email"
                required
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
                required
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="createaccount">
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
            {successful && <p className="successmessage">{successful}</p>}
            {error && <p className="errormessage">{error}</p>}{" "}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
