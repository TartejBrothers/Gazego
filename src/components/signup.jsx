import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginHome from "../images/loginimage.svg";
import emailimg from "../images/icons/email.png";
import userlogin from "../images/icons/userlogin.png";
import phonelogin from "../images/icons/phonelogin.png";
import passwordimg from "../images/icons/password.png";
import arrowleft from "../images/icons/arrowleft.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successful, setSuccessful] = useState(null);
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      phoneNumber: phone,
      email: email,
      password: password,
      role: "user",
    };

    try {
      const response = await axios.post(`${baseURL}/api/user`, data, {});

      console.log("Login successful:", response.data);

      setSuccessful("Login successful");
      navigate("/stores");
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Email already exists. Please try again.");
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
              navigate("/login");
            }}
          >
            <img src={arrowleft} alt="Back" />
            Back
          </div>
          <h1>Welcome!</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputdiv">
              <img src={userlogin} alt="Name" />
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="inputdiv">
              <img src={phonelogin} alt="Phone" />
              <input
                type="number"
                name="phone"
                placeholder="Enter your Phone"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="inputdiv">
              <img src={emailimg} alt="Email" />
              <input
                type="email"
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
                required
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="createaccount">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
            {successful && <p className="successmessage">{successful}</p>}
            {error && <p className="errormessage">{error}</p>}{" "}
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
