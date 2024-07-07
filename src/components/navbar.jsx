import React from "react";
import logo from "../images/icons/logo.svg";
import account from "../images/icons/account.png";
import "../styles/navbar.css";
export default function navbar() {
  return (
    <div className="navbar">
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
