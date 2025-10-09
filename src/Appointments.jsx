import React from 'react'

const Appointments = () => {
const appointments = [
    { date: "2025-10-15", time: "10:00 AM", doctor: "Dr. Priya Sharma", status: "Confirmed" },
    { date: "2025-10-20", time: "02:30 PM", doctor: "Dr. Arjun Mehta", status: "Pending" },
  ];

  const cardStyle = {
    background: "white",
    padding: "18px",
    marginBottom: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "left",
    transition: "transform 0.3s ease",
  };

  const handleMouseOver = (e) => (e.currentTarget.style.transform = "scale(1.02)");
  const handleMouseOut = (e) => (e.currentTarget.style.transform = "scale(1)");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f6d365, #fda085)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          color: "#4e342e",
          marginBottom: "30px",
          fontSize: "2.5rem",
          textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        My Appointments
      </h1>

      <div style={{ width: "400px", maxWidth: "90%" }}>
        {appointments.map((a, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <p><strong>Date:</strong> {a.date}</p>
            <p><strong>Time:</strong> {a.time}</p>
            <p><strong>Doctor:</strong> {a.doctor}</p>
            <p>
              <strong>Status:</strong>{" "}
              <span style={{ color: a.status === "Confirmed" ? "green" : "#ff9800" }}>
                {a.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appointments
