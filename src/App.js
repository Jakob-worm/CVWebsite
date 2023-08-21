import logo from './logo.svg'
import './App.css'
import React from 'react'

function MyButton () {
  return (
      <button>
        Im a button
      </button>
  )
}

function App () {
  return (
    <div className="App">
      <header className="CV-Website">
        <img src={logo} className="App-logo" alt="logo" />
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
        <MyButton />
    </div>
  )
}

export default App
