import React, { useState, useEffect, createContext } from 'react';
import './App.css';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
import CartExercise from './Components/CartExercise/CartExercise';


function App() {

  // const fetchAllProds = (e) => {
  //   GlobalProds()
  //   .then(response => {
  //     console.log(response);
  //     });
  // }

  return (
    <div className='App'>
      {/* <Context /> */}
        <CartExercise />
      {/* <Buttons /> */}
      {/* <FifaTourney /> */}
    </div>
  );
}

export default App;
