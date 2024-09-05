import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Stores from "./components/stores";
import Menucard from "./components/menu";
import ViewMenu from "./components/vendor/menu";
import AddMenu from "./components/vendor/addmenu";
import ViewVendors from "./components/admin/viewvendors";
import AddVendor from "./components/admin/addvendor";
import Orders from "./components/orders";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/menu/:userId" element={<Menucard />} />
          <Route path="/vendor/menu/:userId" element={<ViewMenu />} />
          <Route path="/vendor/addmenu/:userId" element={<AddMenu />} />
          <Route path="/admin/vendors" element={<ViewVendors />} />
          <Route path="/admin/addvendor" element={<AddVendor />} />
          <Route path="/orders/:userId" element={<Orders />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
