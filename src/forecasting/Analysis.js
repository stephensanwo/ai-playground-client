import React, { useState } from "react";
import "./style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Progress from "../components/Progress";
import Input from "../components/Input";
import Uploader from "../components/Uploader";
import { Information16 } from "@carbon/icons-react";

import Button from "../components/Button";
import AnalysisGuidance from "./AnalysisGuidance";
import Table from "../components/Table";

const Analysis = () => {
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
            { title: "Analysis", link: "/forecasting/analysis" },
          ]}
        />
        <div className="header">
          <h2>Time Series Forecasting</h2>
        </div>
        <div className="forecasting-content">
          <div className="forecasting-description">
            <Progress state={2} />
            <div className="data-input">
              <small>
                Note: Due to various data requirements, Gallium forecasting uses
                temporary data caching, however, your data is not saved.Once you
                are done with any experiment, you have to download the results,
                or you will loose your data. Please do not use Gallium for
                sensitive data.
              </small>
              <Table />
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
              <Button
                button_title="Analyze"
                icon="next"
                button_link={"/forecasting/result"}
              />
            </div>
          </div>
        </div>
      </div>
      <AnalysisGuidance slider={slider} handleSideNav={handleSideNav} />
    </div>
  );
};

export default Analysis;
