import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Upload from "./Upload";
import Documentation from "./Documentation";
import Analysis from "./Analysis";
import Result from "./Result";

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
          <Upload />
        </Route>
        <Route exact path="/forecasting/analysis">
          <Analysis />
        </Route>
        <Route exact path="/forecasting/result">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
};

export default Forecasting;
