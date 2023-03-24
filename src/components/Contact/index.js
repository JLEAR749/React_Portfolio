import React from "react";
import "./style.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navigation from "../Navigation";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="text" 
        value={input} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your email:
        <input 
          type="string" 
          name="text" 
          value={input} 
          onChange={handleChange}
        />
        </label>
        <label>Type your message:
        <input 
          type="string" 
          name="text" 
          value={input} 
          onChange={handleChange}
        />
        </label>
        <button className="bucket-button">Submit</button>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

const Contact = () => {
  return 
  
};

export default Contact;
