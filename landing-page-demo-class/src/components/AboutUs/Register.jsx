import React, { useState } from "react";
import BASE_URL from "../../config";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    confirmDroppers: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAlertMessage(null);
    setErrorMessage(null);

    try {
      if (!formData.confirmDroppers) {
        throw new Error(
          "Please confirm that you have passed out 12th and opt for the droppers batch."
        );
      }

      const response = await fetch(`${BASE_URL}/students/register`, {
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
      setAlertMessage(
        "Registration successful! You will be informed for upcoming demo class via email."
      );
      setFormData({
        name: "",
        number: "",
        email: "",
        confirmDroppers: false,
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Failed to register. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="about-resigter-form backgroud-style relative-position">
      <div className="register-content">
        <div className="register-fomr-title text-center">
          <h3 className="bold-font">Free Demo Class.</h3>
          <p>Get yourself registered for Indus NEET Dropper's batchs</p>
        </div>
        {alertMessage && (
          <div className="alert alert-success" role="alert">
            {alertMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

        <form
          className="register-form-area contact_form"
          onSubmit={handleSubmit}
        >
          <div className="contact-info mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-info mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Your Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-info mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <div className="form-check" style={{ marginTop: "10px" }}>
              <input
                type="checkbox"
                id="confirmDroppers"
                name="confirmDroppers"
                checked={formData.confirmDroppers}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="checkBox"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                {" "}
                Confirm that you have passed out 12th and opt for the droppers
                batch
              </label>
            </div>
          </div>

          <div className="nws-button text-uppercase text-center white text-capitalize">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
