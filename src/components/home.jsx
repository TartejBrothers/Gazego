import React from "react";
import "../styles/home.css";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import homeimage from "../images/searchhome.svg";
export default function Home() {
  const navigate = useNavigate();
  const NavigateToStores = () => {
    navigate("/stores");
  };
  return (
    <div className="homemain">
      <Navbar />
      <div className="homebody">
        <div className="homeleft">
          <div className="homeleftcontent">
            <h1>GAZEGO</h1>
            <h3>Gazebo On the Go</h3>
            <button onClick={NavigateToStores}>Get Started</button>
          </div>
        </div>
        <div className="homeright">
          <img src={homeimage} alt="Home" />
        </div>
      </div>
    </div>
  );
}
