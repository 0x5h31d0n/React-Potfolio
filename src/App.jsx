import React, { useEffect } from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Hero from './Components/Hero';
import HomePage from './Components/HomePage';
import './style.css'; // General styles for the app

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;