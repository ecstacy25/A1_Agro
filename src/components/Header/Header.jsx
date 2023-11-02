import "./header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";


const Header = () => {
  
  const [activeNav, setActiveNav] = useState("#Home");

  return (
    // <nav className="navbar">
    // <div className='set'>
        

        <nav>
          <div className='nav1'>
            <div className='logo'>
              <img className='logo' src={logo} alt='logo' width={40} />
            </div>

            <div className='nav2'>
              <a
                href='#Home'
                onClick={() => setActiveNav("#Home")}
                className={activeNav === "#Home" ? "active" : ""}
              >
                Home
              </a>
              <a
                href='#about'
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
              >
                About Us
              </a>
              <a
                href='#services'
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
              >
                Services
              </a>
              <a
                href='#contacts'
                onClick={() => setActiveNav("#contacts")}
                className={activeNav === "#contacts" ? "active" : ""}
              >
                Contacts
              </a>
            </div>
          </div>
        </nav>
    //   </div>
    // </nav>
  );
};

export default Header;
