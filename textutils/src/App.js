import logo from './logo.svg';
import './App.css';
import TextForm from './Components/TextForm'
import Navbar from './Components/Navbar'
import About from './Components/About'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  const [Mode, setMode] = useState('light')
  // handle dark mode
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3b4b6d'
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'
    }
  }
  return (
    <>
      <Router>
        <Navbar Mode={Mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route path='/' element={<TextForm heading="Enter The text to analize" Mode={Mode} toggleMode={toggleMode} />
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
