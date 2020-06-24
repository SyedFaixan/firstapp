import React from "react";
import "./mycss.css";
import MyFile from "./Myfile";
function App(props) {
  console.log(props);
  return (
    <div>
      <MyFile appName={props.indexName} appUpdate={"Updates"} />
    </div>
  );
}

export default App;
