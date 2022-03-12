import React from "react";
import logo from "./asset/img/logo.png";
import "./App.css";
function Register() {
  return (
    <div className="container">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="Register-title">
          <h1>Sign in with WiP</h1>
        </div>
      </div>
      <div className="center">
        <div className="input-group flex">
          <div id='toggle' className="hidden patch"></div>
          <div id='toggle1' className="hidden email-text">Email</div>
          <input onClick={(e)=>{
            if(e.target.value == ''){
            var element = document.getElementById("toggle");
            element.classList.remove("hidden");
            element.classList.add("visible");
            element = document.getElementById("toggle1");
            element.classList.remove("hidden");
            element.classList.add("visible");
            }
          }} type="text" placeholder="Email" />
          <div className="forgot-password">
            <a href="">Forgot Password ?</a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-button-grp flex">
          <button className="bottom-button">Register</button>
        </div>
      </div>
      <img class="bg-img" src="https://s3-alpha-sig.figma.com/img/c4ea/5074/6b02118e4a6f7fde437c5aa12627e9ee?Expires=1647820800&Signature=E3IEBGuwhXF8x~JgYkipvXQkZ~erB8e~yyV4vV2rJ3ABPVCKZFWObUEC-6kyAs4uKzDQtcqyX8Shw1r3mhYaw6Qrn3Kjp5oufxBcEO3g1IXd5FB6rE4HHPRzC0u7X04E5BujGLABL9E6iFwiG~0sTK-L81OQPzlvtXVyZFRLDeRTGBcvoWO2UGc16K75iqGcT4p5cV1oT4sgqFf1za3~s4umrcOUotRxYpKAKN3YTq4cmVk6Lrq~l~b5KO0v7u0s64LFoK3ZQGL5UoRgOgGP7E94pWUn~oHYnRXWgu1JoaqQus0Y6B4M7RrckccQyWLj85QvFS1jrxuuVsDVuUwr~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
    </div>
  );
}

export default Register;