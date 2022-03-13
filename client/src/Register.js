import React from "react";
import logo from "./asset/img/logo.png";
import background from "./asset/img/background.jpg";
import "./App.css";
function Register() {
  return (
    <div className="container">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="Register-title">
          <h1>Register with WiP</h1>
        </div>
      </div>
      <div className="center">
        <div className="input-group flex">
          <div id="toggle2" className="hidden patch"></div>
          <div id="toggle3" className="hidden email-text">
            Email
          </div>
          <input
            onClick={(e) => {
              if (e.target.value == "") {
                var element = document.getElementById("toggle2");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle3");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            type="text"
            placeholder="Email"
            onChange={(e) => {
              if (e.target.value == "") {
                var element = document.getElementById("toggle2");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle3");
                element.classList.add("hidden");
                element.classList.remove("visible");
              } else {
                var element = document.getElementById("toggle2");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle3");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
          />
          <div className="forgot-password">
            <a href="">Forgot Password ?</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex">
          <button className="bottom-button">Register</button>
        </div>
        <div className="bottom-text">
          Already a user ? <a href="">Login</a>
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
}

export default Register;
