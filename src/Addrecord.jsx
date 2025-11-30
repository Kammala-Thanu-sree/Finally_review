import React, { useEffect, useState } from 'react'

export default function Addrecord() {
const [students, setStudents] = useState([]);
  const [admin, setAdmin] = useState(null);

  const [studentName, setStudentName] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("studentUsers")) || []);
    setAdmin(JSON.parse(localStorage.getItem("currentAdmin")) || null);
  }, []);

  const addRecord = (e) => {
    e.preventDefault();

    const newRec = {
      id: Date.now(),
      student: studentName,
      type,
      notes,
      date: new Date().toLocaleDateString(),
      doctor: admin.fullName,
      status: "Completed",
    };

    const existing = JSON.parse(localStorage.getItem("healthRecords")) || [];
    existing.push(newRec);

    localStorage.setItem("healthRecords", JSON.stringify(existing));

    alert("Record added successfully!");

    setStudentName("");
    setType("");
    setNotes("");
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Add New Health Record</h1>

      <form onSubmit={addRecord} style={formStyle}>
        <select
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">Select Student</option>
          {students.map((s, i) => (
            <option key={i} value={s.username}>
              {s.username}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Record Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          style={inputStyle}
        />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ ...inputStyle, minHeight: 80 }}
        />

        <button type="submit" style={saveBtn}>
          Save Record
        </button>
      </form>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #ffe29f, #ffa99f)",
  padding: "40px",
};

const titleStyle = {
  textAlign: "center",
  color: "#003366",
};

const formStyle = {
  maxWidth: "600px",
  margin: "auto",
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const saveBtn = {
  padding: "12px",
  width: "100%",
  background: "#003366",
  color: "white",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};