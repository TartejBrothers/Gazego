import React from "react";
import logo from "../../images/icons/logo.svg";
import "../../styles/admin/navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar({ type }) {
  const navigate = useNavigate();
  const NavigatToViewMenu = () => {
    navigate("/vendor/menu");
  };
  const NavigatToAdd = () => {
    navigate("/vendor/addmenu");
  };
  const NavigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="navbaradmin">
      <div className="navbaradminleft">
        <img src={logo} alt="Logo" onClick={NavigateToHome} />
      </div>
      <div className="navbaradminright">
        <ul>
          {type === "add" ? (
            <li onClick={NavigatToViewMenu}>View Menu</li>
          ) : (
            <li onClick={NavigatToAdd}>Add Menu Item</li>
          )}
        </ul>
      </div>
    </div>
  );
}
