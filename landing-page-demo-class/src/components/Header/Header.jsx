import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/img/logo/logo.png";

const Header = () => {
  return (
    <header>
      <div id="main-menu" className="main-menu-container">
        <div className="main-menu">
          <div className="container">
            <div className="navbar-default">
              <div className="navbar-header float-left">
                <Link className="navbar-brand text-uppercase" to="/">
                  {" "}
                  {/* Use Link component */}
                  {/* <img src={logo} alt="logo" /> */}
                  <h2 style={{ color: "#fff" }}>
                    <span>Indus Education World</span>
                  </h2>
                </Link>
              </div>

              <nav className="navbar-menu float-right">
                <div className="nav-menu ul-li">
                  <ul>
                    <li className="menu-item-has-children ul-li-block">
                      <Link to="/">Home</Link> {/* Use Link component */}
                    </li>
                    <li>
                      <a href="#about-us">About Us</a>
                    </li>
                    <li>
                      <a href="#message">Message</a>
                    </li>
                    <li>
                      <a href="#contactus">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
