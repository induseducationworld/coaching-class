import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaCaretRight,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./teacher.css";

const teacherData = [
  {
    name: "Arun Teotia",
    designation: "Physics Faculty",
    imgSrc: "assets/img/teacher/tb-1.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
    },
    experience: "B.Tech IIT Roorkee, (25 Years of Teaching Experience)",
  },
  {
    name: "Tarun Singh",
    designation: "Chemistry Faculty",
    imgSrc: "assets/img/teacher/tb-2.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
    },
    experience: "B.Tech, (20 Years Teaching Experience)",
  },
  {
    name: "Dr. Tarun",
    designation: "Bio Faculty",
    imgSrc: "assets/img/teacher/tb-3.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      googlePlus: "#",
    },
    experience: "PHD BHU, (20 Years of Teaching Experience)",
  },
  // Add more teachers as needed
];

const Teacher = () => {
  return (
    <section id="teacher-2" className="second-teacher-section">
      <Container>
        <div className="section-title mb35 headline text-left">
          <span className="subtitle ml42 text-uppercase">OUR GEMS</span>
          <h2>
            Indus Education World <span>Teachers.</span>
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
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href={teacher.socialLinks.twitter}>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a href={teacher.socialLinks.googlePlus}>
                          <FaGooglePlusG />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{teacher.name}</Card.Title>
                  <Card.Text>{teacher.designation}</Card.Text>
                  <Card.Text className="text-muted">
                    {teacher.experience}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center">
          <Button variant="primary" className="genius-btn text-uppercase">
            All teacher <FaCaretRight />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Teacher;
