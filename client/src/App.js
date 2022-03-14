import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import Login from "./Login";
import PasswordSet from "./PasswordSet";
import Register from "./Register";
import ConfrimPass from "./ConfrimPass";
import ForgotPass from "./ForgotPass";
import Home from "./Home";
import Success from "./Success";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
  const [email, setEmail] = useState("hello");

  return (
    <UserContext.Provider value={{ email, setEmail }}>
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
            <Route path="/ImageInput">
              <ImageInput isLogin={false} />
            </Route>
            <Route path="/ImageInputLogin">
              <ImageInput isLogin={true} />
            </Route>
            <Route path="/PasswordSet">
              <PasswordSet />
            </Route>
            <Route path="/Confrim">
              <ConfrimPass
                prop={
                  "9a63b5369d7e691754af0266073a013fc05ee40fac8e58eb22ab5c7c355c7f96"
                }
              />
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
