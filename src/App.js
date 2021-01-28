// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Form from "./Form";
import "./styles/app.css";
import NavBar from "./components/nav";
import Home from "./components/home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    const loaderStyles = document.querySelector(".loader-styles");
    setTimeout(() => {
      if (loader) {
        loader.remove();
      }
      if (loaderStyles) {
        loaderStyles.remove();
      }
    }, 3000);
  }, []);
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
