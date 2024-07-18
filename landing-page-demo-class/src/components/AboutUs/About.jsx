import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";
import Register from "./Register"; // Import the RegisterForm component
import aboutImage from "../../assets/img/about/abt.jpg"; // Adjust the path according to your project structure

const About = () => {
  return (
    <section id="about-us" className="about-us-section home-secound">
      <Container>
        <Row>
          <Col md={5}>
            <Register />

            <div className="bg-mockup">
              <img src={aboutImage} alt="About Us" className="img-fluid" />
            </div>
          </Col>

          <Col md={7}>
            <div className="about-us-text">
              <div className="section-title relative-position mb20 headline text-left">
                <span className="subtitle ml42 text-uppercase">ABOUT US</span>
                <h2>
                  We are <span>Indus Education World</span> working since 1980.
                </h2>
                <p>
                  Indus Neet is an initiative by a group of Doctors and IIT'ians
                  with more than 20 years of Teaching experience. We specialize
                  in preparing droppers, 12th pass out students, and offer
                  morning batches specifically tailored for 12th pass students
                  aiming to crack NEET exams.
                </p>
              </div>
              <div className="about-content-text">
                <p>
                  We take our mission of increasing global access to quality
                  education seriously. We connect learners to the best
                  universities and institutions from around the world. Drop Year
                  Batch start date:
                </p>
                <div className="about-list mb65 ul-li-block">
                  <ul>
                    <li>1st August 2024 Classes, 4 days a week.</li>
                    <li>2 Free Trial classes per subject</li>
                    <li>Study Modules</li>
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
