import React from "react";

function Myfile(props) {
  let userName = props.appName;

  return (
    <div className="topnav">
      <a className="active" href="#home">
        {userName}
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">{props.appUpdate}</a>
    </div>
  );
}

export default Myfile;
