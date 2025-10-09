import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar(){
    const location = useLocation();

const linkStyle = (path) => ({
    color: location.pathname === path ? "#fff" : "#e3f2fd",
    backgroundColor: location.pathname === path ? "#1e88e5" : "transparent",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    transition: "0.3s",
  });
  return (
    
   <nav
      style={{
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <h2 style={{ margin: 0 }}>Wellness Portal</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/about" style={linkStyle("/about")}>About</Link>
        <Link to="/services" style={linkStyle("/services")}>Services</Link>
        <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
        <Link to="/student" style={linkStyle("/student")}>Student</Link>
      
      </div>
    </nav>
  );

}


