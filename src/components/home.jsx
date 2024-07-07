import React from "react";
import "../styles/home.css";
import Navbar from "./navbar";
import homeimage from "../images/searchhome.svg";
export default function home() {
  return (
    <div className="homemain">
      <Navbar />
      <div className="homebody">
        <div className="homeleft">
          <div className="homeleftcontent">
            <h1>GAZEGO</h1>
            <h3>Gazebo On the Go</h3>
            <button>Get Started</button>
          </div>
        </div>
        <div className="homeright">
          <img src={homeimage} alt="Home" />
        </div>
      </div>
    </div>
  );
}
