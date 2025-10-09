import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
export default function Admin(){
const navigate = useNavigate();
 const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded check
    if (username === 'admin' && password === 'admin123') {
      navigate('/admindas'); // Go to admin dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#66cdaa',
        minHeight: '100vh',
        paddingTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: '#003366', marginBottom: 20 }}>Admin Portal</h1>

      <div
        style={{
          background: 'white',
          padding: 24,
          borderRadius: 12,
          width: 360,
          boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
        }}
      >
        <h2 style={{ marginBottom: 12 }}>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: 8, margin: '8px 0' }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: 8, margin: '8px 0' }}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: 10,
              marginTop: 8,
              background: '#00796b',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}