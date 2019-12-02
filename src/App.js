import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Intro from './components/intro';
import Bio from './components/bio';
import Portfolio from './components/portfolio';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Bio />
      <Portfolio />
    </div>
  );
}

export default App;
