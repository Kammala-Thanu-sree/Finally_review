import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Simple authentication check
    if (email === "student@example.com" && password === "123456") {
      navigate("/student")
    } else {
      setError("Invalid credentials. Try again.")
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #53819bff, #5a7a7dff)",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px 26px",
          borderRadius: "16px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#4e342e", marginBottom: "20px" }}>Student Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
}

const buttonStyle = {
  display: "block",
  width: "100%",
  padding: "14px",
  background: "linear-gradient(135deg, #42a5f5, #1e88e5)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
}



export default Login
