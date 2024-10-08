import React from "react";
import "../styles/home.css";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import homeimage from "../images/searchhome.svg";
export default function Home() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const role = localStorage.getItem("role");
  const NavigateToLogin = () => {
    if (userId && role === "user") {
      navigate("/stores");
    } else if (userId && role === "vendor") {
      // eslint-disable-next-line
      {
        navigate(`/vendor/menu/${userId}`);
      }
    } else if (userId && role === "admin") {
      navigate("/admin/vendors");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="homemain">
      <Navbar />
      <div className="homebody">
        <div className="homeleft">
          <div className="homeleftcontent">
            <h1>GAZEGO</h1>
            <h3>Gazebo On the Go</h3>
            {userId ? (
              <button onClick={NavigateToLogin}>Go Home</button>
            ) : (
              <button onClick={NavigateToLogin}>Get Started</button>
            )}
          </div>
        </div>
        <div className="homeright">
          <img src={homeimage} alt="Home" />
        </div>
      </div>
    </div>
  );
}
