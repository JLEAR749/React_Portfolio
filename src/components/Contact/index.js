import React from "react";

function Contact() {
  const [formState, setFormState]=useState({name:'', email:'',message:''});
  const [errorMessage,setErrorMessage] = useState('');
  const {name, email, message} = formState;

}
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navigation from "../Navigation";

  const handleSubmit = (event) => {
    if (event.target.name === 'email'){
      if (!isValid){
        setErrorMessage('Your email is invalid');
      }else{
        setErrorMessage('';)
      }
    }
    if (!errorMessage){
      setFormState({...formState,[event.target.name]:event.target.value});
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 data>Contact Me</h1>
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type="text" 
        name="name" 
        value={name} 
        onChange={handleChange}
      />
      </label>
      <label>Email address:
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={handleChange}
        />
        </label>
        <label>Message:
        <textarea 
          name="message" 
          value={message} 
          onChange={handleChange}
        />
        </label>
        <button className="bucket-button">Submit</button>
        <Navigation />
    </form>
  </section>
  );
}


export default Contact;
