import React from 'react';
import './app.css'
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log("login result",response);
}
const componentClicked = (data)=> {
  console.warn(data)
}
export default class App extends React.Componenet {
  render () {
    return (
      <div>
      <FacebookLogin
        appId="256203798781145"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />,
      document.getElementById('demo')
      </div>
    )
  }
}
