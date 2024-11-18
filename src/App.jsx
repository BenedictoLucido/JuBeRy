import React from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';

function App() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/Dashboard');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">TSETSSETS</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <button onClick={goToDashboard} className="navigate-button">
          Go to Dashboard
        </button>
      </header>
    </div>
  );
}

export default App;
