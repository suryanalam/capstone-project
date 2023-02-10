import "./App.css";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

//pages
import Customers from "./pages/customers/Customers";
import Dashboard from "./pages/dashboard/Dashboard";
import Products from "./pages/products/Products";
import Profile from "./pages/profile/Profile";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="body-container">
        <Routes>
          <Route index path="/" element={<Dashboard />}></Route>
          <Route index path="/capstone-project" element={<Dashboard />}></Route>
          <Route index path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Customers" element={<Customers />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
