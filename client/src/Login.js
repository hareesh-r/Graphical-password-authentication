import React from "react";
import logo from "./asset/img/logo.png";
import "./App.css";
function Login() {
  return (
    <div className="container">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="login-title">
          <h1>Sign in with WiP</h1>
        </div>
      </div>
      <div className="center">
        <div className="input-group flex">
          <div className="patch"></div>
          <div className="email-text">Email</div>
          <input type="text" placeholder="Email" />
          <div className="forgot-password">
            <a href="">Forgot Password ?</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex">
          <button className="bottom-button">Don't have an account ?</button>
          <button className="bottom-button">I'm already here</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
