import React from "react";
import logo from "../../images/icons/logo.svg";
import "../../styles/admin/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar({ type, userId }) {
  const navigate = useNavigate();

  const navigateToViewMenu = () => {
    console.log("Navigating to View Menu for userId:", userId);
    navigate(`/vendor/menu/${userId}`);
  };

  const navigateToAdd = () => {
    console.log("Navigating to Add Menu Item for userId:", userId);
    navigate(`/vendor/addmenu/${userId}`);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="navbaradmin">
      <div className="navbaradminleft">
        <img src={logo} alt="Logo" onClick={navigateToHome} />
      </div>
      <div className="navbaradminright">
        <ul>
          {type === "add" ? (
            <li onClick={navigateToViewMenu}>View Menu</li>
          ) : (
            <li onClick={navigateToAdd}>Add Menu Item</li>
          )}
        </ul>
      </div>
    </div>
  );
}
