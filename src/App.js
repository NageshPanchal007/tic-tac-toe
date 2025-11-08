import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Board />
       <Footer darkMode={darkMode} />
       
     
    </div>
    
  );
}

export default App;
