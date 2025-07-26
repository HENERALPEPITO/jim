import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', background: '#f0f2f5', minHeight: '100vh' }}>
        <header style={{ padding: '1rem 2rem', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>Jim's Portfolio</h1>
          <nav style={{ marginTop: '0.5rem' }}>
            <Link to="/" style={navLinkStyle}>Home</Link>
            <Link to="/about" style={navLinkStyle}>About</Link>
          </nav>
        </header>
        <main style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const navLinkStyle = {
  marginRight: '1rem',
  textDecoration: 'none',
  color: '#1976d2',
  fontWeight: 'bold'
};

export default App;
