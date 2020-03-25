import React from 'react';
import './App.css';
import AppRouter from '../../Router';

function App() {
  return (
    <AppRouter>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AppRouter>
  );
}

export default App;
