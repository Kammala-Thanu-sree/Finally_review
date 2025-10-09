import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '14px',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #42a5f5, #1e88e5)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  };

  const handleMouseOver = (e) => {
    e.target.style.background = 'linear-gradient(135deg, #64b5f6, #1565c0)';
    e.target.style.transform = 'scale(1.03)';
  };

  const handleMouseOut = (e) => {
    e.target.style.background = 'linear-gradient(135deg, #42a5f5, #1e88e5)';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <h1
        style={{
          marginBottom: '30px',
          color: '#004d40',
          fontSize: '3rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        Student Dashboard
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
        <button
          onClick={() => handleNavigation('/records')}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Health Records
        </button>

        <button
          onClick={() => handleNavigation('/appointments')}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Appointments
        </button>

        <button
          onClick={() => handleNavigation('/wellness')}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Wellness Resources
        </button>

        <button
          onClick={() => handleNavigation('/login')}
          style={{ ...buttonStyle, background: 'linear-gradient(135deg, #ef5350, #c62828)', marginTop: '20px' }}
          onMouseOver={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #e57373, #b71c1c)';
            e.target.style.transform = 'scale(1.03)';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #ef5350, #c62828)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard
