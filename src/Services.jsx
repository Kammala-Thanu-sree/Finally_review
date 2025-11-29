import React from 'react'

const Services = () => {
  const services = [
    { icon: "🩺", title: "Health Check Scheduling", desc: "Book check-ups and monitor your appointments easily." },
    { icon: "🧘‍♀️", title: "Wellness Programs", desc: "Join mental and physical wellbeing programs." },
    { icon: "📅", title: "Appointment Management", desc: "Manage upcoming health consultations effortlessly." },
    { icon: "📚", title: "Health Education Resources", desc: "Access guides, tips, and educational materials." },
    { icon: "💬", title: "Expert Consultation", desc: "Chat with certified health professionals." },
    { icon: "💓", title: "Health Monitoring Tools", desc: "Track your daily wellness and lifestyle habits." },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "70px 20px",
        background: "linear-gradient(135deg, #1731b2ff 0%, #fecfef 50%, #a18cd1 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "20px",
          fontWeight: "800",
          textShadow: "0 5px 15px rgba(0,0,0,0.3)",
          animation: "fadeIn 1.5s ease",
        }}
      >
        Our Services
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: "1.2rem",
          marginBottom: "50px",
          maxWidth: "750px",
          textAlign: "center",
          opacity: 0.9,
          animation: "fadeIn 2s ease",
        }}
      >
        Explore the range of health and wellness services designed to support your
        physical and mental wellbeing.
      </p>

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "1100px",
          animation: "slideUp 1.5s ease",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(15px)",
              padding: "35px 25px",
              borderRadius: "22px",
              textAlign: "center",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
              {service.icon}
            </div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "700", marginBottom: "10px" }}>
              {service.title}
            </h2>
            <p style={{ opacity: 0.85, fontSize: "1rem" }}>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Services;