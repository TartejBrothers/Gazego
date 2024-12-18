import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function ViewOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const { userId } = useParams();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/orders/vendor/${userId}`
      );
      console.log("User ID : ", userId);
      setOrders(response.data);
      console.log("Orders:", orders);
      console.log("Orders:", response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [userId.userId]);

  const handleStatus = async (orderId, orderStatus) => {
    try {
      const body = {
        orderId: orderId,
        orderStatus: orderStatus,
      };
      await axios.post(`${baseURL}/api/order/update`, body);
      fetchOrders();
    } catch (error) {
      console.error("Error accepting order:", error);
    }
  };

  return (
    <div className="vendormain">
      <Navbar type="add" vendorId={userId} />
      <div className="vendortop">
        <h2>Orders</h2>
      </div>
      <div className="storebody orderbody ">
        {orders.map((order) => (
          <div className="ordercard" key={order._id}>
            <hr />
            {order.orderStatus === "Pending" ? (
              <div className="ordercardstatus">
                <div
                  className="ordercardstatusleft"
                  onClick={() => handleStatus(order._id, "Rejected")}
                >
                  Reject
                </div>
                <div
                  className="ordercardstatusright"
                  onClick={() => handleStatus(order._id, "Accepted")}
                >
                  Accept
                </div>
              </div>
            ) : (
              <div className="ordercardstatus">
                <h5>Order: {order.orderStatus}</h5>
              </div>
            )}
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
          </div>
        ))}
      </div>
    </div>
  );
}
