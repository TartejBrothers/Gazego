import React from "react";
import logo from "../images/icons/logo.svg";
import location from "../images/icons/location.png";
import account from "../images/icons/account.png";
import backbutton from "../images/icons/back.png";
import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="navbar">
      <div className="navleftlocation">
        <div className="backbutton">
          <img src={backbutton} alt="Go Back" onClick={handleBack} />
        </div>
        <img src={location} alt="Location" />
        <div className="navbarlocationcontent">
          <select id="storelocation">
            <option value="gazebo">Gazebo</option>
            <option value="northsquare">North Square</option>
            <option value="acadmeicblock">Academic Block 1</option>
          </select>
        </div>
      </div>
      <div className="navleft">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navright">
        <img src={account} alt="Account" />
      </div>
    </div>
  );
}
