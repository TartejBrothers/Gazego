import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import axios from "axios";
import "../../styles/vendor/vendormenu.css";
import { useParams } from "react-router-dom";
export default function Menu() {
  const { userId } = useParams();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [menu, setMenu] = useState([]);

  const getMenu = async () => {
    const data = {};
    data.vendorId = userId;

    console.log("User Id :", userId);
    try {
      const response = await axios.post(`${baseURL}/api/vendormenu`, data);
      setMenu(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMenu();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deleteMenu = (_id) => {
    axios
      .delete(`${baseURL}/api/deletemenu`, { data: { _id } })
      .then((response) => {
        if (response.data.message === "Item deleted successfully") {
          setMenu(menu.filter((menuitem) => menuitem._id !== _id));
        }
      })
      .catch((error) => {
        console.error("There was an error deleting the vendor!", error);
      });
  };
  return (
    <div className="vendormain">
      <Navbar />
      <div className="vendorbody">
        <table>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Item Price</th>

              <th>Item Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((menuitem, index) => (
              <tr key={menuitem._id}>
                <td>{index + 1}</td>
                <td>{menuitem.itemName}</td>
                <td>{menuitem.itemPrice}</td>

                <td>
                  <img src={menuitem.itemImage} alt="Menu Item" />
                </td>
                <td>
                  <button onClick={() => deleteMenu(menuitem._id)}>
                    Remove Item
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
