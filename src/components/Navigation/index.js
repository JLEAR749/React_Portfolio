import React from "react";

const Navigation = () => {
  

      return<ul className="nav naviagtion">
      <li className="naviagtion-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          Home
        </a>
      </li>
      <li className="naviagtion-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
         className={currentPage === 'About' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          About
        </a>
      </li>
      <li className="naviagtion-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          Project
        </a>
      </li>
      <li className="naviagtion-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          Contact
        </a>
      </li>
    </ul>}

  export default Navigation;
