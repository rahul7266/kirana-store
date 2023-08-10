import React from "react";
import insta_logo from "../img/insta_logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
       <img src={insta_logo} alt="" />
      
      <ul>
      <Link to="/addproducts">
          <li>Add Product</li>
        </Link>

        <Link to="/signup">
          <li>SignUp</li>
        </Link>

        <Link to="signin">
          <li>SignIn</li>
        </Link>

        <Link to="profile">
          <li>Profile</li>
        </Link>
      </ul>
    </div>
  );
}
