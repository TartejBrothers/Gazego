import { React, useState } from "react";
import star from "../../images/icons/star.png";

export default function Menucard({ name, description, image, price }) {
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
        <img src={image} alt="Store" />
      </div>
      <div className="menucardmain">
        <div className="menucardcontent">
          <h3>{name}</h3>
          <h2>₹ {price}</h2>
          <p>{description}</p>
          <div className="menucardrating">
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
