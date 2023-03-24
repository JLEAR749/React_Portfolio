import React from "react";
import "./style.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation--list">
        <li className="navigation--list-item">About Me</li>
        <li className="navigation--list-item">Contact</li>
        <li className="navigation--list-item">Resume</li>
        <li className="navigation--list-item">Portfolio</li>
      </ul>
    </nav>
  );
};

export default Navigation;
