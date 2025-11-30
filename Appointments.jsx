import React, { useEffect, useState } from 'react'

const Appointments = () => {
  // Load saved appointments OR default ones
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("studentAppointments");
    return saved
      ? JSON.parse(saved)
      : [
          { date: "2025-10-15", time: "10:00 AM", doctor: "Dr. Priya Sharma", status: "Confirmed" },
          { date: "2025-10-20", time: "02:30 PM", doctor: "Dr. Arjun Mehta", status: "Pending" },
        ];
  });

  // Form states
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newDoctor, setNewDoctor] = useState("");

  // Save appointments whenever updated
  useEffect(() => {
    localStorage.setItem("studentAppointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (e) => {
    e.preventDefault();

    if (!newDate || !newTime || !newDoctor) return;

    const newApp = {
      date: newDate,
      time: newTime,
      doctor: newDoctor,
      status: "Pending",
    };

    setAppointments([...appointments, newApp]);

    // Reset fields
    setNewDate("");
    setNewTime("");
    setNewDoctor("");
  };

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

      {/* ---------- NEW APPOINTMENT FORM ----------- */}
      <div
        style={{
          background: "white",
          padding: "20px",
          marginBottom: "25px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ marginBottom: "15px", color: "#4e342e" }}>Create Appointment</h3>

        <form onSubmit={addAppointment}>
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px" }}
          />

          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px" }}
          />

          <input
            type="text"
            placeholder="Doctor Name"
            value={newDoctor}
            onChange={(e) => setNewDoctor(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#4e342e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Add Appointment
          </button>
        </form>
      </div>

      {/* ---------- APPOINTMENT LIST ----------- */}
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
  );
};

export default Appointments;