import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const teacherData = [
  {
    name: "Daniel Alvares",
    designation: "Mobile Apps",
    imgSrc: "assets/img/teacher/tb-1.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
    },
  },
  {
    name: "Daniel Alvares",
    designation: "Mobile Apps",
    imgSrc: "assets/img/teacher/tb-2.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
    },
  },
  {
    name: "Juliana Hernandes",
    designation: "Web Design",
    imgSrc: "assets/img/teacher/tb-3.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
    },
  },
  // Add more teachers as needed
];

const Teacher = () => {
  return (
    <section id="teacher-2" className="second-teacher-section">
      <Container>
        <div className="section-title mb35 headline text-left">
          <span className="subtitle ml42 text-uppercase">GENIUS STAFFS</span>
          <h2>
            Genius <span>Teachers.</span>
          </h2>
        </div>
        <Row>
          {teacherData.map((teacher, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="text-center teacher-card">
                <div className="teacher-img-social">
                  <Card.Img
                    variant="top"
                    src={teacher.imgSrc}
                    alt={teacher.name}
                  />
                  <div className="blakish-overlay"></div>
                  <div className="teacher-social-list">
                    <ul>
                      <li>
                        <a href={teacher.socialLinks.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={teacher.socialLinks.twitter}>
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={teacher.socialLinks.googlePlus}>
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>{teacher.designation}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button variant="primary" className="genius-btn text-uppercase">
            All teacher <i className="fas fa-caret-right"></i>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Teacher;
