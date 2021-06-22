import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screen/home/home.screen";
import Courses from "./screen/corsi/corsi.screen";
import NavBar from "./components/nav-bar/nav-bar";
import PageWrapper from "./components/page-wrapper/page-wrapper";

function App() {
  return (
    <Router>
      <NavBar />
      <PageWrapper onScroll={() => console.log("OOOo")}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/corsi">
            <Courses />
          </Route>
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
