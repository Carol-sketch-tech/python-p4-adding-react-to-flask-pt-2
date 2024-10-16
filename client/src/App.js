import logo from './logo.svg';
import './App.css';
import {useEffect } from "react";

function App() {
  useEffect(()=> {
    fetch("/movies")
    .then ((r)=> r.json())
    .then((movies)=> console.log(movies));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
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
      <h1>Check console for a list of movies</h1>
    </div>
  );
}

export default App;
