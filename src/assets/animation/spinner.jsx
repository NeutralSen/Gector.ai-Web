import React from "react";

const Spinner = ({ fading }) => {
    return (
      <div
        className={`spinner-container ${fading ? "fade-out" : ""}`}
      >
        <div className="spinner"></div>
      </div>
    );
  };
  
  export default Spinner;
  
