import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Viewstudentadmin() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("studentUsers")) || [];
    setStudents(data);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
        padding: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Registered Students
      </h1>

      <div style={{ maxWidth: "700px", margin: "auto" }}>
        {students.length === 0 ? (
          <p>No students found.</p>
        ) : (
          students.map((s, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "18px",
                borderRadius: "12px",
                marginBottom: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <p><strong>Name:</strong> {s.username}</p>
              <p><strong>Age:</strong> {s.age}</p>
              <p><strong>Gender:</strong> {s.gender}</p>
              <p><strong>Phone:</strong> {s.phone}</p>

              <button
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#0d47a1",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  localStorage.setItem("selectedStudent", JSON.stringify(s));
                  navigate("/student-profile");
                }}
              >
                View Profile
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={() => navigate("/admindas")}
        style={{
          marginTop: "20px",
          padding: "10px 18px",
          background: "#003366",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}