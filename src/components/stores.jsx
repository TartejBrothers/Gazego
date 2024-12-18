import React, { useState, useEffect } from "react";
import "../styles/stores.css";
import Navbar from "./navbar";
import StoreCard from "./elements/storecard";
import searchicon from "../images/icons/search.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Stores() {
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [stores, setStores] = useState([]);
  const NavigateToMenu = (storeId) => {
    navigate(`/menu/${storeId}`);
  };
  const getStores = async (storeLocation) => {
    const data = storeLocation ? { storeLocation } : {};
    try {
      setLoading(true);
      const response = await axios.post(`${baseURL}/api/vendors`, data);
      setStores(response.data);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStores();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (location) {
      console.log(location);
      getStores(location);
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredStores = stores.filter((store) =>
    store.storeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="storesmain">
      <Navbar setLocation={setLocation} />
      <div className="storetop">
        <h1>Looking For?</h1>
        <div className="storesearch">
          <input
            type="text"
            placeholder="Search for stores"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img src={searchicon} alt="Search" />
        </div>
      </div>
      <div className="storebody">
        {loading ? (
          <h2 style={{ padding: 10 }}>Loading...</h2>
        ) : (
          <div className="storerow">
            {filteredStores.map((store, index) => (
              <div
                className="storecardbox"
                key={index}
                onClick={() => NavigateToMenu(store.vendorId)}
              >
                <StoreCard
                  name={store.storeName}
                  description={store.storeDescription}
                  image={store.storeImage}
                  phone={store.vendorPhone}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
