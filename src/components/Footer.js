import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <p>© 2025 Tic Tac Toe Game | NP</p>
    </footer>
  );
};

export default Footer;
