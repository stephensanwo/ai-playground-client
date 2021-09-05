import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Forecasting from "./forecasting";
import GptjChatbot from "./GptjChatbot";
import Landing from "./pages/Landing";
import { LogoGithub16, LogoLinkedin16 } from "@carbon/icons-react";
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
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5rem",
          marginTop: "5rem",
        }}
      >
        <p style={{ fontSize: "0.8rem", color: "#039874" }}>
          Developed by Stephen Sanwo
        </p>{" "}
      </Link>
    </Router>
  );
}

export default App;
