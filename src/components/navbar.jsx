import React from "react";
import logo from "../images/icons/logo.svg";
import location from "../images/icons/location.png";
import account from "../images/icons/account.png";
import "../styles/navbar.css";
export default function navbar() {
  return (
    <div className="navbar">
      <div className="navleftlocation">
        <img src={location} alt="Location" />
        <div className="navbarlocationcontent">
          <h3>Home</h3>
          <p>Location</p>
        </div>
      </div>
      <div className="navleft">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navright">
        <img src={account} alt="Account" />
        <p>User Name</p>
      </div>
    </div>
  );
}
