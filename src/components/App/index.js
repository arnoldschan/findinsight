import React, { useState } from 'react';
import './App.css';
import TopBar from '../NavigationPane/TopBar';
import NavBar from "../NavigationPane/NavBar";

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="App">
      {/* <TopBar/> */}
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)}/>
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <header className="App-header">
        <p>
          Essdit <code>src/App.js</code>  sa to sav.
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
  );
}

export default App;
