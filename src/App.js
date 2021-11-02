import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router className="App">
      <NavBar />
    </Router>
  );
}

export default App;
