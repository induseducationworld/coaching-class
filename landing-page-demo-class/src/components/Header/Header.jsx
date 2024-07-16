import React from "react";

const Header = () => {
  return (
    <header>
      <div id="main-menu" className="main-menu-container">
        <div className="main-menu">
          <div className="container">
            <div className="navbar-default">
              <div className="navbar-header float-left">
                <a className="navbar-brand text-uppercase" href="#">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>

              <div className="select-lang">
                <select>
                  <option value="9" selected="">
                    ENG
                  </option>
                  <option value="10">BAN</option>
                  <option value="11">ARB</option>
                  <option value="12">FRN</option>
                </select>
              </div>
              <div className="cart-search float-right ul-li">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fas fa-shopping-bag"></i>
                    </a>
                  </li>
                  <li>
                    <button type="button" className="toggle-overlay search-btn">
                      <i className="fas fa-search"></i>
                    </button>
                    <div className="search-body">
                      <div className="search-form">
                        <form action="#">
                          <input
                            className="search-input"
                            type="search"
                            placeholder="Search Here"
                          />
                          <div className="outer-close toggle-overlay">
                            <button type="button" className="search-close">
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <nav className="navbar-menu float-right">
                <div className="nav-menu ul-li">
                  <ul>
                    <li className="menu-item-has-children ul-li-block">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-1.html">Home 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 4</a>
                        </li>
                      </ul>
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
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Blog Single</a>
                        </li>
                        <li>
                          <a href="course.html">Course</a>
                        </li>
                        <li>
                          <a href="course-details.html">Course Details</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                          <a href="check-out.html">Check Out</a>
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
