import { React, useState } from "react";
import star from "../../images/icons/star.png";
import burgerimage from "../../images/storecard/burger.jpg";
export default function Menucard({ name, description, rating }) {
  const [cartValue, setCartValue] = useState(0);
  const increaseCartValue = () => {
    setCartValue(cartValue + 1);
  };
  const decreaseCartValue = () => {
    setCartValue(cartValue - 1);
  };

  return (
    <div className="menucard">
      <div className="menucardimg">
        <img src={burgerimage} alt="Store" />
      </div>
      <div className="menucardmain">
        <div className="menucardcontent">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="menucardrating">
            <div className="storecardrating">
              <img src={star} alt="Star" />
              <p>{rating}</p>
            </div>
            <div className="menucardratingright">
              <button onClick={decreaseCartValue}>-</button>
              <p>{cartValue}</p>
              <button onClick={increaseCartValue}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
