import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about2 from "../../assets/img/about/abt-2.jpg";
import about3 from "../../assets/img/about/abt-3.jpg";
import about4 from "../../assets/img/about/abt-4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import ct from "../../assets/img/teacher/ct-1.jpg";

const AboutUsSection = () => {
  return (
    <section id="about-page" className="about-page-section">
      <Container>
        <Row>
          <Col md={9}>
            <div className="about-us-content-item">
              <div className="about-gallery">
                <div className="about-gallery-img grid-1">
                  <img src={about2} alt="" />
                </div>
                <div className="about-gallery-img grid-2">
                  <img src={about3} alt="" />
                </div>
                <div className="about-gallery-img grid-2">
                  <img src={about4} alt="" />
                </div>
              </div>

              <div className="about-text-item" id="#message">
                <div className="section-title-2 headline text-left">
                  <h2>
                    <span>Message from our Director</span>
                  </h2>
                </div>
                <div>
                  <h2>
                    <span> Greetings!</span>
                  </h2>
                  <p>
                    At the outset, we express our gratitude for best wishes and
                    trust in INDUS EDUCATION WORLD. We stand proud of our very
                    dedicated, extremely qualified professionals having more
                    than 20 years of teaching experience and a track record of
                    producing toppers in NEET for consecutive years.
                  </p>
                </div>
                <div>
                  <p>
                    We owe responsibility towards every single student who takes
                    admission in our institute, and we ensure that we contribute
                    to each student's success through our collective efforts and
                    hard work. It is my immense pleasure to welcome you to Indus
                    NEET classes where providing the best education is a norm.
                    We are confident that with Indus NEET classes, your child's
                    future is in safe and progressive hands.
                  </p>
                  <h2>
                    <span> Best Wishes </span>
                    <span> Aparna Teotia</span>
                  </h2>
                </div>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="side-bar-widget first-widget">
              <h2 className="widget-title text-capitalize">
                <span>Find A Course </span>&amp; Sign up Today.
              </h2>
              <div className="course-img">
                <img src={ct} alt="" />
              </div>
              <div className="course-desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt.
                </p>
              </div>
              <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                <a href="#">
                  VIEW ONLINE COURSES <i className="fas fa-caret-right"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
