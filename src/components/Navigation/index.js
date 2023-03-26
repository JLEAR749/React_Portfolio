import React from "react";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

export default function Navigation({About, Contact, Portfolio,handlePageChange}) {
  const [currentPage, setCurrentPage] = useState('Home');
  
      return<ul className="naviagtion">
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
