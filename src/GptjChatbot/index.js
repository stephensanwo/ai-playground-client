import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Chatlaunch from "./ChatLaunch";
import Chat from "./Chat";

const GptjChatbot = (props) => {
  const { path } = useRouteMatch();
  const [slider, setSlider] = useState(false);

  const handleSideNav = () => {
    if (slider === false) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path={`${path}/chat/:token`}>
          <Chat handleSideNav={handleSideNav} slider={slider} />
        </Route>
        <Route path={`${path}`}>
          <Chatlaunch handleSideNav={handleSideNav} slider={slider} />
        </Route>
      </Switch>
    </Router>
  );
};

export default GptjChatbot;
