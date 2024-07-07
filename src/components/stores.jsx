import React from "react";
import "../styles/stores.css";
import Navbar from "./navbar";
import StoreCard from "./elements/storecard";
import searchicon from "../images/icons/search.png";
export default function Stores() {
  const stores = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: "Burger King",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "4.5",
  }));
  return (
    <div className="storesmain">
      <Navbar />
      <div className="storetop">
        <h1>Looking For?</h1>
        <div className="storesearch">
          <select id="searchdropdown">
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
          <input type="text" placeholder="Search for stores" />
          <img src={searchicon} alt="Search" />
        </div>
      </div>
      <div className="storebody">
        <div className="storerow">
          {stores.map((store) => (
            <StoreCard
              name={store.name}
              description={store.description}
              rating={store.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
