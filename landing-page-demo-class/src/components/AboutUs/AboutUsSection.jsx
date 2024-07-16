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

const AboutUsSection = () => {
  return (
    <section id="about-page" className="about-page-section">
      <Container>
        <Row>
          <Col md={9}>
            <div className="about-us-content-item">
              <div className="about-gallery">
                <div className="about-gallery-img grid-1">
                  <img src="assets/img/about/abt-2.jpg" alt="" />
                </div>
                <div className="about-gallery-img grid-2">
                  <img src="assets/img/about/abt-3.jpg" alt="" />
                </div>
                <div className="about-gallery-img grid-2">
                  <img src="assets/img/about/abt-4.jpg" alt="" />
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

              <div className="course-teacher about-teacher-2">
                <div className="course-advantage about-teacher-2">
                  <div className="section-title-2 headline text-left">
                    <h2>
                      Genius Course <span>Advantages</span>
                    </h2>
                  </div>
                  <div className="service-slide_3">
                    <div className="service-text-icon">
                      <div className="service-icon float-left">
                        <FontAwesomeIcon
                          icon={faBolt}
                          className="text-gradiant"
                        />
                      </div>
                      <div className="service-text">
                        <h3 className="bold-font">The Power Of Education.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectuerer adipiscing
                          elit set diam nonnumynibh.
                        </p>
                      </div>
                    </div>
                    <div className="service-text-icon">
                      <div className="service-icon float-left">
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-gradiant"
                        />
                      </div>
                      <div className="service-text">
                        <h3 className="bold-font">Best Online Education.</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectuerer adipiscing
                          elit set diam nonnumynibh.
                        </p>
                      </div>
                    </div>
                    <div className="service-text-icon">
                      <div className="service-icon float-left">
                        <FontAwesomeIcon
                          icon={faCalendarAlt}
                          className="text-gradiant"
                        />
                      </div>
                      <div className="service-text">
                        <h3 className="bold-font">
                          Education For All Student.
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet consectuerer adipiscing
                          elit set diam nonnumynibh.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-course-categori about-teacher-2">
                  <div className="section-title-2 headline text-left">
                    <h2>
                      Course <span>Categories</span>
                    </h2>
                  </div>
                  <div className="category-slide text-center">
                    <div className="category-icon-title text-center">
                      <div className="category-icon">
                        <FontAwesomeIcon
                          icon={faBolt}
                          className="text-gradiant"
                        />
                      </div>
                      <div className="category-title">
                        <h4>Responsive Website</h4>
                      </div>
                    </div>

                    <div className="category-icon-title text-center">
                      <div className="category-icon">
                        <FontAwesomeIcon
                          icon={faSearch}
                          className="text-gradiant"
                        />
                      </div>
                      <div className="category-title">
                        <h4>IOS Applications</h4>
                      </div>
                    </div>

                    <div className="category-icon-title text-center">
                      <div className="category-icon">
                        <FiSearch />
                      </div>
                      <div className="category-title">
                        <h4>Graphic Design</h4>
                      </div>
                    </div>
                  </div>
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
                <img src="assets/img/teacher/ct-1.jpg" alt="" />
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

            <div className="side-bar-widget">
              <h2 className="widget-title text-capitalize">
                <span>Related </span>News.
              </h2>
              <div className="latest-news-posts">
                <div className="latest-news-area">
                  <div className="latest-news-thumbnile relative-position">
                    <img src="assets/img/blog/lb-1.jpg" alt="" />
                    <div className="hover-search">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="blakish-overlay"></div>
                  </div>
                  <div className="date-meta">
                    <FontAwesomeIcon icon={faCalendarAlt} /> 26 April 2018
                  </div>
                  <h3 className="latest-title bold-font">
                    <a href="#">Affiliate Marketing A Beginner’s Guide.</a>
                  </h3>
                </div>

                <div className="latest-news-posts">
                  <div className="latest-news-area">
                    <div className="latest-news-thumbnile relative-position">
                      <img src="assets/img/blog/lb-2.jpg" alt="" />
                      <div className="hover-search">
                        <FontAwesomeIcon icon={faSearch} />
                      </div>
                      <div className="blakish-overlay"></div>
                    </div>
                    <div className="date-meta">
                      <FontAwesomeIcon icon={faCalendarAlt} /> 26 April 2018
                    </div>
                    <h3 className="latest-title bold-font">
                      <a href="#">No.1 The Best Online Course 2018.</a>
                    </h3>
                  </div>
                </div>

                <div className="view-all-btn bold-font">
                  <a href="#">
                    View All News{" "}
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </a>
                </div>
              </div>
            </div>

            <div className="side-bar-widget">
              <h2 className="widget-title text-capitalize">
                <span>Featured</span> Course.
              </h2>
              <div className="featured-course">
                <div className="best-course-pic-text relative-position">
                  <div className="best-course-pic relative-position">
                    <img src="assets/img/blog/fb-1.jpg" alt="" />
                    <div className="trend-badge-2 text-center text-uppercase">
                      <FontAwesomeIcon icon={faBolt} />
                      <span>Trending</span>
                    </div>
                  </div>
                  <div className="best-course-text">
                    <div className="course-title mb20 headline relative-position">
                      <h3>
                        <a href="#">
                          Fully Responsive Web Design &amp; Development.
                        </a>
                      </h3>
                    </div>
                    <div className="course-meta">
                      <span className="course-category">
                        <a href="#">Web Design</a>
                      </span>
                      <span className="course-author">
                        <a href="#">By:David</a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="view-all-btn bold-font">
                  <a href="#">
                    View All Courses{" "}
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
