import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Admindas() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [admin, setAdmin] = useState(null);

  // Load admin + student data
  useEffect(() => {
    const studentData = JSON.parse(localStorage.getItem("studentUsers")) || [];
    const adminData = JSON.parse(localStorage.getItem("currentAdmin")) || null;

    setStudents(studentData);
    setAdmin(adminData);
  }, []);

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    background: "linear-gradient(135deg, #01579b, #0288d1)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "0.3s",
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    padding: "40px",
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle = {
    width: "85%",
    maxWidth: "950px",
    background: "white",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* ---------------- TITLE ---------------- */}
        <h1
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "25px",
            fontSize: "2.5rem",
            textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
          }}
        >
          Doctor / Admin Dashboard
        </h1>

        {/* ---------------- DOCTOR PROFILE ---------------- */}
        {admin && (
          <div
            style={{
              padding: "20px",
              borderRadius: "14px",
              background: "#e3f2fd",
              marginBottom: "30px",
            }}
          >
            <h2 style={{ color: "#003366", marginBottom: "10px" }}>
              Doctor Profile
            </h2>

            <p><strong>Name:</strong> {admin.fullName}</p>
            <p><strong>Email:</strong> {admin.email}</p>
            <p><strong>Phone:</strong> {admin.phone}</p>
            <p><strong>Specialization:</strong> {admin.specialization}</p>
            <p><strong>Experience:</strong> {admin.experience} years</p>
            <p><strong>Qualification:</strong> {admin.qualification}</p>
            <p><strong>License No:</strong> {admin.licenseNo}</p>
            <p><strong>Hospital / Department:</strong> {admin.hospital}</p>
          </div>
        )}

        {/* ---------------- DOCTOR ACTIONS ---------------- */}
        <div style={{ marginBottom: "35px" }}>
          <h2 style={{ color: "#003366", marginBottom: "15px" }}>
            Doctor Actions
          </h2>

          <button
            style={buttonStyle}
            onClick={() => navigate("/viewstudentadmin")}
          >
            View All Registered Students
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/doctorrecords")}
          >
            Manage Health Records
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/doctorappointment")}
          >
            Manage Appointments
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/assign-doctor")}
          >
            Assign Doctor to Students
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/add-record")}
          >
            Add New Health Record
          </button>
        </div>

        {/* ---------------- STUDENT LIST SECTION ---------------- */}
        <div
          style={{
            padding: "20px",
            background: "#f6f7fb",
            borderRadius: "14px",
          }}
        >
          <h2 style={{ color: "#003366", marginBottom: "10px" }}>
            Registered Students
          </h2>

          {students.length === 0 ? (
            <p>No students registered yet.</p>
          ) : (
            students.map((s, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
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
                    borderRadius: "8px",
                    background: "#0d47a1",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    localStorage.setItem("selectedStudent", JSON.stringify(s));
                    navigate("/student-profile");
                  }}
                >
                  View Full Profile
                </button>
              </div>
            ))
          )}
        </div>

        {/* ---------------- LOGOUT ---------------- */}
        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "30px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #e53935, #b71c1c)",
            color: "white",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate("/admin")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}