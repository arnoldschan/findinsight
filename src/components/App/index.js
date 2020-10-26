import React from 'react';
import { View } from 'styles/shared-components';
import './App.css';

function App() {

  return (
    <View>
      {/* <TopBar/> */}
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
    </View>
  );
}

export default App;
