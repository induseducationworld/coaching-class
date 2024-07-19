import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import Sidebar from "./Sidebar";
import BASE_URL from "../../config";
import "./admin.css";

const ContactWrapper = () => {
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [message, setMessage] = useState(""); // State for message
  const [userMessage, setUserMessage] = useState(""); // State for user input message

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/contact/`);
        const contactData = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        setContacts(contactData);
        setFilteredContacts(contactData);
        setMessage("Contacts fetched successfully."); // Success message
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setMessage("Error fetching contacts."); // Error message
      }
    };
    fetchContacts();
  }, []);

  useEffect(() => {
    const filterContacts = () => {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filteredData = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(lowercasedQuery) ||
          contact.email.toLowerCase().includes(lowercasedQuery) ||
          contact.phone.includes(lowercasedQuery) ||
          contact.message.toLowerCase().includes(lowercasedQuery) // Added filter for message
      );
      setFilteredContacts(filteredData);
    };
    filterContacts();
  }, [searchQuery, contacts]);

  const downloadCSV = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/contact/download`, {
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
      setMessage("CSV downloaded successfully."); // Success message
    } catch (error) {
      console.error("Error downloading CSV:", error);
      setMessage("Error downloading CSV."); // Error message
    }
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/contact`, {
        name: "Anonymous", // Replace or add fields if required
        email: "N/A", // Replace or add fields if required
        phone: "N/A", // Replace or add fields if required
        message: userMessage,
      });
      setMessage("Message submitted successfully."); // Success message
      setUserMessage(""); // Clear input field
    } catch (error) {
      console.error("Error submitting message:", error);
      setMessage("Error submitting message."); // Error message
    }
  };

  return (
    <section className="about-us-section home-secound">
      <Container fluid className="mt-5">
        <Row>
          <Col md={3} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col md={9} className="content-col">
            <div className="admin-content">
              <Container className="admin-wrapper mt-5">
                <Row className="mb-4">
                  <Col>
                    <h2>Contact</h2>
                  </Col>
                </Row>

                {message && (
                  <Row className="mb-3">
                    <Col>
                      <Alert
                        variant={
                          message.includes("Error") ? "danger" : "success"
                        }
                      >
                        {message}
                      </Alert>
                    </Col>
                  </Row>
                )}

                <Row className="mb-3">
                  <Col md={8}>
                    <Form.Control
                      type="text"
                      placeholder="Search by name, email, phone, or message"
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
                      <th>Message</th> {/* Added Message column */}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(filteredContacts) &&
                      filteredContacts.map((contact) => (
                        <tr key={contact._id}>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.phone}</td>
                          <td>{contact.message}</td> {/* Display Message */}
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactWrapper;
