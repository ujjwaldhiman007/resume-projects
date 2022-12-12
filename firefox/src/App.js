// import logo from './logo.svg';

import './App.css';
import Main from './myComponents/Main'
import Form from './myComponents/Form'
import Appgird from './myComponents/Appgird'
import { TiAdjustContrast } from "react-icons/ti";
import { useState, useEffect } from 'react';


const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};


function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };


  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <>
      <div className="my-container">
        <Main />
        <Form />
        <button className='toggle-btn' onClick={toggleTheme}>
          < TiAdjustContrast size="2rem" />
        </button>
        <Appgird />
      </div>
    </>
  );
}

export default App;
