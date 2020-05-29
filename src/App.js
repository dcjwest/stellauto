import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
