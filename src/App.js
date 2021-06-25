import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screen/home/home.screen";
import Courses from "./screen/corsi/corsi.screen";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/foooter";
import Company from "./screen/compagnia/compagnia.screen";
import PageWrapper from "./components/page-wrapper/page-wrapper";
import { useEffect, useState } from "react";

function App() {
  const [loadedFont, setLoadedFont] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(function () {
      setLoadedFont(true);
      console.log("Fonts loaded");
    });
  }, []);
  if (loadedFont)
    return (
      <Router>
        <NavBar />
        <PageWrapper>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/corsi">
              <Courses />
            </Route>
            <Route path="/compagnia">
              <Company />
            </Route>
          </Switch>
        </PageWrapper>
        <Footer />
      </Router>
    );
  else {
    return null;
  }
}

export default App;
