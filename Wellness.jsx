import React from 'react'

const Wellness = () => {
  const resources = [
    {
      title: "Campus Health Center",
      description: "Access medical support, counseling, and emergency health services.",
      contact: "+91 98765 43210",
      link: "https://www.who.int"
    },
    {
      title: "Emergency Helpline",
      description: "24/7 support for urgent health, mental wellness, or safety concerns.",
      contact: "112",
      link: "https://www.india.gov.in/"
    },
    {
      title: "Student Support Services",
      description: "Academic, personal, and mental health guidance for all students.",
      contact: "+91 91234 56789",
      link: "https://www.unicef.org/health"
    },
    {
      title: "Online Wellness Resources",
      description: "Browse verified wellness materials and guides to stay healthy.",
      contact: "Visit website",
      link: "https://www.cdc.gov/"
    }
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

  const linkStyle = {
    display: "inline-block",
    marginTop: "8px",
    color: "#1565c0",
    textDecoration: "none",
    fontWeight: "600",
    transition: "color 0.3s ease",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          color: "#0d47a1",
          marginBottom: "30px",
          fontSize: "2.5rem",
          textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        Student Resources
      </h1>

      <div style={{ width: "400px", maxWidth: "90%" }}>
        {resources.map((res, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <h3 style={{ color: "#1565c0", marginBottom: "8px" }}>{res.title}</h3>
            <p style={{ color: "#333", marginBottom: "8px" }}>{res.description}</p>
            <p><strong>Contact:</strong> {res.contact}</p>
            <a
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = "#0d47a1")}
              onMouseOut={(e) => (e.target.style.color = "#1565c0")}
            >
              Visit Site →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wellness
