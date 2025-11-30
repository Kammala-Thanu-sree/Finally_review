import React from 'react'
import { FaHeartbeat, FaUsers, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #466acdff 0%, #fad0c4 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "20px",
          fontWeight: "800",
          textShadow: "0 4px 10px rgba(0,0,0,0.2)",
          animation: "fadeIn 1.5s ease",
        }}
      >
        About Our Wellness Portal
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "1.3rem",
          maxWidth: "800px",
          textAlign: "center",
          marginBottom: "40px",
          opacity: 0.9,
          animation: "fadeIn 2s ease",
        }}
      >
        A place where students and staff can track their health, access
        expert guidance, and improve their wellbeing.
      </p>

      {/* Glass Style Box */}
      <div
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          padding: "40px 40px",
          borderRadius: "20px",
          width: "90%",
          maxWidth: "900px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          marginBottom: "50px",
          animation: "slideUp 1.2s ease",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "700" }}>
          Who We Are
        </h2>
        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.8,
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          The Health & Wellness Portal aims to support mental, physical, and
          emotional wellbeing through tools, resources, and personalized services.
        </p>
      </div>

      {/* Feature Cards */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          animation: "fadeIn 2.5s ease",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "30px",
            width: "260px",
            borderRadius: "18px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          <FaHeartbeat size={50} color="#ff4757" />
          <h3 style={{ marginTop: "15px" }}>Health Tracking</h3>
          <p style={{ opacity: 0.8 }}>
            Track your daily health routines with interactive tools.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "30px",
            width: "260px",
            borderRadius: "18px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          <FaUsers size={50} color="#3742fa" />
          <h3 style={{ marginTop: "15px" }}>Expert Guidance</h3>
          <p style={{ opacity: 0.8 }}>
            Connect with professionals for your wellbeing.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "30px",
            width: "260px",
            borderRadius: "18px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        >
          <FaLeaf size={50} color="#2ed573" />
          <h3 style={{ marginTop: "15px" }}>Healthy Lifestyle</h3>
          <p style={{ opacity: 0.8 }}>
            Access tips and resources for better living.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default About;