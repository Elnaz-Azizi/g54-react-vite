import React from "react";
import { FaCheckCircle } from "react-icons/fa";


const AlertMessage = ({message, alertType, icon}) => {
    console.log("Alert Type is : " + alertType);
    console.log("Alert Message is : " + message);
  return (
    <div class={`alert alert-${alertType}`}>
    {(icon ? icon : <FaCheckCircle />)} {message}
    </div>
  );
};

export default AlertMessage;