vimport React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

  const inputStyle = {
  width: "100%",
  padding: 10,
  margin: "10px 0",
  borderRadius: 8,
  border: "none",
};

export default function Admin() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [hospital, setHospital] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState("");

  // Validate doctor registration
  const validateSignup = () => {
    if (!fullName.trim() || !username.trim() || !password.trim()) {
      setError("Name, username & password are required.");
      return false;
    }
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Enter a valid 10-digit phone number.");
      return false;
    }
    if (!specialization) {
      setError("Please select specialization.");
      return false;
    }
    if (!licenseNo.trim()) {
      setError("Medical License Number is required.");
      return false;
    }
    if (!qualification.trim()) {
      setError("Please enter qualification.");
      return false;
    }
    if (!hospital.trim()) {
      setError("Hospital / Department is required.");
      return false;
    }
    if (!address.trim()) {
      setError("Address is required.");
      return false;
    }
    return true;
  };

  // SIGNUP function
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!validateSignup()) return;

    const users = JSON.parse(localStorage.getItem("adminUsers")) || [];

    if (users.some((u) => u.username === username)) {
      setError("Username already exists!");
      return;
    }

    const newAdmin = {
      fullName,
      username,
      password,
      email,
      phone,
      specialization,
      experience,
      qualification,
      licenseNo,
      hospital,
      address,
      createdAt: new Date().toISOString(),
    };

    users.push(newAdmin);
    localStorage.setItem("adminUsers", JSON.stringify(users));

    alert("Doctor/Admin account created successfully! Please log in.");

    // reset fields
    setIsSignup(false);
    setFullName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setPhone("");
    setSpecialization("");
    setExperience("");
    setQualification("");
    setLicenseNo("");
    setHospital("");
    setAddress("");
    setError("");
  };

  // LOGIN FUNCTION
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("adminUsers")) || [];
    const foundUser = users.find((u) => u.username === username.trim());

    if (!foundUser) {
      setError("Admin not registered!");
      return;
    }

    if (foundUser.password !== password) {
      setError("Incorrect password!");
      return;
    }

    localStorage.setItem("currentAdmin", JSON.stringify(foundUser));
    navigate("/admindas");
  };

  // Toggle between Login / Signup
  const switchMode = () => {
    setIsSignup(!isSignup);
    setError("");
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
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        style={{
          width: 440,
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
          {isSignup ? "Doctor Registration" : "Admin Login"}
        </h1>

        <form onSubmit={isSignup ? handleSignup : handleLogin}>
          {/* SIGNUP FIELDS */}
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="tel"
                placeholder="Phone (10 digits)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
                required
              />

              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                style={inputStyle}
                required
              >
                <option value="">Select Specialization</option>
                <option value="General Physician">General Physician</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Gynecologist">Gynecologist</option>
              </select>

              <input
                type="text"
                placeholder="Experience (Years)"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                style={inputStyle}
              />

              <input
                type="text"
                placeholder="Qualification (MBBS, MD, etc.)"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="text"
                placeholder="License Number"
                value={licenseNo}
                onChange={(e) => setLicenseNo(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="text"
                placeholder="Hospital / Department"
                value={hospital}
                onChange={(e) => setHospital(e.target.value)}
                style={inputStyle}
                required
              />

              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={inputStyle}
                required
              />
            </>
          )}

          {/* LOGIN & COMMON FIELDS */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          {error && (
            <p style={{ color: "#ff4444", fontWeight: "bold" }}>{error}</p>
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
              fontWeight: "bold",
            }}
          >
            {isSignup ? "Register" : "Login"}
          </button>
        </form>

        <p style={{ marginTop: 15 }}>
          {isSignup ? "Already registered?" : "New Doctor?"}{" "}
          <span
            onClick={switchMode}
            style={{
              color: "#00eaff",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {isSignup ? "Login" : "Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
}
