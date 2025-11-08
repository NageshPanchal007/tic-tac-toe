import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h1>Tic Tac Toe 🎮</h1>
      <button onClick={toggleDarkMode} className="mode-btn">
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
