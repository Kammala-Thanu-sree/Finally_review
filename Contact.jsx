import React from 'react'

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: "support@wellnessportal.com", icon: "✉️" },
    { label: "Phone", value: "+91 98765 43210", icon: "📞" },
    { label: "Address", value: "KL University, Health & Wellness Department", icon: "📍" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "linear-gradient(to right, #5c8ecbff, #a68b99ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#333",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "40px", fontWeight: "bold" }}>
        Contact Us
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {contactInfo.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              padding: "30px 20px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>{item.icon}</div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "10px" }}>{item.label}</h2>
            <p style={{ fontSize: "1rem", wordWrap: "break-word" }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Contact
