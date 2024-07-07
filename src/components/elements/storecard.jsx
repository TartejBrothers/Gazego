import React from "react";
import "../../styles/storecard.css";
import burgerimage from "../../images/storecard/burger.jpg";
import star from "../../images/icons/star.png";

export default function StoreCard({ name, description, rating }) {
  return (
    <div className="storecard">
      <div className="storecardimg">
        <img src={burgerimage} alt="Store" />
      </div>
      <div className="storecardcontent">
        <div className="storecardcontenttop">
          <h3>{name}</h3>
          <div className="storecardrating">
            <img src={star} alt="Star" />
            <p>{rating}</p>
          </div>
        </div>
        <div className="storecardcotentbottom">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
