import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        background: "#0d47a1",
        color: "white",
        padding: "20px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "40px",
        textAlign: "center",
        flexDirection: "column", // keeps multiple lines centered
      }}
    >
      <p style={{ margin: 0 }}>
        © 2025 Health & Wellness Portal
      </p>
      <p style={{ margin: 0 }}>
        Designed with ❤️ using React + Vite
      </p>
    </footer>
  );
};


export default Footer
