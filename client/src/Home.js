import React, { useState } from "react";
import logo from "./asset/img/logo.png";
import "./App.css";
const Home = () => {
  var theTop = (window.screen.height / 2 - 600 / 2) / 2;
  var theLeft = window.screen.width / 2 - 800 / 2;
  var features =
    "height=600,width=490,top=" +
    theTop +
    ",left=" +
    theLeft +
    ",toolbar=1,Location=0,Directories=0,Status=0,menubar=1,scrollbars=false,resizable=0";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="Home flex">
      <div className="top flex">
        <h1>Work in Progress..</h1>
      </div>
      <div className="center">
        <div className="input-group flex">
          <div id="toggle7" className="hidden patch"></div>
          <div id="toggle8" className="hidden email-text">
            Email
          </div>
          <input
            onBlur={() => {
              if (email === "") {
                var element = document.getElementById("toggle7");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle8");
                element.classList.add("hidden");
                element.classList.remove("visible");
              }
            }}
            onClick={(e) => {
              if (e.target.value === "") {
                var element = document.getElementById("toggle7");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle8");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value === "") {
                var element = document.getElementById("toggle7");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle8");
                element.classList.add("hidden");
                element.classList.remove("visible");
              } else {
                var element = document.getElementById("toggle7");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle8");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
          />
        </div>
        <div className="input-group flex">
          <div id="toggle5" className="hidden patch"></div>
          <div id="toggle6" className="hidden email-text">
            Password
          </div>
          <input
            onBlur={() => {
              if (email === "") {
                var element = document.getElementById("toggle5");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle6");
                element.classList.add("hidden");
                element.classList.remove("visible");
              }
            }}
            onClick={(e) => {
              if (e.target.value === "") {
                var element = document.getElementById("toggle5");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle6");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value === "") {
                var element = document.getElementById("toggle5");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle6");
                element.classList.add("hidden");
                element.classList.remove("visible");
              } else {
                var element = document.getElementById("toggle5");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle6");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
          />
        </div>
        <div id="warning1" className="hidden">
          Incorrect Password !!
        </div>
        <div className="flex">
          <button
            onClick={() => {
              if (email === "sih@gmail.com" && password === "sih@123") {
                window.location.href = "/Success";
              } else if (password !== "sin@123") {
                var element = document.getElementById("warning1");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            className="black-button"
          >
            Sign In
          </button>
        </div>
        <div className="row flex">
          <div className="lineleft"></div>
          or
          <div className="lineright"></div>
        </div>
        <abbr
          onClick={() => {
            window.open("http://localhost:3000/Login", "Login", features);
          }}
          className="flex pointer"
          title="Sign in with WIP"
        >
          <img src={logo} alt="" />
        </abbr>
      </div>
    </div>
  );
};

export default Home;
