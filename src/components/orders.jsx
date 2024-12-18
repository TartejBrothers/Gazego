import React, { useState, useEffect } from "react";
import logo from "../images/icons/logo.svg";
import "../styles/order.css";
import account from "../images/icons/account.png";
import backbutton from "../images/icons/back.png";
import { useNavigate, useParams } from "react-router-dom";
import Gripline from "./common/gripline";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userId = useParams();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const handleBack = () => {
    navigate(-1);
  };

  const fetchOrders = async () => {
    if (!userId.userId || !baseURL) {
      console.warn("User ID or Base URL is not available yet.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(
        `${baseURL}/api/orders/${userId.userId}`
      );
      setOrders(response.data);
      console.log("Orders:", response.data);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [userId.userId, baseURL]);

  return (
    <div className="storesmain">
      <div className="navbar">
        <div className="navleftlocation">
          <div className="backbutton">
            <img src={backbutton} alt="Go Back" onClick={handleBack} />
          </div>
        </div>
        <div className="navleft">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navright">
          <img src={account} alt="Account" />
          <Gripline />
        </div>
      </div>
      <div className="storetop ordertopheader">
        <h1>Your Orders</h1>
      </div>
      <div className="storebody orderbody">
        {loading ? (
          <p>Loading your orders...</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div className="ordercard" key={order._id}>
              <div className="ordertop">
                <h2>{order.vendor.storeName}</h2>
              </div>
              <hr />
              <div className="ordercardbody">
                <div className="orderdetailstop">
                  <p>
                    <strong>Order ID: </strong>
                    {order._id}
                  </p>
                  <p>
                    <strong>Order Date: </strong>
                    {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <h3>Order Items</h3>
                <div className="orderdetailsmain">
                  <ul>
                    {order.items.map((item) => (
                      <li key={item._id}>
                        <div className="orderdetailsleft">
                          <img src={item.itemImage} alt={item.itemName} />
                          <p>{item.itemName}</p>
                        </div>
                        <div className="orderdetailsright">
                          <p>
                            {item.quantity} x {item.itemPrice} =
                          </p>
                          <p>{item.quantity * item.itemPrice}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr />
                <div className="ordercardtotal">
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>
                    <strong>₹ {order.total}</strong>
                  </p>
                </div>
              </div>
              <div className="ordercardbottom">
                <div className="ordercardbottomleft">
                  Contact the Vendor At: {order.vendor.vendorPhone}
                </div>
                <div className="ordercardbottomright">
                  Order Status: {order.orderStatus}{" "}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
