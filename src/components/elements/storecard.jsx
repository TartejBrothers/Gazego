import React from "react";
import "../../styles/storecard.css";

import phoneImage from "../../images/icons/phone.png";

export default function StoreCard({ name, description, phone, image }) {
  return (
    <div className="storecard">
      <div className="storecardimg">
        <img src={image} alt="Store" />
      </div>
      <div className="storecardcontent">
        <div className="storecardcontenttop">
          <h3>{name}</h3>
          <div className="storecardrating">
            <img src={phoneImage} alt="phone" />
            <p>{phone}</p>
          </div>
        </div>
        <div className="storecardcotentbottom">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
