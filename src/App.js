import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./screen/home/home.screen";
import Courses from "./screen/corsi/corsi.screen";
import NavBar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/corsi">
          <Courses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
