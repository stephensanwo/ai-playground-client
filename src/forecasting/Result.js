import React, { useState } from "react";
import "./style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Progress from "../components/Progress";
import Input from "../components/Input";
import Uploader from "../components/Uploader";
import { Information16 } from "@carbon/icons-react";

import Button from "../components/Button";
import ResultGuidance from "./ResultGuidance";
import Table from "../components/Table";
import Chart from "../components/Chart";

const Result = () => {
  const [slider, setSlider] = useState(false);
  const handleSideNav = () => {
    if (slider === false) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Breadcrumbs
          data={[
            { title: "Home", link: "/navigation" },
            { title: "Forecasting", link: "/forecasting" },
            { title: "Result", link: "/forecasting/result" },
          ]}
        />
        <div className="header">
          <h2>Time Series Forecasting</h2>
        </div>
        <div className="forecasting-content">
          <div className="forecasting-description">
            <Progress state={3} />

            <div className="data-input">
              <small>
                Note: Due to various data requirements, Gallium forecasting uses
                temporary data caching, however, your data is not saved.Once you
                are done with any experiment, you have to download the results,
                or you will loose your data. Please do not use Gallium for
                sensitive data.
              </small>
              <Chart />
            </div>

            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                button_title="Back"
                icon="back"
                button_link={"/forecasting/upload"}
              />
              <Button button_title="Next" icon="next" />
            </div>
          </div>
        </div>
      </div>
      <ResultGuidance slider={slider} handleSideNav={handleSideNav} />
    </div>
  );
};

export default Result;
