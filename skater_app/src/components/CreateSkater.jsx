import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CreateSkater(props) {
  const [CreateSkater, setCreateSkater] = useState();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('-------')
    const skaterInfo = {
      name: event.target.name.value,
      age: event.target.age.value,
      home_town: event.target.home_town.value,
      board_sponsor: event.target.board_sponsor.value,
      shoe_sponsor: event.target.shoe_sponsor.value,
      photo_url: event.target.photo_url.value,
    };
    axios.post("http://localhost:8000/skaters/", skaterInfo)
      .then((res) => {   
      setCreateSkater(res.data);
      window.location.replace("http://localhost:3000/");
    });
  };
  console.log('This is the best')
  return (
    <form className="CreateForm" onSubmit={(event) => handleSubmit(event)}>
      {/* <label htmlFor="username">username:</label> */}
      <input
        name="name"
        placeholder="Name"
        type="text"
        
      />
      <br />
      <input
        name="age"
        placeholder="Age"
        type="text"
    
      />
      <br />
      <input
        name="home_town"
        placeholder="Home Town"
        type="text"
        
      />
      <br />
      <input
        name="board_sponsor"
        placeholder="Board Sponsor"
        type="text"
        
      />
      <br />
      <input
        name="shoe_sponsor"
        placeholder="Shoe Sponsor"
        type="text"
        
      />
      <br />
      <input
        name="photo_url"
        placeholder="Photo Url"
        type="text"
        
      />
      {/* <Link to={"/skaters"}> */}
        <input type="submit"/>
      {/* </Link> */}
    </form>
  );
}

export default CreateSkater;
