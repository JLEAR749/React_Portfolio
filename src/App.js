import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import React from 'react';
import 'App.css';

function App() {
  const [page, setPage] = useState('About Me');
  const renderPage = () => {
    switch (page) {
      case 'About Me':
        return <About/>

      case 'Contact':
        return <Contact/>

      case 'Project':
        return <Project />

      default:
        return <About />
    }
  }

  return (
    <div className="App">
      <Header />
      {renderPage()}
    </div>
  )

}

export default App;
