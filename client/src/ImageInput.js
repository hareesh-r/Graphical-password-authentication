import React from "react";
import logo from "./asset/img/logo.png";
import "./App.css";
import { useState } from "react";
import background from "./asset/img/background.jpg";
import { BrowserRouter as Link } from "react-router-dom";
function ImageInput() {
  const [count, setCount] = useState(0);
  var imageList = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqK53mxBwu2kcvwtd2H2ubms89hv70sztZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OEOKvq4FqE1ixXabz_0KA55kNp0NtYcfqw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6oPIzWAVL6bJTbPZ4N2paZ1xpqti-QRj7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGyOXXirSyzE3dWNNqam3jtKlZGbxZx640Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_f-3Npwnj40B6u8O8WmcX8swxRqUS8ncQg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VjnBrfx77ksp21B977As27VwMMASlNP3Aw&usqp=CAU"
  ];
  return (
    <div className="ImageInput">
      <div className="container">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="login-title">
            <h1>Enter your Password</h1>
          </div>
        </div>
        <div className="center">
          <div className="image-container">
            {imageList.map((image, index) => (
              <div
                id={index}
                onClick={() => {
                  setCount(count + 1);
                  console.log(index, count);
                  var element = document.getElementById(index);
                  element.classList.add("selected");
                }}
                className="password-image"
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <img class="bg-img" src={background} alt="" />
      </div>
    </div>
  );
}

export default ImageInput;
