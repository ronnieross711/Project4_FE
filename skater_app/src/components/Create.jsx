import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function CreateForm() {
    let history = useHistory();
    const initialState = { email: '', password: '' };
    const [formState, setFormState] = useState(initialState);
    // let history = useHistory();
  
    const handleChange = (event) => {
      setFormState({ ...formState, [event.target.id]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // do something with the data in the component state
      console.log(formState);
      // clear the form
      setFormState(initialState);
      history.push('/');
    };
  
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">email:</label>
          <input
            id="email"
            type="text"
            onChange={handleChange}
            value={formState.email}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            value={formState.password}
          />
          <button type="submit">Create Account</button>
        </form>
      );
    }
    
    export default CreateForm;