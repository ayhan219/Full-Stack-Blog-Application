import React from "react";
import "./NavbarLogin.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const NavbarLogin = ({ handleSetLogin }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Clear JWT token from localStorage
    localStorage.removeItem('token');

    // Optionally, update login state if needed
    if (handleSetLogin) handleSetLogin(false);

    // Redirect to the login page or home page
    navigate('/login');
  };

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
        <a href="/createpost" >Create Blog</a>
        <button onClick={handleSignOut} className="logout-btn">Log Out</button>
      </div>
    </div>
  );
}

export default NavbarLogin;
