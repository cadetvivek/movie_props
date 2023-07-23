import React from 'react';
import './Navbar.css'; // Import your custom CSS file

const MyNavbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=3.12.2" alt="" width="50px" /></div>
      <div className="search-container">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default MyNavbar;
