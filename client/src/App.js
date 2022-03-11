import "./App.css";
import Login from "./Login";

function App() {
  var theTop = (window.screen.height / 2 - 600 / 2) / 2;
  var theLeft = window.screen.width / 2 - 800 / 2;
  var features =
    "height=600,width=800,top=" +
    theTop +
    ",left=" +
    theLeft +
    ",toolbar=1,Location=0,Directories=0,Status=0,menubar=1,Scrollbars=1,Resizable=1";
  return (
    <div className="App">
      <button
        className="login-button"
        onClick={() => {
          window.open('', "Login", features);
          // window.open(`component`, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        }}
      >
        Login
      </button>
      <Login />
    </div>
  );
}

export default App;
