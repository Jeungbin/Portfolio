import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const starIconRef = useRef(null);
  const linksContainerRef = useRef(null);
  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.height = "100vh";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link style={linkStyle} to="/">
          <p className="main-name">
            Jeungbin Han<br></br>
          </p>
        </Link>
        <div className="big-screen-nav-containers">
          <ul className="big-screen-nav-links">
            <li>
              <Link style={linkStyle} to="/">
                <p className="big-screen-nav-link">Home</p>
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/about">
                <p className="big-screen-nav-link">About</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <i
        onClick={() => {
          setShowLinks(!showLinks);
        }}
        ref={starIconRef}
        className={`fa-solid fa-star ${showLinks ? "disapearItem" : ""}`}
      ></i>
      <div className="links-container" ref={linksContainerRef}>
        <i
          className="fa-regular fa-circle-xmark"
          onClick={() => setShowLinks(!showLinks)}
        ></i>
        <ul className="nav-links">
          <li>
            <Link style={linkStyle} to="/">
              <p className="nav-link">Home</p>
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/about">
              <p className="nav-link">About</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
