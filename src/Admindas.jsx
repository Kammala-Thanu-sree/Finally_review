import React from 'react'

const Admindas = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #ffe082, #ffca28)',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          marginBottom: '30px',
          color: '#5d4037',
          fontSize: '3rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          background: 'white',
          padding: '30px 26px',
          borderRadius: '16px',
          boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
          width: '400px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#6d4c41', marginBottom: '20px' }}>
          Welcome, Admin
        </h2>
        <p style={{ marginBottom: '16px' }}>
          Here you can manage students, health records, appointments, and wellness resources.
        </p>
      </div>
    </div>
  );
};

export default Admindas
