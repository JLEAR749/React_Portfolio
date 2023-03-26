import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import React from 'react';
import './App.css';

export default function App() {
  const [defaultPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (defaultPage === 'About') {
      return <About />;
    }
    if (defaultPage === 'Portfolio') {
      return <Portfolio />;
    }
    // if (defaultPage === 'Resume') {
    //   return <Resume />;
    // }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}