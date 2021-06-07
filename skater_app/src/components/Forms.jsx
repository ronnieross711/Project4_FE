import React, { useState } from "react";

function CreateForm() {
    const initialState = { email: '', password: '' };
    const [formState, setFormState] = useState(initialState);
  
    const handleChange = (event) => {
      setFormState({ ...formState, [event.target.id]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // do something with the data in the component state
      console.log(formState);
      // clear the form
      setFormState(initialState);
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