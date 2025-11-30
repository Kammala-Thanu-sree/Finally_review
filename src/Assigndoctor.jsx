import React, { useEffect, useState } from 'react'

export default function Assigndoctor() {
  const [students, setStudents] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const stu = JSON.parse(localStorage.getItem("studentUsers")) || [];
    const adm = JSON.parse(localStorage.getItem("currentAdmin")) || null;

    console.log("Loaded students:", stu);
    console.log("Loaded admin:", adm);

    setStudents(stu);
    setAdmin(adm);
  }, []);

  const assignDoctor = (username) => {
    if (!admin || !admin.fullName) {
      alert("Admin not logged in OR fullName missing!");
      return;
    }

    const updated = students.map((s) =>
      s.username === username
        ? { ...s, assignedDoctor: admin.fullName }
        : s
    );

    setStudents(updated);
    localStorage.setItem("studentUsers", JSON.stringify(updated));

    alert(`Assigned Doctor ${admin.fullName} to ${username}`);
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Assign Doctor to Students</h1>

      {/* If no students exist */}
      {students.length === 0 && (
        <p style={{ textAlign: "center", color: "red", fontSize: "18px" }}>
          No students found! Please add students first.
        </p>
      )}

      <div style={container}>
        {students.map((s, index) => (
          <div key={index} style={cardStyle}>
            <p><strong>Name:</strong> {s.username}</p>
            <p><strong>Age:</strong> {s.age}</p>
            <p>
              <strong>Assigned Doctor:</strong>{" "}
              {s.assignedDoctor || "Not Assigned"}
            </p>

            <button
              style={assignBtn}
              onClick={() => assignDoctor(s.username)}
            >
              Assign Doctor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #a8edea, #fed6e3)",
  padding: "40px",
};

const titleStyle = {
  textAlign: "center",
  color: "#003366",
};

const container = {
  maxWidth: "700px",
  margin: "auto",
};

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "15px",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
};

const assignBtn = {
  padding: "10px 16px",
  background: "#0288d1",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

