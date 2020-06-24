import React from "react";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const responseFacebook = (response) => {
  console.log("login result", response);
};
const componentClicked = (data) => {
  console.warn(data);
};

const responseGoogle = (response) => {
  console.log(response);
};
function App(props) {
  console.log(props);
  return (
    <div>
      <h1>Login with Facebook</h1>
      <FacebookLogin
        appId="256203798781145"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
      <h1>Login with Google</h1>
      <GoogleLogin
        clientId="360526443191-eoaosjlhl752kgpshb8oqcdhjp1l89od.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
