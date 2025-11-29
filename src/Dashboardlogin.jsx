import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboardlogin = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "14px",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #537fa9ff, #00796b)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
  };

  const handleMouseOver = (e) => {
    e.target.style.background = "linear-gradient(135deg, #26a69a, #00897b)";
    e.target.style.transform = "scale(1.03)";
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "linear-gradient(135deg, #537fa9ff, #00796b)";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "linear-gradient(135deg, #a8edea, #7394afff)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 26px",
          borderRadius: "16px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#00695c", marginBottom: "20px" }}>
          Choose an Option
        </h2>

        <button
          onClick={() => handleNavigation("/records")}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Health Records
        </button>

        <button
          onClick={() => handleNavigation("/appointments")}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Appointments
        </button>

        <button
          onClick={() => handleNavigation("/wellness")}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Wellness Resources
        </button>

        {/* LOGOUT BUTTON — Return to Student.jsx */}
        <button
          onClick={() => navigate("/student")}   // ⬅ CHANGE DONE HERE
          style={{
            ...buttonStyle,
            marginTop: "20px",
            background: "linear-gradient(135deg, #ef5350, #c62828)",
          }}
          onMouseOver={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #e57373, #b71c1c)";
            e.target.style.transform = "scale(1.03)";
          }}
          onMouseOut={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #ef5350, #c62828)";
            e.target.style.transform = "scale(1)";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboardlogin;