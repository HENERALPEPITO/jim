import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ background: "#f5f5f5", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{
        background: "#fff",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
        maxWidth: "350px"
      }}>
        <img src={logo} className="App-logo" alt="logo" style={{ width: "80px", marginBottom: "1rem" }} />
        <h2 style={{ margin: "0 0 1rem 0", color: "#333" }}>Welcome to Jim's App</h2>
        <p style={{ color: "#666" }}>
          This is a simple React app. Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1976d2", textDecoration: "none", fontWeight: "bold" }}
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;