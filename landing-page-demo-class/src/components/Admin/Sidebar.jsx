import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  BsFillPersonFill,
  BsCardChecklist,
  BsChatSquareDots,
} from "react-icons/bs";

const Sidebar = () => {
  return (
    <Navbar bg="light" expand="lg" className="sidebar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
            <Link to="/admin/registration">
              <Nav.Link>
                <BsFillPersonFill className="mr-2" /> Registration
              </Nav.Link>
            </Link>
            <Link to="/admin/contact">
              <Nav.Link>
                <BsChatSquareDots className="mr-2" /> Contact Us
              </Nav.Link>
            </Link>
            {/* Add more links as needed */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
