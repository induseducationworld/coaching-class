import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";
import aboutImage from "../../assets/img/about/abt.jpg"; // Adjust the path according to your project structure

const About = () => {
  return (
    <section id="about-us" className="about-us-section home-secound">
      <Container>
        <Row>
          <Col md={5}>
            <Card className="about-resigter-form backgroud-style relative-position">
              <Card.Body>
                <div className="register-content">
                  <div className="register-fomr-title text-center">
                    <h3 className="bold-font">
                      <span>Get a</span> Free Registration.
                    </h3>
                    <p>More Than 122K Online Available Courses</p>
                  </div>
                  <Form
                    className="register-form-area contact_form"
                    action="#"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <Form.Group className="contact-info">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        name="name"
                      />
                    </Form.Group>
                    <Form.Group className="contact-info">
                      <Form.Control
                        type="number"
                        placeholder="Your Number"
                        name="nbm"
                      />
                    </Form.Group>
                    <Form.Group className="contact-info">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        name="email"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control as="select" defaultValue="Select Course">
                        <option value="9">Select Course</option>
                        <option value="10">Web Design</option>
                        <option value="11">Web Development</option>
                        <option value="12">Php Core</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="contact-info">
                      <Form.Control
                        type="text"
                        id="datepicker"
                        placeholder="Date"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                      />
                    </Form.Group>
                    <div className="nws-button text-uppercase text-center white text-capitalize">
                      <Button type="submit" className="btn btn-primary">
                        SUBMIT REQUEST
                      </Button>
                    </div>
                  </Form>
                </div>
              </Card.Body>
            </Card>
            <div className="bg-mockup">
              <img src={aboutImage} alt="About Us" className="img-fluid" />
            </div>
          </Col>

          <Col md={7}>
            <div className="about-us-text">
              <div className="section-title relative-position mb20 headline text-left">
                <span className="subtitle ml42 text-uppercase">
                  SHORT ABOUT US
                </span>
                <h2>
                  We are <span>Genius Course</span> working since 1980.
                </h2>
                <p>
                  We take our mission of increasing global access to quality
                  education seriously. We connect learners to the best
                  universities and institutions from around the world.
                </p>
              </div>
              <div className="about-content-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam volutpat. Ut wisi enim ad minim veniam. magna aliquam
                  volutpat. Ut wisi enim ad minim veniam.
                </p>
                <div className="about-list mb65 ul-li-block">
                  <ul>
                    <li>Professional And Experienced Since 1980</li>
                    <li>
                      We Connect Learners To The Best Universities From Around
                      The World
                    </li>
                    <li>
                      Our Mission Increasing Global Access To Quality Education
                    </li>
                    <li>100K Online Available Courses</li>
                  </ul>
                </div>
                <div className="about-btn">
                  <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                    <a href="#">
                      About Us <FaCaretRight />
                    </a>
                  </div>
                  <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                    <a href="#">
                      Contact Us <FaCaretRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
