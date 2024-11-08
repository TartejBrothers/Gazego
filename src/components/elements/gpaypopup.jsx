import React from "react";
import { useNavigate } from "react-router-dom";
export default function GpayPopup({ isVisible, onClose, amount, phoneNumber }) {
  const navigate = useNavigate();
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="gpaypopup" onClick={(e) => e.stopPropagation()}>
        <div className="gpaypopup-header">
          <h2>Payment Confirmation</h2>
          <div className="amounttotalpopup">
            <p>Amount:</p>
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
