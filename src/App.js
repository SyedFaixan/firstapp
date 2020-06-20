import React from 'react';
import './App.css';

function App() {
  let counter = 5;
  return (
    <div>
    <p>The value of counter is {counter}</p>
  <button onClick= {()=>{counter++}} name="button">UPDATE COUNTER</button>
    </div>

  );
}

export default App;
