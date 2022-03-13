import React from "react";
import logo from "./asset/img/logo.png";
import background from "./asset/img/background.jpg";
import "./App.css";
import { useState } from "react";
function Register() {
  const [email, setEmail] = useState("");
  const isExist = (email) => {
    return true;
  }
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
              setEmail(e.target.value);
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
          <div id="warn" className="hidden warning">Email already exist !!</div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex">
          <button
            onClick={() => {
              console.log(email);
              if (isExist(email)) {
                var element = document.getElementById("warn");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            className="bottom-button"
          >
            Register
          </button>
        </div>
        <div className="bottom-text">
          Already a user ? <a href="http://localhost:3000/Login">Login</a>
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
}

export default Register;
