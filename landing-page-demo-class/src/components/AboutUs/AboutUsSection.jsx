import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarAlt,
  faChevronCircleRight,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FiSearch } from "react-icons/fi"; // Example of using react-icons
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

              <div className="about-text-item">
                <div className="section-title-2 headline text-left">
                  <h2>
                    We Are <span>Genius Course,</span> Online Course Since 1990
                  </h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit praesent luptatum
                  zzril delenit augue duis dolore te feugait nulla facilisi.
                </p>
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
                  Lorem ipsum dolor sit consectetuer adipiscing elit, sed diam
                  nonummy nibh euismod tincidunt.
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
