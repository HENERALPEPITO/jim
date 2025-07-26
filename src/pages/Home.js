import React from 'react';

function Home() {
  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Hi, I'm Jim 👋</h2>
      <p style={textStyle}>
        I'm a passionate frontend developer focused on building responsive and accessible web applications using React.
      </p>
      <a href="#projects" style={buttonStyle}>View Projects</a>
    </div>
  );
}

const cardStyle = {
  background: '#fff',
  padding: '2rem',
  borderRadius: '12px',
  maxWidth: '500px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
};

const titleStyle = {
  color: '#333',
  marginBottom: '0.5rem'
};

const textStyle = {
  color: '#555',
  marginBottom: '1.5rem'
};

const buttonStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  textDecoration: 'none'
};

export default Home;
