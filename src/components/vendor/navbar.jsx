import React, { useState, useEffect, useCallback } from "react";
import logo from "../../images/icons/logo.svg";
import "../../styles/admin/navbar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Gripline from "../common/gripline";
export default function Navbar({ type, vendorId }) {
  const [defaultId, setDefaultId] = useState("");
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();

  const navigateToViewMenu = () => {
    console.log("vendorId", vendorId);
    navigate(`/vendor/menu/${defaultId}`);
  };

  const navigateToAdd = () => {
    console.log("vendorId", vendorId);
    navigate(`/vendor/addmenu/${defaultId}`);
  };

  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToViewOrders = () => {
    navigate(`/vendor/orders/${defaultId}`);
  };

  const checkUser = useCallback(async () => {
    const data = {};
    data.id = localStorage.getItem("userId");
    setDefaultId(data.id);
    console.log("Checking user data for userId:", data.id);
    if (data.id === null) {
      navigate("/login");
    } else {
      try {
        const response = await axios.post(`${BaseURL}/api/userinfo`, data);
        const role = response.data.role;
        if (role !== "vendor") {
          navigate("/");
        }
      } catch (error) {
        console.error("Error while fetching user data", error);
        navigate("/");
      }
    }
  }, [navigate, BaseURL]); // eslint-disable-next-line
  useEffect(() => {
    checkUser();
  }, [checkUser]); // eslint-disable-next-line

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
      <Gripline />
    </div>
  );
}
