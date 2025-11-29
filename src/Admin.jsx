import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
export default function Admin() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false); // Toggle Login / Signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ---- SIGNUP FUNCTION ----
  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("adminUsers")) || [];

    // Check if user already exists
    if (users.some((u) => u.username === username)) {
      setError("User already exists! Try different username.");
      return;
    }

    // Save new user
    users.push({ username, password });
    localStorage.setItem("adminUsers", JSON.stringify(users));

    setError("");
    alert("Registration successful! Please log in.");
    setIsSignup(false);
  };

  // ---- LOGIN FUNCTION ----
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("adminUsers")) || [];

    const foundUser = users.find((u) => u.username === username);

    if (!foundUser) {
      setError("User not registered!");
      return;
    }

    if (foundUser.password !== password) {
      setError("Incorrect password!");
      return;
    }

    navigate("/admindas"); // redirect
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/admin-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          width: 380,
          padding: 28,
          borderRadius: 16,
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 10 }}>
          {isSignup ? "Create Admin Account" : "Admin Login"}
        </h1>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 10,
              margin: "10px 0",
              borderRadius: 8,
              border: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: 10,
              margin: "10px 0",
              borderRadius: 8,
              border: "none",
            }}
          />

          {error && (
            <p style={{ color: "#ff4444", fontWeight: "bold", marginTop: 5 }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 12,
              marginTop: 12,
              background: "#003366",
              border: "none",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {isSignup ? "Register" : "Login"}
          </button>
        </form>

        {/* Toggle Login / Signup */}
        <p style={{ marginTop: 15 }}>
          {isSignup ? "Already have an account?" : "New admin?"}{" "}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
              setUsername("");
              setPassword("");
            }}
            style={{ color: "#00eaff", cursor: "pointer", fontWeight: "bold" }}
          >
            {isSignup ? "Login" : "Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
}