import React from "react";
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
                <a className="navbar-brand text-uppercase" href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>

              <nav className="navbar-menu float-right">
                <div className="nav-menu ul-li">
                  <ul>
                    <li className="menu-item-has-children ul-li-block">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="shop.html">shop</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li className="menu-item-has-children ul-li-block">
                      <a href="#!">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="teacher.html">Teacher</a>
                        </li>
                        <li>
                          <a href="teacher-details.html">Teacher Details</a>
                        </li>
                      </ul>
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
