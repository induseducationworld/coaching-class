import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/img/logo/logo.png";
import plogo from "../../assets/img/logo/p-logo.jpg";
import "./header.css"; // Import the CSS file for custom styles

const Header = () => {
  return (
    <header>
      <div className="announcement-strip">
        <div className="announcement-text">
          <span>New Course Available: Learn React-Bootstrap Now!</span>
          <span>Enroll in our Summer Coding Bootcamp!</span>
          <span>Get 50% off on all courses this July!</span>
        </div>
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Teacher</NavDropdown.Item>
                <NavDropdown.Item href="#">Teacher Details</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#">Blog Single</NavDropdown.Item>
                <NavDropdown.Item href="#">Course</NavDropdown.Item>
                <NavDropdown.Item href="#">Course Details</NavDropdown.Item>
                <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#">Check Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <Button variant="outline-success">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Button>
              <Button variant="outline-success" className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <div className="search-body">
                <div className="search-form">
                  <FormControl
                    type="search"
                    placeholder="Search Here"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success" className="search-close">
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                </div>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
