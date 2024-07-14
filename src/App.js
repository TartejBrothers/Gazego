import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import Stores from "./components/stores";
import Menucard from "./components/menu";
import ViewVendors from "./components/admin/viewvendors";
import AddVendor from "./components/admin/addvendor";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/menu/:storeId" element={<Menucard />} />
          <Route path="/admin/vendors" element={<ViewVendors />} />
          <Route path="/admin/addvendor" element={<AddVendor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
