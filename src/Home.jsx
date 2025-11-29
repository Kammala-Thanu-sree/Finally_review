import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

export default function Home() {
    const navigate = useNavigate();
  return (
      <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // full viewport height
        width: "100vw",     // full viewport width
        margin: 1,
        
        padding: 1,
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: 1, // pushes footer to bottom
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <img
          src="/OIP (2).webp"
          alt="Wellness Banner"
          style={{
            width: "220px",
            marginBottom: "20px",
            borderRadius: "15px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          }}
        />

        <h1
          style={{
            color: "#fff",
            fontSize: "2.8rem",
            marginBottom: "10px",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          Health & Wellness Portal
        </h1>

        <p
          style={{
            color: "#f0f8ff",
            fontSize: "1.1rem",
            maxWidth: "600px",
            lineHeight: "1.5",
            marginBottom: "40px",
          }}
        >
          Explore resources, track your progress, and stay healthy.
          Choose your portal to begin.
        </p>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            padding: "35px 25px",
            borderRadius: "20px",
            boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
            width: "90%",
            maxWidth: "450px",
          }}
        >
          <h2
            style={{
              color: "#1a237e",
              marginBottom: "25px",
              fontSize: "1.6rem",
              fontWeight: 600,
            }}
          >
            Choose Your Portal
          </h2>

          <button
            onClick={() => navigate("/student")}
            style={buttonStyle("#42a5f5", "#1e88e5")}
          >
            <img
              src="/OIP.webp"
              alt="Student Icon"
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            Student Portal
          </button>

          <button
            onClick={() => navigate("/admin")}
            style={buttonStyle("#ab47bc", "#8e24aa")}
          >
            <img
              src="/OIP (2).webp"
              alt="Admin Icon"
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
            Admin Portal
          </button>
        </div>
      </div>

      
    </div>
  );
}

const buttonStyle = (color1, color2) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  background: `linear-gradient(135deg, ${color1}, ${color2})`,
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "1.05rem",
  fontWeight: 600,
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2)`,
  transition: "all 0.3s ease",
});