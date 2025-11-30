import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function StudentLogin() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [issues, setIssues] = useState(""); // health issues / other notes
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  // Helper validation
  const validateSignup = () => {
    if (!username.trim() || !password) {
      setError("Username and password are required.");
      return false;
    }
    const ageNum = Number(age);
    if (!age || Number.isNaN(ageNum) || ageNum <= 0 || ageNum > 120) {
      setError("Please enter a valid age.");
      return false;
    }
    if (!gender) {
      setError("Please select a gender.");
      return false;
    }
    // phone: basic 10-digit check (adjust if you want international)
    if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (!address.trim()) {
      setError("Address is required.");
      return false;
    }
    return true;
  };

  // SIGNUP
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!validateSignup()) return;

    const users = JSON.parse(localStorage.getItem("studentUsers")) || [];

    if (users.some((u) => u.username === username)) {
      setError("User already exists!");
      return;
    }

    const newUser = {
      username: username.trim(),
      password, // NOTE: storing plaintext in localStorage — OK for demo only
      age: Number(age),
      gender,
      issues: issues.trim(),
      phone,
      address: address.trim(),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("studentUsers", JSON.stringify(users));

    alert("Account created! Please log in.");
    // reset to login view and clear fields
    setIsSignup(false);
    setUsername("");
    setPassword("");
    setAge("");
    setGender("");
    setIssues("");
    setPhone("");
    setAddress("");
    setError("");
  };

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("studentUsers")) || [];
    const foundUser = users.find((u) => u.username === username.trim());

    if (!foundUser) {
      setError("User not registered!");
      return;
    }

    if (foundUser.password !== password) {
      setError("Incorrect password!");
      return;
    }

    // store current logged-in user (without password if you prefer)
    const userForSession = { ...foundUser };
    delete userForSession.password;
    localStorage.setItem("studentCurrentUser", JSON.stringify(userForSession));

    navigate("/dashboardlogin");
  };

  // Toggle between login/signup and clear errors
  const toggleMode = () => {
    setIsSignup(!isSignup);
    setError("");
    setUsername("");
    setPassword("");
    setAge("");
    setGender("");
    setIssues("");
    setPhone("");
    setAddress("");
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
          width: 420,
          padding: 28,
          borderRadius: 16,
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: 8 }}>
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

          {isSignup && (
            <>
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{
                  width: "100%",
                  padding: 10,
                  margin: "10px 0",
                  borderRadius: 8,
                  border: "none",
                }}
                min={1}
                max={120}
                required
              />

              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{
                  width: "100%",
                  padding: 10,
                  margin: "10px 0",
                  borderRadius: 8,
                  border: "none",
                }}
                required
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Non-binary">Non-binary</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>

              <textarea
                placeholder="Any health issues or notes (optional)"
                value={issues}
                onChange={(e) => setIssues(e.target.value)}
                style={{
                  width: "100%",
                  padding: 10,
                  margin: "10px 0",
                  borderRadius: 8,
                  border: "none",
                  minHeight: 60,
                }}
              />

              <input
                type="tel"
                placeholder="Phone (10 digits)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{
                  width: "100%",
                  padding: 10,
                  margin: "10px 0",
                  borderRadius: 8,
                  border: "none",
                }}
                required
              />
            </>
          )}

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

        <p style={{ marginTop: 12 }}>
          {isSignup ? "Already have an account?" : "New student?"}{" "}
          <span
            style={{ color: "#00eaff", cursor: "pointer", fontWeight: "bold" }}
            onClick={toggleMode}
          >
            {isSignup ? "Login" : "Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
}