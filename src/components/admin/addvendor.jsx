import React, { useState } from "react";
import axios from "axios";
import Navbar from "./navbar";
import "../../styles/admin/addvendor.css";

export default function AddVendor() {
  const [vendorName, setVendorName] = useState("");
  const [vendorEmail, setVendorEmail] = useState("");
  const [vendorPhone, setVendorPhone] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storeImage, setStoreImage] = useState("");
  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleSubmit = (event) => {
    event.preventDefault();
    const vendorData = {
      vendorName,
      vendorEmail,
      vendorPhone,
      storeName,
      storeLocation,
      storeDescription,
      storeImage,
    };
    axios
      .post(`${baseURL}/api/addvendor`, vendorData)
      .then((response) => {
        console.log("Vendor added successfully", response);
      })
      .catch((error) => {
        console.error("There was an error adding the vendor!", error);
      });
  };

  return (
    <div className="vendormain">
      <Navbar type="add" />
      <div className="vendortop">
        <h2>Add Vendor</h2>
      </div>
      <div className="addvendorbody">
        <form onSubmit={handleSubmit}>
          <div className="inputdivvendor">
            <label htmlFor="name">Vendor Name</label>
            <input
              type="text"
              name="vendorName"
              value={vendorName}
              onChange={(event) => setVendorName(event.target.value)}
            />
          </div>
          <div className="inputdivvendor">
            <label htmlFor="email">Vendor Email</label>
            <input
              type="email"
              name="vendorEmail"
              value={vendorEmail}
              onChange={(event) => setVendorEmail(event.target.value)}
            />
          </div>
          <div className="inputdivvendor">
            <label htmlFor="phone">Vendor Phone</label>
            <input
              type="tel"
              name="vendorPhone"
              value={vendorPhone}
              onChange={(event) => setVendorPhone(event.target.value)}
            />
          </div>
          <div className="inputdivvendor">
            <label htmlFor="store">Store Name</label>
            <input
              type="text"
              name="storeName"
              value={storeName}
              onChange={(event) => setStoreName(event.target.value)}
            />
          </div>
          <div className="inputdivvendor">
            <label htmlFor="location">Store Location</label>
            <input
              type="text"
              name="storeLocation"
              value={storeLocation}
              onChange={(event) => setStoreLocation(event.target.value)}
            />
          </div>
          <div className="inputdivvendor">
            <label htmlFor="description">Store Description</label>
            <input
              type="text"
              name="storeDescription"
              value={storeDescription}
              onChange={(event) => setStoreDescription(event.target.value)}
            />
          </div>
          <div className="inputdivvendorfull">
            <label htmlFor="image">Store Image URL</label>
            <input
              type="text"
              name="storeImage"
              value={storeImage}
              onChange={(event) => setStoreImage(event.target.value)}
            />
          </div>
          <br />
          <div className="inputdivvendorsubmit">
            <button type="submit">Add Vendor</button>
          </div>
        </form>
      </div>
    </div>
  );
}
