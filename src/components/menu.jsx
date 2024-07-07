import React from "react";
import "../styles/stores.css";
import "../styles/menu.css";
import Navbar from "./navbar";
import Menucard from "./elements/menucard";
import searchicon from "../images/icons/search.png";
export default function Menu() {
  const menu = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: "Chicken Burger",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "4.1",
  }));
  return (
    <div className="storesmain">
      <Navbar />
      <div className="storetop">
        <h1>What's In Mind?'</h1>
        <div className="storesearch">
          <select id="searchdropdown">
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
          <input type="text" placeholder="Search for Items" />
          <img src={searchicon} alt="Search" />
        </div>
      </div>
      <div className="storebody">
        <div className="storerow">
          {menu.map((store) => (
            <div className="menucardbox">
              <Menucard
                name={store.name}
                description={store.description}
                rating={store.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
