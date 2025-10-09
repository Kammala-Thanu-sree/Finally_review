import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Student() {
    const navigate= useNavigate();

  const handleNavigation = (path) =>{
    navigate(path);
  };
  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "14px",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #009688, #00796b)",
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
    e.target.style.background = "linear-gradient(135deg, #009688, #00796b)";
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
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#004d40",
          fontSize: "3rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        Health & Wellness Portal
      </h1>

      <div
        style={{
          background: "white",
          padding: "30px 26px",
          borderRadius: "16px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          width: "400px",
          textAlign: "center",
          transition: "transform 0.3s ease",
        }}
      >
        <h2 style={{ color: "#00695c", marginBottom: "20px" }}>Welcome, Student</h2>

        <button
          onClick={() => handleNavigation("/student-portal")}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Student Dashboard
        </button>

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
      </div>
    </div>
  );
}
