import { useState } from "react";
import './style.css';

import { checkPassword, validateEmail } from '../../utils/helper';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;
    }
    
        // Based on the input type, we set the state of either email
        if (inputType === 'email') {
          setEmail(inputValue);
      };
    
      const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
      };

    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
          setErrorMessage('Email or username is invalid');
      return (
        <div>
          <form className="form">
            <input
              value={"email"}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={"name"}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={"message"}
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      )
    }

export default Contact;