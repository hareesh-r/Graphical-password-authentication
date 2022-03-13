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

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/Login">
          {/* <button
            className="login-button"
            onClick={() => {
              window.open(
                "http://localhost:3000/PasswordSet",
                "Login",
                features
              );
            }}
          >
            Login
          </button> */}
        </Link>
        {/* <Link to="/Register">Register</Link>
        <Link to="/ImageInput">ImageInput</Link>
        <Link to="/ImageInputLogin">Image Input for Login</Link>
        <Link to="/PasswordSet">PasswordSet</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Confrim">Confrim Password</Link>
        <Link to="/Forgot">Forgot Password</Link>
        <Link to="/">Home Page</Link> */}
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
  );
}

export default App;
