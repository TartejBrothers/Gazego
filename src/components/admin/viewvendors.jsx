import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import "../../styles/admin/vendors.css";

export default function ViewVendors() {
  const [vendors, setVendors] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .post(`${baseURL}/api/vendors`, {})
      .then((response) => {
        setVendors(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the vendors!", error);
      });
  }, []);

  const deleteVendor = (vendorEmail) => {
    axios
      .delete(`${baseURL}/api/deletevendor`, { data: { vendorEmail } })
      .then((response) => {
        if (response.data.message === "Vendor deleted successfully") {
          setVendors(
            vendors.filter((vendor) => vendor.vendorEmail !== vendorEmail)
          );
        }
      })
      .catch((error) => {
        console.error("There was an error deleting the vendor!", error);
      });
  };

  return (
    <div className="vendormain">
      <Navbar type="view" />
      <div className="vendorbody">
        <table>
          <thead>
            <tr>
              <th>Vendor ID</th>
              <th>Vendor Name</th>
              <th>Vendor Email</th>
              <th>Vendor Phone</th>
              <th>Store Name</th>
              <th>Store Location</th>
              <th>Store Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor, index) => (
              <tr key={vendor._id}>
                <td>{index + 1}</td>
                <td>{vendor.vendorName}</td>
                <td>{vendor.vendorEmail}</td>
                <td>{vendor.vendorPhone}</td>
                <td>{vendor.storeName}</td>
                <td>{vendor.storeLocation}</td>
                <td>{vendor.storeDescription}</td>
                <td>
                  <button onClick={() => deleteVendor(vendor.vendorEmail)}>
                    Remove Vendor
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
