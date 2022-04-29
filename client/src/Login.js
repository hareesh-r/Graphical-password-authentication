import React, { useContext } from "react";
import logo from "./asset/img/logo.png";
import background from "./asset/img/background.jpg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "./App";
import axios from "axios";

function Login() {
  const { email, setEmail } = useContext(UserContext);
  const { imageList, setImageList } = useContext(UserContext);
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
            onBlur={() => {
              if (email === "") {
                var element = document.getElementById("toggle");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle1");
                element.classList.add("hidden");
                element.classList.remove("visible");
              }
            }}
            onClick={(e) => {
              if (e.target.value === "") {
                var element = document.getElementById("toggle");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle1");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value === "") {
                var element = document.getElementById("toggle");
                element.classList.add("hidden");
                element.classList.remove("visible");
                element = document.getElementById("toggle1");
                element.classList.add("hidden");
                element.classList.remove("visible");
              } else {
                element = document.getElementById("toggle");
                element.classList.remove("hidden");
                element.classList.add("visible");
                element = document.getElementById("toggle1");
                element.classList.remove("hidden");
                element.classList.add("visible");
              }
            }}
          />
          <div id="warn" className="hidden warning">
            Email does not exist !!
          </div>
          <div className="forgot-password">
            <Link to="/Forgot">Forgot Password ?</Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex abs-center">
          <Link to="Register">
            <button className="bottom-button">Don't have an account ?</button>
          </Link>
          <button
            onClick={() => {
              let status = "dummy";
              axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
              axios
                .get(`http://localhost:5000/user/${email}/data`)
                .then((res) => {
                  setImageList(res.data.listOfImageURL);
                  status = res.data?.status;
                  status = status === 666 ? false : true;
                  if (!status) {
                    var element = document.getElementById("warn");
                    element.classList.remove("hidden");
                    element.classList.add("visible");
                  } else {
                    var element = document.getElementById("next1");
                    element.classList.remove("hidden");
                    element.classList.add("visible");
                    document.getElementById("next1").click();
                  }
                });
            }}
            className="bottom-button"
          >
            Sign in
          </button>
          <Link to="/ImageInputLogin">
            <button id="next1" className="bottom-button hidden">
              Next
            </button>
          </Link>
        </div>
      </div>
      <img className="bg-img" src={background} alt="" />
    </div>
  );
}

export default Login;
