import React,{useState} from "react";
import './style.css';

import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

export default function Navigation({defaultPage, handlePageChange}) {
  
      return(<ul className="navigation">
      <li className="navigation-item">
        <a
          onClick={() => handlePageChange('About')}
         className={defaultPage === 'About' ? 'navigation-link active' : 'navigation-link'}
        >
          About
        </a>
      </li>
      <li className="navigation-item">
        <a
          onClick={() => handlePageChange('Portfolio')}
          className={defaultPage === 'Portfolio' ? 'navigation-link active' : 'navigation-link'}
        >
          Project
        </a>
      </li>
      <li className="navigation-item">
        <a
          onClick={() => handlePageChange('Contact')}
          className={defaultPage === 'Contact' ? 'navigation-link active' : 'navigation-link'}
        >
          Contact
        </a>
      </li>
    </ul>)}

