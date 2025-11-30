vimport React from 'react'

const Records = () => {
 const records = [
    { date: "2025-09-25", type: "General Checkup", doctor: "Dr. Neha Kapoor", notes: "Healthy - no issues." },
    { date: "2025-07-12", type: "Eye Checkup", doctor: "Dr. Arjun Mehta", notes: "Mild dryness - advised drops." },
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
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          color: "#003366",
          marginBottom: "30px",
          fontSize: "2.5rem",
          textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        Health Records
      </h1>

      <div style={{ width: "400px", maxWidth: "90%" }}>
        {records.map((r, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <p><strong>Date:</strong> {r.date}</p>
            <p><strong>Type:</strong> {r.type}</p>
            <p><strong>Doctor:</strong> {r.doctor}</p>
            <p><strong>Notes:</strong> {r.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Records
