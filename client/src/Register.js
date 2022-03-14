import React, { useContext } from "react";
import logo from "./asset/img/logo.png";
import background from "./asset/img/background.jpg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "./App";
import axios from "axios";
function Register() {
  const { email, setEmail } = useContext(UserContext);

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
          <div id="warn2" className="hidden warning">
            Email already exist !!
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex">
          <Link to="/ImageInput">
            <button
              onClick={() => {
                console.log(email);
                let status = "dummy";
                axios.defaults.headers.post["Access-Control-Allow-Origin"] =
                  "*";
                axios
                  .get(`http://localhost:5000/user/${email}/data`)
                  .then((res) => {
                    status = res.data?.status;
                    status = status === 666 ? false : true;
                    if (status) {
                      var element = document.getElementById("warn2");
                      element.classList.remove("hidden");
                      element.classList.add("visible");
                    } else {
                      axios.defaults.headers.post[
                        "Access-Control-Allow-Origin"
                      ] = "*";
                      axios.post(`http://localhost:5000/register`, {
                        mail: "Fred",
                        password: "Flintstone",
                        url: "https://www.google.com/",
                      });
                      window.location.href = "/Login";
                    }
                  });
                if (!status) {
                  var element = document.getElementById("warn");
                  element.classList.remove("hidden");
                  element.classList.add("visible");
                } else {
                }
              }}
              className="bottom-button"
            >
              Register
            </button>
          </Link>
        </div>
        <div className="bottom-text">
          Already a user ? <Link to="/Login">Login</Link>
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
}

export default Register;
