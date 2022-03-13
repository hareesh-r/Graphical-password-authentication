import React from "react";
import logo from "./asset/img/logo.png";
import "./App.css";
import background from "./asset/img/background.jpg";
function PasswordSet() {
  return (
    <div className="PasswordSet">
      <div className="container">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="login-title">
            <h1>Enter your Password</h1>
          </div>
        </div>
        <div className="gif center flex">
        {/* https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif */}
          <img loop={false} src="https://media.giphy.com/media/MCtyDN245YrlidibEi/giphy.gif" alt="" />
        </div>
        <img class="bg-img" src={background} alt="" />
      </div>
    </div>
  );
}

export default PasswordSet;
