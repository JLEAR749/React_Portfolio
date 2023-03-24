import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resum from  './'
import './App.css';

function App() {
  const [page, setPage] = useState('About Me');
  const renderPage=() => {
    switch(page){
      case 'About Me':
        return <About/>
    }
      switch(page){
        case 'Contact':
          return <Contact/>
    }
  switch(page){
    case'Resume':
      return <Resume/>
    }
  switch(page){
  case'Portfolio':
    return <Portfolio/>
    }
  return (
    <div className="App">
     <Header />
     {renderPage()}
    </div>
  )
};
  
export default App;}
