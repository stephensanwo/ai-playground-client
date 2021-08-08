import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/navigation">
          <Nav />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
