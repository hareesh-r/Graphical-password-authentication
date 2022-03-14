import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageInputRegister from "./ImageInputRegister";
import Login from "./Login";
import PasswordSet from "./PasswordSet";
import Register from "./Register";
import ConfrimPass from "./ConfrimPass";
import ForgotPass from "./ForgotPass";
import Home from "./Home";
import Success from "./Success";
import { createContext, useState } from "react";
import ImageInputLogin from "./ImageInputLogin";

export const UserContext = createContext();
function App() {
  const [email, setEmail] = useState("hello");
  const [passwordhash, setPasswordHash] = useState("");
  const [imageList, setImageList] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtqK53mxBwu2kcvwtd2H2ubms89hv70sztZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_OEOKvq4FqE1ixXabz_0KA55kNp0NtYcfqw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6oPIzWAVL6bJTbPZ4N2paZ1xpqti-QRj7g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnnObTCNg1QJoEd9Krwl3kSUnPYTZrxb5Ig&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGyOXXirSyzE3dWNNqam3jtKlZGbxZx640Q&usqp=CAU",
  ]);
  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        passwordhash,
        setPasswordHash,
        imageList,
        setImageList,
      }}
    >
      <div className="App">
        <Router>
          <Link to="/Login"></Link>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Register">
              <Register />
            </Route>
            <Route path="/ImageInputRegister">
              <ImageInputRegister isLogin={false} />
            </Route>
            <Route path="/ImageInputLogin">
              <ImageInputLogin />
            </Route>
            <Route path="/PasswordSet">
              <PasswordSet />
            </Route>
            <Route path="/Confrim">
              <ConfrimPass />
            </Route>
            <Route path="/Forgot">
              <ForgotPass />
            </Route>
            <Route path="/Success">
              <Success />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
