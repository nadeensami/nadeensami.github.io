import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./Form";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/">
          <div class="landing-page">
            <h1>beware: cool stuff coming soon to a personal site near you!</h1>
            <h2>sometime this winterbreak, 2020</h2>
            <p>
              sponsored by: perfectionism (tm) and the need to have a great website on the first go
            </p>
            <button>
              <a href="mailto:nadeen@ualberta.ca">let's connect!</a>
            </button>
          </div>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
