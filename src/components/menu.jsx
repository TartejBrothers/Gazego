import React, { useState, useEffect } from "react";
import "../styles/stores.css";
import "../styles/menu.css";
import logo from "../images/icons/logo.svg";
import account from "../images/icons/account.png";
import backbutton from "../images/icons/back.png";
import Menucard from "./elements/menucard";
import { useParams } from "react-router-dom";
import searchicon from "../images/icons/search.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const userId = useParams();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBack = () => {
    navigate(-1);
  };

  const getMenu = async () => {
    const data = { vendorId: userId.userId };
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

  const handleAddToCart = (item, quantity) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.itemId === item._id
    );

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += quantity;
    } else {
      updatedCart.push({ itemId: item._id, quantity });
    }

    setCart(updatedCart);
    setTotalAmount(totalAmount + item.itemPrice * quantity);
  };

  const handleCheckout = async () => {
    const cartData = {
      userId: "123456",
      vendorId: userId.userId,
      items: cart,
      total: totalAmount,
    };
    console.log(cartData);

    try {
      const response = await axios.post(
        `http://localhost:5038/api/cart`,
        cartData
      );
      alert("Cart successfully added");
    } catch (error) {
      console.error("Error while checking out:", error);
    }
  };

  return (
    <div className="storesmain">
      <div className="navbar">
        <div className="navleftlocation">
          <div className="backbutton">
            <img src={backbutton} alt="Go Back" onClick={handleBack} />
          </div>
        </div>
        <div className="navleft">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navright">
          <img src={account} alt="Account" />
        </div>
      </div>
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
            <div className="menucardbox" key={menuitem.itemId}>
              <Menucard
                name={menuitem.itemName}
                description={menuitem.itemDescription}
                image={menuitem.itemImage}
                price={menuitem.itemPrice}
                onAddToCart={(quantity) => handleAddToCart(menuitem, quantity)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="addtocart">
        Total Amount: ₹ {totalAmount}
        <button onClick={handleCheckout}>
          <p>Proceed To Checkout</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
