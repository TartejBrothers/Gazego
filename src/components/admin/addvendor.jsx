import React from "react";
import Navbar from "./navbar";

export default function AddVendor() {
  return (
    <div className="vendormain">
      <Navbar type="add" />
      <div className="vendortop">
        <h2>Add Vendor</h2>
        <div className="addvendorbody">
          <form>
            <div className="inputdivvendor">
              <label htmlFor="name">Vendor Name</label>
              <input type="text" name="vendorName" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
