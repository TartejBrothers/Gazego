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
  const [genPassword, setGenPassword] = useState("");
  const [storeImage, setStoreImage] = useState("");
  const [vendorGPay, setvendorGPay] = useState("");

  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setStoreLocation(location);
  };
  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const vendorPassword = generatePassword();
    const vendor = {
      name: vendorName,
      email: vendorEmail,
      password: vendorPassword,
      phoneNumber: vendorPhone,
      role: "vendor",
    };

    try {
      const userResponse = await axios.post(`${baseURL}/api/user`, vendor);
      setGenPassword(vendorPassword);

      const vendorData = {
        vendorName,
        vendorEmail,
        vendorPhone,
        storeName,
        storeLocation,
        storeDescription,
        storeImage,
        vendorId: userResponse.data.id,
        vendorGPay,
      };

      await axios.post(`${baseURL}/api/addvendor`, vendorData);
      console.log("Vendor added successfully");
    } catch (error) {
      console.error("There was an error adding the vendor!", error);
      alert("There was an error adding the vendor!");
    }
  };

  return (
    <div className="vendormainadd">
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
            <select id="storelocation" onChange={handleLocationChange}>
              <option value="" selected disabled>
                Choose Location
              </option>
              <option value="Gazebo">Gazebo</option>
              <option value="Northsquare">North Square</option>
              <option value="Academicblock1">Academic Block 1</option>
            </select>
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
          <div className="inputdivvendor">
            <label htmlFor="image">Store Image URL</label>
            <input
              type="text"
              name="image"
              value={storeImage}
              onChange={(event) => setStoreImage(event.target.value)}
            />
          </div>
          <div className="inputdivvendor">
            <label htmlFor="vendorGPay">Google Pay QR Code</label>
            <input
              type="text"
              name="vendorGPay"
              value={vendorGPay}
              onChange={(event) => setvendorGPay(event.target.value)}
            />
          </div>

          <div className="inputdivvendorsubmit">
            <button type="submit">Add Vendor</button>
          </div>
          {genPassword && (
            <div className="passworddiv">
              <p>Password Generated: {genPassword}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
