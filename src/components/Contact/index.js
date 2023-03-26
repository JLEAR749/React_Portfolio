import { useState } from "react";
import './style.css';

import { checkPassword, validateEmail } from '../../utils/helper';

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [Name, setName] = useState('');
    cont [Message, setMessage] = useState('');
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
    
      const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
      };

        // First we check to see if the email is not valid so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !Name) { 
          setErrorMessage('Email or username is invalid')
        return;
        }
        // if (!checkName(Name)){
        //   setErrorMessage(
        //     `Type Name in name input`: ${Name}`
        //   );
        //   return;
        // }
        // alert(`Hello ${Name}`);

        // setName('');
        // setEmail('');
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
              value={"Name"}
              name="Name"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
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
      );
    
    }};
export default Contact;