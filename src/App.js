import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Forecasting from "./forecasting";
import GptjChatbot from "./GptjChatbot";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";

function App() {
  const [isNavOpen, setIsNavOpen] = useState("closed");
  return (
    <Router>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/navigation">
          <Nav />
        </Route>
        <Route path="/forecasting">
          <Forecasting />
        </Route>
        <Route path="/gptj-chatbot">
          <GptjChatbot />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
