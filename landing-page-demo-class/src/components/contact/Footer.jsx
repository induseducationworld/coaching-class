// src/components/Footer.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import bt from "../../assets/img/banner/bt.png";
import logo from "../../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <div className="footer_2 backgroud-style">
      <Container>
        <div className="back-top text-center mb45">
          <a className="scrollup" href="#">
            <img src={bt} alt="" />
          </a>
        </div>
        <div className="footer_2_logo text-center">
          {/* <img src={logo} alt="" /> */}
          INDUS EDUCATION WORLD
        </div>

        <div className="footer_2_subs text-center">
          <p>
            We take our mission of increasing global access to quality education
            seriously.
          </p>
          <div className="subs-form relative-position">
            <form action="#" method="post">
              <input
                className="course"
                name="course"
                type="email"
                placeholder="Email Address."
              />
              <div className="nws-button text-center gradient-bg text-uppercase">
                <Button type="submit" value="Submit">
                  Subscribe now
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="copy-right-menu">
          <Row>
            <Col md={5}>
              <div className="copy-right-text">
                <p>
                  © 2024 - Designed & Developed by{" "}
                  <a href="https://pickyvibe.com/" style={{ color: "#2ECC40" }}>
                    {" "}
                    Picky Vibe LLP
                  </a>
                  . All rights reserved
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-social text-center ul-li">
                <ul>
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="copy-right-menu-item float-right ul-li">
                <ul>
                  <li>
                    <a href="#">License</a>
                  </li>
                  <li>
                    <a href="#">Privacy & Policy</a>
                  </li>
                  <li>
                    <a href="#">Term Of Service</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
