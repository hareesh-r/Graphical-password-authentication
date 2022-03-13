import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import Login from "./Login";
import PasswordSet from "./PasswordSet";
import Register from "./Register";

function App() {
  var theTop = (window.screen.height / 2 - 600 / 2) / 2;
  var theLeft = window.screen.width / 2 - 800 / 2;
  var features =
    "height=500,width=460,top=" +
    theTop +
    ",left=" +
    theLeft +
    ",toolbar=1,Location=0,Directories=0,Status=0,menubar=1,scrollbars=false,resizable=0";
  return (
    <div className="App">
      <Router>
        <Link to="/Login">
          <button
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
          </button>
        </Link>
        <Link to="/Register">Register</Link>
        <Link to="/ImageInput">ImageInput</Link>
        <Link to="/ImageInputLogin">Image Input for Login</Link>
        <Link to="/PasswordSet">PasswordSet</Link>
        <Link to="/Login">Login</Link>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
