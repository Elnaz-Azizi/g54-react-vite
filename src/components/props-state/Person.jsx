import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import { FaCheckCircle } from "react-icons/fa";



const Person = () => {
  const [email, setEmail] = useState("demo@test.se");
  const [showAlert, setShowAlert] = useState(false);

  const handelEmailChange = (event) => {
    console.log("handelEmailChange() function has been executed!");
    console.log("Target:", event.target);
    console.log("Target Value:", event.target.value);
    // add js validation for email
    setEmail(event.target.value);
  };

  const handleClick = () => {
    setShowAlert(true);
  };

  const handleReset = () => {
    setShowAlert(false);
    setEmail("");
  };
  return (
    <div className="container mt-5 mb-5">
      {showAlert && (
        <AlertMessage
          icon={<FaCheckCircle />}
          alertType="success"
          message="operation is done!"
        />
      )}

      <form>
        <div className="mb-3 mt-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={handelEmailChange}
            value={email}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Click Me
        </button>
        <button type="button" className="btn btn-danger" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default Person;