import React, { useState } from "react";
import axios from "axios";

const InvitationForm = ({ onInvitationAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    status: "pending",
  });

  const apiEndpoint = "http://localhost:8080/api/invitations";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // e.preventDefault() prevents the default form submission behavior, allowing us to handle it with JavaScript.
    try {
      const response = await axios.post(apiEndpoint, formData);
      if (response.status === 201) {
        onInvitationAdded(); // Callback to update the parent component
        setFormData({
          title: "",
          date: "",
          time: "",
          location: "",
          status: "pending",
        });
        console.log("Invitation created successfully.");
      }
    } catch (error) {
      console.error("Error creating invitation:", error);
    }
  };

  return (
    <div className="mb-4">
      <h4>Create a New Invitation</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="time"
            name="time"
            className="form-control"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="form-control"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Invitation
        </button>
      </form>
    </div>
  );
};

export default InvitationForm;