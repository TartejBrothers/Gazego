import React from "react";
import Navbar from "./navbar";
import "../../styles/admin/vendors.css";
export default function ViewVendors() {
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
            <tr>
              <td>1</td>
              <td>Vendor 1</td>
              <td>vendor@gmail.com</td>
              <td>1234567890</td>
              <td>Lorem, ipsum.</td>
              <td>Gazebo</td>
              <td>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corrupti, rem.
              </td>
              <td>
                <button>Remove Vendor</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Vendor 2</td>
              <td>vendor2@gmail.com</td>
              <td>1234567891</td>
              <td>Lorem, ipsum.</td>
              <td>Gazebo</td>
              <td>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores, incidunt!
              </td>
              <td>
                <button>Remove Vendor</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
