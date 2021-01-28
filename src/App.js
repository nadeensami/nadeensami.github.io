// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Form from "./Form";
import "./styles/app.css";
import NavBar from "./components/nav";
import Home from "./components/home";

const App = () => (
  <div>
    <NavBar />
    <Home />
  </div>
);

export default App;
