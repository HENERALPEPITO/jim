import React from 'react';

function About() {
  return (
    <div style={{
      background: '#fff',
      padding: '2rem',
      borderRadius: '12px',
      maxWidth: '600px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      lineHeight: '1.6'
    }}>
      <h2 style={{ color: '#333' }}>About Me</h2>
      <p style={{ color: '#555' }}>
        I’m Jim, a React developer who enjoys creating modern, user-friendly web experiences. I specialize in front-end technologies including React, JavaScript, and responsive UI/UX design.
      </p>
      <p style={{ color: '#555' }}>
        When I'm not coding, I love exploring open-source projects and learning new tools in the JavaScript ecosystem.
      </p>
    </div>
  );
}

export default About;
