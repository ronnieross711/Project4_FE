import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skater from "./Skater";


function Skaters(props) {
  const [skaters, setSkaters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/skaters/")
      .then((result) => result.json())

      .then((result) => {
        setSkaters(result);
        console.log(result);
      })

      .catch(console.error);
  }, []);

  return (
    <section class="container">
      {skaters.map((skater) => {
        return (
          <div class="card-title">
            <Link to={`/skaters/${skater.id}`} key={skater.id}>
              <div class="card-image">
                <img src={skater.photo_url} alt="" />
              </div>
              <h3>{skater.name}</h3>
            </Link>
          </div>
        );
      })}
      
    </section>
  );
}

export default Skaters;

/* map through a collection of our skaters.
            from our skater component. this is going to map all the skaters from the database
            And when ypu click on a skater it will show you their info and tricks. */
