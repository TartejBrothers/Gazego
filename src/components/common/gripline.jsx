import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import "../../styles/common/gripline.css";
function Dropdown({ showDropdown }) {
  const BaseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [userState, setUserState] = useState(null);
  const [userId, setUserId] = useState(null);
  const checkUser = useCallback(async () => {
    const data = {};
    data.id = localStorage.getItem("userId");
    console.log("Checking user data for userId:", data.id);
    if (data.id === null) {
      navigate("/login");
    } else {
      try {
        const response = await axios.post(`${BaseURL}/api/userinfo`, data);
        const role = response.data.role;
        setUserId(response.data.id);
        if (role === "admin") {
          setUserState("admin");
        } else if (role === "vendor") {
          setUserState("vendor");
        } else if (role === "user") {
          setUserState("user");
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/");
      }
    }
  }, [navigate, BaseURL]); // eslint-disable-next-line
  useEffect(() => {
    checkUser();
  }, [checkUser]); // eslint-disable-next-line
  return (
    <div
      className={`dropdownnavbar ${
        showDropdown ? "showdropdownnavbar" : "hidedropdownnavbar"
      }`}
    >
      <ul>
        <li
          onClick={() => {
            document.cookie = null;
            localStorage.clear();
            sessionStorage.clear();
            navigate("/");
          }}
        >
          <IoIosLogOut />
          Logout
        </li>
        {userState === "user" && (
          <li onClick={() => navigate(`/orders/${userId}`)}>
            <FaShoppingCart /> Orders
          </li>
        )}
        {userState === "vendor" && (
          <li onClick={() => navigate(`/orders/${userId}`)}>
            <FaShoppingCart /> Orders
          </li>
        )}
      </ul>
    </div>
  );
}
export default function Gripline() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="griplinediv">
      <div
        onClick={() => {
          setShowDropdown(!showDropdown);
          console.log("showDropdown:", showDropdown);
        }}
        className="griplineicon"
      >
        <FaGripLines />
      </div>
      <Dropdown showDropdown={showDropdown} />
    </div>
  );
}
