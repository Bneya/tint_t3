import React from 'react'
import logo from '../assets/logo.svg';
import Chat from '../components/chat';
import FlightsInfo from '../components/flightsinfo';

export default function MainMap() {
  // javascript code
  return (
    // html-ish
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Desde el nuevo componente
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
      <Chat />
      <FlightsInfo />
    </div>
  )
}
