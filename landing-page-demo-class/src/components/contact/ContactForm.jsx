import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";
import BASE_URL from "../../config";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null); // For success alerts
  const [errorMessage, setErrorMessage] = useState(null); // For error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlertMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch(`${BASE_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);

      setAlertMessage("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(`${error} Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {alertMessage && <Alert variant="success">{alertMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="contact-info">
          <input
            className="name"
            name="name"
            type="text"
            placeholder="Your Name."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-info">
          <input
            className="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-info">
          <input
            className="phone"
            name="phone"
            type="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="nws-button text-center gradient-bg text-capitalize">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "SENDING..." : "SEND MESSAGE NOW"} <FaCaretRight />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
