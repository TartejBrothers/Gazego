import React from "react";
import logo from "../../images/icons/logo.svg";
import "../../styles/admin/navbar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar({ type }) {
  const navigate = useNavigate();
  const NavigatToVendors = () => {
    navigate("/admin/vendors");
  };
  const NavigatToAdd = () => {
    navigate("/admin/addvendor");
  };
  return (
    <div className="navbaradmin">
      <div className="navbaradminleft">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbaradminright">
        <ul>
          {type === "add" ? (
            <li onClick={NavigatToVendors}>Vendors</li>
          ) : (
            <li onClick={NavigatToAdd}>Add Vendor</li>
          )}
        </ul>
      </div>
    </div>
  );
}
