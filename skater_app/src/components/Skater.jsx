// Skater.jsx
import React, { useState, useEffect } from "react";
import DeleteButton from './DeleteButton';

function Skater(props) {
  const [skaterDetail, setSkaterDetail] = useState([]);
  console.log(props.match.params.id);

  useEffect(() => {
    fetch(`http://localhost:8000/skaters/${props.match.params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setSkaterDetail(result);
        console.log(result);
        console.log(skaterDetail)
      })

      .catch(console.error);
  }, []);

  return (
    <div>
      {/* <img src={skaterDetail.photo_url} alt={skaterDetail.id}/> */}
      <h3>Name: {skaterDetail.name}</h3>
      <h3>Age: {skaterDetail.age}</h3>
      <h3>Hometown: {skaterDetail.home_town}</h3>
      <h3>Sponsor: {skaterDetail.board_sponsor}</h3>
      <h3>Shoe Sponsor: {skaterDetail.shoe_sponsor}</h3>
      <DeleteButton skaterId={skaterDetail.id}/>
    </div>
  );
}

export default Skater;