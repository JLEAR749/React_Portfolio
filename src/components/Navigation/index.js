import React,{useState} from "react";
import './style.css';

import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

export default function Navigation({defaultPage, handlePageChange}) {
  
      return(<ul className="naviagtion">
      <li className="naviagtion-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
         className={defaultPage === 'About' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          About
        </a>
      </li>
      <li className="naviagtion-item">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={defaultPage === 'Project' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          Project
        </a>
      </li>
      <li className="naviagtion-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={defaultPage === 'Contact' ? 'naviagtion-link active' : 'naviagtion-link'}
        >
          Contact
        </a>
      </li>
    </ul>)}

