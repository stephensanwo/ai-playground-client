import React, { useState } from "react";
import "./style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Progress from "../components/Progress";
import Input from "../components/Input";
import Uploader from "../components/Uploader";
import { Information16 } from "@carbon/icons-react";
import DataGuidance from "./DataGuidance";
import Button from "../components/Button";

const Upload = () => {
  const [slider, setSlider] = useState(true);
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
            { title: "Data Upload", link: "/forecasting/upload" },
          ]}
        />
        <div className="header">
          <h2>Time Series Forecasting</h2>
        </div>
        <div className="forecasting-content">
          <div className="forecasting-description">
            <Progress />
            <div className="data-input">
              <small>
                Note: Due to various data requirements, Gallium forecasting uses
                temporary data caching, however, your data is not saved.Once you
                are done with any experiment, you have to download the results,
                or you will loose your data. Please do not use Gallium for
                sensitive data.
              </small>
              <p
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                  color: "#039874",
                }}
              >
                Project Details
              </p>
              <Input placeholder={"Project Name"} />
              <Input placeholder={"Project Description"} />
              <div className="data-upload">
                <p style={{ color: "#039874" }}>Data Upload</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    cursor: "pointer",
                  }}
                  onClick={handleSideNav}
                >
                  <p style={{ color: "#999999" }}>Read the data guidiance</p>
                  <Information16 fill="#999999" />
                </div>
              </div>
              <Uploader />
            </div>
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button button_title="Next" icon="next" />
            </div>
          </div>
        </div>
      </div>
      <DataGuidance slider={slider} handleSideNav={handleSideNav} />
    </div>
  );
};

export default Upload;
