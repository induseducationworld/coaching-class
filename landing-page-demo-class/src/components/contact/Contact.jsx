import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import bt from "../../assets/img/banner/bt.png";
import logo from "../../assets/img/logo/logo.png";
const Contact = () => {
  return (
    <section
      id="contact_secound"
      className="contact_secound_section backgroud-style"
    >
      <Container>
        <div className="contact_secound_content">
          <Row>
            <Col md={6}>
              <div className="contact-left-content">
                <div className="section-title mb45 headline text-left">
                  <span className="subtitle ml42 text-uppercase">
                    CONTACT US
                  </span>
                  <h2>
                    <span>Get in Touch</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet ipsum
                    dolor sit amet, consectetuer adipiscing elit.
                  </p>
                </div>

                <div className="contact-address">
                  <div className="contact-address-details">
                    <div className="address-icon relative-position text-center float-left">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="address-details ul-li-block">
                      <ul>
                        <li>
                          <span>Primary: </span>Last Vegas, 120 Graphic Street,
                          US
                        </li>
                        <li>
                          <span>Second: </span>Califorinia, 88 Design Street, US
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="contact-address-details">
                    <div className="address-icon relative-position text-center float-left">
                      <FaPhone />
                    </div>
                    <div className="address-details ul-li-block">
                      <ul>
                        <li>
                          <span>Primary: </span>(100) 3434 55666
                        </li>
                        <li>
                          <span>Second: </span>(20) 3434 9999
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="contact-address-details">
                    <div className="address-icon relative-position text-center float-left">
                      <FaEnvelope />
                    </div>
                    <div className="address-details ul-li-block">
                      <ul>
                        <li>
                          <span>Primary: </span>info@geniuscourse.com
                        </li>
                        <li>
                          <span>Second: </span>mail@genius.info
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="contact_secound_form">
                <div className="section-title-2 mb65 headline text-left">
                  <h2>Send Us a message</h2>
                </div>
                <form
                  className="contact_form"
                  action="#"
                  method="POST"
                  encType="multipart/form-data"
                >
                  <div className="contact-info">
                    <input
                      className="name"
                      name="name"
                      type="text"
                      placeholder="Your Name."
                    />
                  </div>
                  <div className="contact-info">
                    <input
                      className="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <textarea placeholder="Message."></textarea>
                  <div className="nws-button text-center gradient-bg text-capitalize">
                    <Button type="submit" value="Submit">
                      SEND MESSAGE NOW <FaCaretRight />
                    </Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="footer_2 backgroud-style">
        <Container>
          <div className="back-top text-center mb45">
            <a className="scrollup" href="#">
              <img src={bt} alt="" />
            </a>
          </div>
          <div className="footer_2_logo text-center">
            <img src={logo} alt="" />
          </div>

          <div className="footer_2_subs text-center">
            <p>
              We take our mission of increasing global access to quality
              education seriously.{" "}
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
                    <a
                      href="https://pickyvibe.com/"
                      style={{ color: "#2ECC40" }}
                    >
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
    </section>
  );
};

export default Contact;
