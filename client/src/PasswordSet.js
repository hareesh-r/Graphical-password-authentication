import React from "react";
import logo from "./asset/img/logo.png";
import "./App.css";
import background from "./asset/img/background.jpg";
import lock from "./asset/img/newlock.gif";
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
          <img loop={false} src={lock} alt="" />
        </div>
        <div className="bottom-text successful">
          Your password has been successfully saved !!
        </div>
        <img className="bg-img" src={background} alt="" />
      </div>
    </div>
  );
}

export default PasswordSet;
