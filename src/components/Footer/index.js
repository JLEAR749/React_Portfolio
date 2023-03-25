import React from "react";
import Navigation from "../Navigation";
import "./style.css";

const Footer = () => {

  return (
      <div className="content-footer">
        <p>
          <h2>My Full Stack Development Portfolio</h2>
          <a href="https://github.com/JLEAR749">Johannah Lear</a>
          <a href="https://www.linkedin.com/in/johannahlear/" >LinkedIn</a>
        </p>
        <Navigation/>
      </div>
    
  );
};

export default Footer;