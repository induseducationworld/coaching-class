import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
            <Nav.Link as={NavLink} to="/admin">
              <BsFillPersonFill className="mr-2" /> Registration
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin/contact">
              <BsChatSquareDots className="mr-2" /> Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
