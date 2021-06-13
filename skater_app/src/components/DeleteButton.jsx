// DeleteButton.jsx
import React from 'react';
import axios from 'axios';

function DeleteButton({skaterId}) {
    const handleDelete = (e) => {
        console.log('something')
        e.preventDefault()
        axios.delete(`http://localhost:8000/skaters/${skaterId}`)
        .then((res) => {
            window.location.replace("http://localhost:3000/skaters")
            console.log('Deleted')
        })
        .catch(error => console.error)
    }

    return (
        <div>
           <button onClick={handleDelete}>Delete</button> 
        </div>
    );
}

export default DeleteButton;