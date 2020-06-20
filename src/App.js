import React, { useState } from "react";
import "./App.css";

function App() {
  let [weight, setWeight] = useState(4);

  return (
    <div>
      <p>Weight is: {weight}</p>

      <button
        onClick={() => {
          setWeight(weight == 10 ? (weight = 0) : weight + 1);
        }}
        name="button"
      >
        Update Weight
      </button>
    </div>
  );
}

export default App;
