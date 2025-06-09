import React, { useState } from "react";

const ToggleButton = () => {

   const [isDarkMode, setIsDarkMode] =  useState(true);

   
   // define a js function
   const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
   }

  return (
    <div className="container-fluid mt-4">
      <nav className={`navbar ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} `}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <img src={` ${isDarkMode ? './logo-light.png' : './logo-dark.png'}`} className="logo" alt="Site logo" />
        </div>
      </nav>
      <div className="container text-center py-5">
        <h1>{isDarkMode ? "Dark Mode is On" : "Light Mode is On" }</h1>
        <button onClick={toggleMode} className="btn btn-secondary" aria-label="Toggle dark mode">
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode" }
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;