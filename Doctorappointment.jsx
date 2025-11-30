import React, { useEffect, useState } from 'react'
export default function Doctorappointment() {
 const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("studentAppointments")) || [];
    setAppointments(saved);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...appointments];
    updated[index].status = status;

    setAppointments(updated);
    localStorage.setItem("studentAppointments", JSON.stringify(updated));
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Manage Appointments</h1>

      <div style={container}>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          appointments.map((a, i) => (
            <div key={i} style={cardStyle}>
              <p><strong>Date:</strong> {a.date}</p>
              <p><strong>Time:</strong> {a.time}</p>
              <p><strong>Doctor:</strong> {a.doctor}</p>
              <p><strong>Status:</strong> {a.status}</p>

              <button
                onClick={() => updateStatus(i, "Confirmed")}
                style={confirmBtn}
              >
                Confirm
              </button>

              <button
                onClick={() => updateStatus(i, "Rejected")}
                style={rejectBtn}
              >
                Reject
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
  background: "linear-gradient(135deg, #f6d365, #fda085)",
  padding: "40px",
};

const titleStyle = {
  textAlign: "center",
  color: "#4e342e",
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

const confirmBtn = {
  padding: "8px 14px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const rejectBtn = {
  padding: "8px 14px",
  background: "#d32f2f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};


