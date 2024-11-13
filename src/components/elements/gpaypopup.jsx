import React from "react";
import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import "../../styles/common/gpaypopup.css";
import axios from "axios";
export default function GpayPopup({
  isVisible,
  onClose,
  amount,
  phoneNumber,
  gpay,
  customerId,
  cart,
  vendorId,
}) {
  const generatePaymentId = () => {
    return Math.floor(Math.random() * 10 ** 16)
      .toString()
      .padStart(16, "0");
  };
  const baseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const whatsApplink = `https://wa.me/91${phoneNumber}`;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const agreeCheckbox = document.getElementById("agreetosend");
    if (agreeCheckbox && agreeCheckbox.checked) {
      console.log("Hello World");
      try {
        const data = {
          userId: customerId,
          paymentId: generatePaymentId(),
          vendorId: vendorId,
          items: cart,
          total: amount,
          orderStatus: "Pending",
        };

        const response = await axios.post(`${baseURL}/api/order`, data);
        alert("Order placed successfully");
        navigate("/orders/" + customerId);
      } catch (error) {
        console.error("Error while creating order:", error);
      }
    } else {
      alert("Please check the checkbox to confirm the order.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="gpaypopup" onClick={(e) => e.stopPropagation()}>
        <div className="crossiconcorner">
          <IoIosClose onClick={onClose} />
        </div>
        <div className="gpaypopup-header">
          <form onSubmit={(e) => e.preventDefault()}>
            <h2>Payment Confirmation</h2>
            <div className="amounttotalpopup">
              <p>Total Amount: </p> <p> {amount}</p>
            </div>
            <img src={gpay} alt="Gpay Scanner" />
            <p>
              Pay on this number and send a screenshot to this number for
              verification.
            </p>
            <a href={whatsApplink} target="_blank" rel="noopener noreferrer">
              <button type="button">
                <FaWhatsapp />
                91 {phoneNumber}
              </button>
            </a>
            <div className="agreetosend">
              <input
                type="checkbox"
                name="sentgpay"
                id="agreetosend"
                required
              />
              <label htmlFor="sentgpay">
                I have sent the payment screenshot to the above number.
              </label>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
