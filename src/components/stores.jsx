import React from "react";
import "../styles/stores.css";
import Navbar from "./navbar";
import StoreCard from "./elements/storecard";
import searchicon from "../images/icons/search.png";
import burgerimage from "../images/storecard/burger.jpg";
import c1store from "../images/storecard/c1store.jpg";
import { useNavigate } from "react-router-dom";
export default function Stores() {
  const stores = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: "Burger King",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "4.5",
  }));
  const navigate = useNavigate();
  const NavigateToMenu = (storeId) => {
    navigate(`/menu/${storeId}`);
  };
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
          <div className="storecardbox" onClick={() => NavigateToMenu("1")}>
            <StoreCard
              name="C1"
              description="Quick Snacks on the Racks"
              rating="4.2"
              image={c1store}
            />
          </div>
          {stores.map((store) => (
            <div className="storecardbox" onClick={() => NavigateToMenu("2")}>
              <StoreCard
                name={store.name}
                description={store.description}
                rating={store.rating}
                image={burgerimage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
