import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [activeNav, setActiveNav] = useState("#Home");
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img className='logo' src={logo} alt='logo'  width={400} />
          {/* <h2>A1 Agro</h2> */}
            {/* <i className="fas fa-code"></i> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
                href='#Home'
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </a>
              <a
                href='#ProductList'
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Our Products
              </a>
              <a
                href='#about'
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </a>
              
              <a
                href='#contacts'
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contacts
              </a>
              
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
