import React, { useState } from "react";
import logo from "./asset/img/logo.png";
import background from "./asset/img/background.jpg";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
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
          <div id="toggle" className="hidden patch"></div>
          <div id="toggle1" className="hidden email-text">
            Email
          </div>
          <input
            onClick={(e) => {
              if (e.target.value == "") {
                var element = document.getElementById("toggle");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle1");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value)
              if (e.target.value == "") {
                var element = document.getElementById("toggle");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle1");
                element.classList.add("hidden");
                element.classList.remove("visible");
              } else {
                var element = document.getElementById("toggle");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle1");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
          />
          <div className="forgot-password">
            <a href="http://localhost:3000/Forgot">Forgot Password ?</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex">
          <a href="http://localhost:3000/Register"><button className="bottom-button">Don't have an account ?</button></a>
          <button onClick={()=>console.log(email)} className="bottom-button">Sign in</button>
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
}

export default Login;
