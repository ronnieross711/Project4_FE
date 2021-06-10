import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import './Login.css'

function LoginForm() {
    let history = useHistory();
    const initialState = { username: '', password: '' };
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
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">username:</label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            value={formState.username}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            onChange={handleChange}
            value={formState.password}
          />
          <button type="submit">Log In</button>
        </form>
      );
    }
    
    export default LoginForm;