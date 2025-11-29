import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentLogin() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // SIGNUP
  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("studentUsers")) || [];

    if (users.some((u) => u.username === username)) {
      setError("User already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("studentUsers", JSON.stringify(users));

    alert("Account created! Please log in.");
    setIsSignup(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("studentUsers")) || [];
    const foundUser = users.find((u) => u.username === username);

    if (!foundUser) {
      setError("User not registered!");
      return;
    }

    if (foundUser.password !== password) {
      setError("Incorrect password!");
      return;
    }

    navigate("/dashboardlogin");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('/student-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(5px)",
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
        <h1 style={{ marginBottom: 15 }}>
          {isSignup ? "Student Sign Up" : "Student Login"}
        </h1>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              margin: "10px 0",
              borderRadius: 8,
              border: "none",
            }}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: 10,
              margin: "10px 0",
              borderRadius: 8,
              border: "none",
            }}
            required
          />

          {error && <p style={{ color: "#ff4444" }}>{error}</p>}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: 12,
              marginTop: 10,
              background: "#0d47a1",
              border: "none",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {isSignup ? "Create Account" : "Login"}
          </button>
        </form>

        <p style={{ marginTop: 15 }}>
          {isSignup ? "Already have an account?" : "New student?"}{" "}
          <span
            style={{ color: "#00eaff", cursor: "pointer", fontWeight: "bold" }}
            onClick={() => {
              setIsSignup(!isSignup);
              setError("");
              setUsername("");
              setPassword("");
            }}
          >
            {isSignup ? "Login" : "Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
}
