import React, { useState, useEffect } from "react";
import "../styles/stores.css";
import "../styles/menu.css";
import Navbar from "./navbar";
import Menucard from "./elements/menucard";
import { useParams } from "react-router-dom";
import searchicon from "../images/icons/search.png";
import axios from "axios";

export default function Menu() {
  const userId = useParams();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [menu, setMenu] = useState([]);
  const getMenu = async () => {
    const data = {};
    data.vendorId = userId.userId;
    try {
      const response = await axios.post(`${baseURL}/api/vendormenu/`, data);
      setMenu(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMenu();
  }, []);
  return (
    <div className="storesmain">
      <Navbar />
      <div className="storetop">
        <h1>What's In Mind?'</h1>
        <div className="storesearch">
          <input type="text" placeholder="Search for Items" />
          <img src={searchicon} alt="Search" />
        </div>
      </div>
      <div className="storebody">
        <div className="storerow">
          {menu.map((menuitem) => (
            <div className="menucardbox">
              <Menucard
                name={menuitem.itemName}
                description={menuitem.itemDescription}
                image={menuitem.itemImage}
                price={menuitem.itemPrice}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="addtocart">
        Total Amount: ₹ 0
        <button>
          <p>Add To Cart</p>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
