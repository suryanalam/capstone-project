import React from "react";
import "./Sidebar.css";
import profile_img from "../../profile_img.png";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="circle-div"></div>

      <div className="profile-div">
        <h2 className="username">Surya Nalam</h2>
        <p className="job">Software Developer</p>
      </div>

      <div className="list-div">
        <NavLink to="Dashboard" className="list-item" active>
          <p>Dashboard</p>{" "}
        </NavLink>
        <NavLink to="Products" className="list-item">
          <p>Products</p>{" "}
        </NavLink>
        <NavLink to="Customers" className="list-item">
          <p>Customers</p>{" "}
        </NavLink>
        <NavLink to="Profile" className="list-item">
          <p>My profile</p>{" "}
        </NavLink>
      </div>

      <div className="footer-div">
        <p>made by Surya Nalam</p>
        <p>
          <span>&copy;</span> Copyright 2023
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
