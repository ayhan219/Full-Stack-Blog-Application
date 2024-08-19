import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <h4>Blog</h4>
      </div>
      <div className="navbar-mid">
        <div className="search">
          <input type="text" placeholder="Search Blog" />
          <CiSearch className="search-icon" />
        </div>
      </div>
      <div className="navbar-right">
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
