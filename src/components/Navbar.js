import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#dee2e6",
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link style={linkStyle} to="/">
          <h1 className="main-name">BINY PORTFOLIO</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link style={linkStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={linkStyle} to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
