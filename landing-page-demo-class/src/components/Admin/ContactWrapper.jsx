// src/components/Admin/ContactWrapper.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import axios from "axios";
import { CSVLink } from "react-csv";

const ContactWrapper = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("/api/contacts");
      setContacts(response.data);
      setFilteredContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    filterContacts();
  }, [searchQuery, contacts]);

  const filterContacts = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredData = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowercasedQuery) ||
        contact.email.toLowerCase().includes(lowercasedQuery) ||
        contact.phone.includes(lowercasedQuery)
    );
    setFilteredContacts(filteredData);
  };

  const downloadCSV = async () => {
    try {
      const response = await axios.get("/api/contacts/download", {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "contacts.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h2>Contacts</h2>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="Search by name, email, or phone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col md={4} className="text-right">
          <Button onClick={downloadCSV} className="btn btn-primary">
            Download CSV
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContactWrapper;
