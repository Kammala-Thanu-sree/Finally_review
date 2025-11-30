import React, { useEffect, useState } from 'react'
export default function Doctorrecords() {
const [records, setRecords] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("healthRecords")) || [];
    setRecords(saved);
  }, []);

  const deleteRecord = (id) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem("healthRecords", JSON.stringify(updated));
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Manage Health Records</h1>

      <div style={container}>
        {records.length === 0 ? (
          <p>No records available.</p>
        ) : (
          records.map((rec) => (
            <div key={rec.id} style={cardStyle}>
              <p><strong>Student:</strong> {rec.student}</p>
              <p><strong>Type:</strong> {rec.type}</p>
              <p><strong>Date:</strong> {rec.date}</p>
              <p><strong>Notes:</strong> {rec.notes}</p>

              <button
                onClick={() => deleteRecord(rec.id)}
                style={deleteBtn}
              >
                Delete Record
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
  padding: "40px",
};

const titleStyle = {
  textAlign: "center",
  color: "#003366",
  marginBottom: "20px",
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
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const deleteBtn = {
  background: "#d32f2f",
  padding: "8px 14px",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};


