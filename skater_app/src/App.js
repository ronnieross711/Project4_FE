import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css'


function App() {
  
  useEffect(() => {
    fetch("http://localhost:8000/skaters/", {
      mode: 'no-cors' // 'cors' by default
    })
    .then((result) => result.json())
    .then((result) => {
        console.log(result)
                    
    })
    .catch(console.error)

}, []);

  return (
   <div className="backimg">
   <Header  />
   <Main />
   </div>
  );
}

export default App;
