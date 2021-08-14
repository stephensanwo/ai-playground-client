import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Upload from "./Upload";
import Documentation from "./Documentation";

const Forecasting = () => {
  const { path } = useRouteMatch();

  const [slider, setSlider] = useState(false);

  const handleSideNav = () => {
    if (slider === false) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };

  console.log(path);
  return (
    <Router>
      <Switch>
        <Route exact path="/forecasting">
          <Documentation handleSideNav={handleSideNav} slider={slider} />
        </Route>
        <Route exact path="/forecasting/upload">
          <Upload handleSideNav={handleSideNav} slider={slider} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Forecasting;
