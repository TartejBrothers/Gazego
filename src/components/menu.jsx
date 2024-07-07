import React from "react";
import "../styles/stores.css";
import "../styles/menu.css";
import Navbar from "./navbar";
import Menucard from "./elements/menucard";
import { useParams } from "react-router-dom";
import searchicon from "../images/icons/search.png";
import burgerimage from "../images/storecard/burger.jpg";
import sharawamaimage from "../images/storecard/shawarma.jpg";
import samsosaimage from "../images/storecard/samosa.jpg";
import chickenrollimage from "../images/storecard/chickenroll.jpg";
export default function Menu() {
  const menu = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    name: "Chicken Burger",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "4.1",
    price: "₹ 100",
    image: burgerimage,
  }));
  const storeId = useParams().storeId;
  console.log(storeId);
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
        {storeId === "1" && (
          <div className="storerow">
            <div className="menucardbox">
              <Menucard
                name="Sharwama"
                description="Tasty and Delicious Sharwama with Chicken and Veggies."
                rating="4.6"
                image={sharawamaimage}
                price="100"
              />
            </div>
            <div className="menucardbox">
              <Menucard
                name="Samosa"
                description="Samosa with Spicy and Delicious Aloo Filling."
                rating="4.3"
                image={samsosaimage}
                price="20"
              />
            </div>
            <div className="menucardbox">
              <Menucard
                name="Chicken Roll"
                description="A roll that blends the mind when it comes to taste."
                rating="4.1"
                image={chickenrollimage}
                price="80"
              />
            </div>
          </div>
        )}
        {storeId === "2" && (
          <div className="storerow">
            {menu.map((store) => (
              <div className="menucardbox">
                <Menucard
                  name={store.name}
                  description={store.description}
                  rating={store.rating}
                  image={store.image}
                  price={store.price}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
