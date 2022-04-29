import React from "react";
import logo from "./asset/img/logo.png";
import background from "./asset/img/background.jpg";
import "./App.css";
function ForgotPass() {
  return (
    <div className="container">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="Register-title">
          <h1>Forgot Password</h1>
        </div>
      </div>
      <div className="center">
        <div className="send-link">
          An OTP to reset you password has been sent to your mail. <br />
          <br />
          Tap <a>here</a> to resend
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
}

export default ForgotPass;
