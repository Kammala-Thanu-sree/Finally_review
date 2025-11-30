import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Footer from './Footer';


  export default function Home() {
  const navigate = useNavigate();

  // User input states
  const [heartRate, setHeartRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [stress, setStress] = useState("");

  // Saved values
  const [submitted, setSubmitted] = useState(false);

  // Chatbot states
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your wellness assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const reply =
      "Thank you! Remember to stay hydrated, sleep well, and consult a doctor if anything feels unusual.";

    setMessages([
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: reply },
    ]);

    setInput("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ display: "flex", minHeight: "90vh", width: "100%" }}>
      {/* ---------------- LEFT HALF ---------------- */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          textAlign: "center",
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
            Student Portal
          </button>

          <button
            onClick={() => navigate("/admin")}
            style={buttonStyle("#ab47bc", "#8e24aa")}
          >
            Admin Portal
          </button>
        </div>
      </div>

      {/* ---------------- RIGHT HALF ---------------- */}
      <div
        style={{
          width: "40%",
          background: "white",
          padding: "40px",
          overflowY: "auto",
        }}
      >
        <h2 style={{ color: "#1e3a8a", marginBottom: "20px" }}>
          Enter Your Health Information
        </h2>

        {/* ---------------- FORM ---------------- */}
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Heart Rate (bpm)"
            value={heartRate}
            onChange={(e) => setHeartRate(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Blood Pressure (e.g., 120/80)"
            value={bloodPressure}
            onChange={(e) => setBloodPressure(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Blood Group (e.g., O+)"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
            style={inputStyle}
          />

          <select
            value={stress}
            onChange={(e) => setStress(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select Stress Level</option>
            <option value="Low">Low</option>
            <option value="Moderate">Moderate</option>
            <option value="High">High</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              borderRadius: "12px",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Save Details
          </button>
        </form>

        {/* ---------------- SHOW VALUES AFTER SUBMIT ---------------- */}
        {submitted && (
          <>
            <h2 style={{ marginTop: "25px", color: "#1e40af" }}>
              Your Health Indicators
            </h2>

            <div style={infoCard}>
              <p><strong>Heart Rate:</strong> {heartRate} bpm</p>
              <p><strong>Blood Pressure:</strong> {bloodPressure}</p>
              <p><strong>Blood Group:</strong> {bloodGroup}</p>
              <p><strong>Stress Level:</strong> {stress}</p>
            </div>

            <button
              style={{
                width: "100%",
                padding: "12px",
                background: "linear-gradient(135deg, #1e40af, #1e3a8a)",
                color: "white",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                marginBottom: "20px",
              }}
              onClick={() => setShowChat(true)}
            >
              Open Wellness Chatbot →
            </button>
          </>
        )}

        {/* ---------------- CHATBOT ---------------- */}
        {showChat && (
          <div style={chatBox}>
            <div style={chatHeader}>
              <span>AI Wellness Assistant</span>
              <button
                onClick={() => setShowChat(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "18px",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                ✖
              </button>
            </div>

            <div style={chatMessages}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: msg.sender === "user" ? "right" : "left",
                    margin: "5px 0",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 12px",
                      borderRadius: "12px",
                      background:
                        msg.sender === "user" ? "#2563eb" : "#e5e7eb",
                      color: msg.sender === "user" ? "white" : "black",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            <div style={chatInputContainer}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something…"
                style={chatInput}
              />
              <button onClick={sendMessage} style={sendBtn}>
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Styles ---------------- */

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const buttonStyle = (c1, c2) => ({
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  background: `linear-gradient(135deg, ${c1}, ${c2})`,
  color: "white",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  fontSize: "1.1rem",
});

const infoCard = {
  background: "#f1f5f9",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "20px",
};

const chatBox = {
  width: "100%",
  height: "420px",
  borderRadius: "12px",
  boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "column",
  background: "white",
};

const chatHeader = {
  background: "#1e40af",
  padding: "12px",
  color: "white",
  fontWeight: "bold",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
};

const chatMessages = {
  flex: 1,
  overflowY: "auto",
  padding: "10px",
  background: "#f9fafb",
};

const chatInputContainer = {
  display: "flex",
  padding: "10px",
  borderTop: "1px solid #ccc",
};

const chatInput = {
  flex: 1,
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const sendBtn = {
  marginLeft: "8px",
  padding: "10px 18px",
  background: "#2563eb",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};
