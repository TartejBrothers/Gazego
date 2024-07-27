import React, { useState } from "react";
import Navbar from "./navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function AddMenu() {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemImage, setItemImage] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const { userId } = useParams();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      itemName,
      itemPrice,
      itemImage,
      itemDescription,
      vendorId: userId,
    };

    try {
      const response = await axios.post(`${baseURL}/api/menu`, data);
      if (response.data.message === "Menu added successfully") {
        setItemName("");
        setItemPrice("");
        setItemImage("");
        setItemDescription("");
        alert("Menu added successfully");
        navigate(`/vendor/menu/${userId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="vendormain">
      <Navbar type="add" userId={userId} />
      <div className="vendortop">
        <h2>Add Menu Item</h2>
      </div>
      <div className="addvendorbody">
        <form onSubmit={handleSubmit}>
          <div className="inputdivvendor">
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
            />
          </div>

          <div className="inputdivvendor">
            <label htmlFor="itemPrice">Item Price</label>
            <input
              type="number"
              name="itemPrice"
              value={itemPrice}
              onChange={(event) => setItemPrice(event.target.value)}
            />
          </div>
          <div className="inputdivvendorfull">
            <label htmlFor="itemDescription">Item Description</label>
            <input
              type="text"
              name="itemDescription"
              value={itemDescription}
              onChange={(event) => setItemDescription(event.target.value)}
            />
          </div>

          <div className="inputdivvendorfull">
            <label htmlFor="itemImage">Store Image URL</label>
            <input
              type="text"
              name="itemImage"
              value={itemImage}
              onChange={(event) => setItemImage(event.target.value)}
            />
          </div>
          <br />
          <div className="inputdivvendorsubmit">
            <button type="submit">Add Item</button>
          </div>
        </form>
      </div>
    </div>
  );
}
