import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Stores from "./components/stores";
import Menucard from "./components/menu";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/menu/:storeId" element={<Menucard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
