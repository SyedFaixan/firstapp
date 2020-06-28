import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const userName = "SyedFaixan";
  const [data, setData] = useState([{}]); //state of the componenet
  // api calls should be implemented inside useEffect
  useEffect(() => {
    //definition of function
    async function apiCall() {
      const responseFromApiCall = await fetch(
        "https://api.github.com/users/SyedFaixan"
      );

      //same as above line but with string concatenation
      /*const responseFromApiCall = await fetch(
       *  "https://api.github.com/users/"+userName
       */
      const ResponseInJsonFormat = await responseFromApiCall.json();
      console.log(ResponseInJsonFormat);
      //set State: when getting response from API change the state
      setData(ResponseInJsonFormat);
    }
    //call to function
    apiCall();
  }, []);

  //by studying the output response to that api call,
  //you can print/render whatever field of that response object
  return (
    <div>
      <h1>Hello {data.name ? data.name : data.login}</h1>
      <h3>You Created github on {data.created_at}</h3>
    </div>
  );
}

// data.name ? data.name : data.login
// if data.name is available (is true or not null) then show data.name else show data.login
export default App;
