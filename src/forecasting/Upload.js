import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import "./style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import Progress from "../components/Progress";
import Input from "../components/Input";
import Uploader from "../components/Uploader";
import { Information16 } from "@carbon/icons-react";
import DataGuidance from "./DataGuidance";
import Button from "../components/Button";
import { axios } from "./middleware";
import Dropdown from "../components/Dropdown";

const Upload = () => {
  const [slider, setSlider] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    project_name: "",
    project_description: "",
    email: "",
    forecast_metric: "",
    series_metric: "",
    skip_nrows: "",
    first_row_headers: "",
  });
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState({});
  const { path } = useRouteMatch();

  const history = useHistory();

  const formData = new FormData();

  const handleSideNav = () => {
    if (slider === false) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };

  const handleData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  console.log(data);

  const DATA_UPLOAD = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
      setLoading(false);
      setError({});
      history.push({
        pathname: `/forecasting/analysis`,
        state: {},
      });
    } catch (error) {
      setError(error.response);
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.append("project_name", data.project_name);
    formData.append("project_description", data.project_description);
    formData.append("email", data.email);
    formData.append("forecast_metric", data.forecast_metric);
    formData.append("series_metric", data.series_metric);
    formData.append("skip_nrows", data.skip_nrows);
    formData.append("first_row_headers", data.first_row_headers);
    formData.append("file", file);

    DATA_UPLOAD();
  };

  console.log(error);
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
            <Progress state={1} />
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
              <Input
                placeholder={"Email Address"}
                value={data.email}
                name={"email"}
                onChange={handleData}
              />

              <Input
                placeholder={"Project Name"}
                value={data.project_name}
                name={"project_name"}
                onChange={handleData}
              />
              <Input
                placeholder={"Project Description"}
                value={data.project_description}
                name={"project_description"}
                onChange={handleData}
              />

              <Input
                placeholder={"Column Name to Forecast"}
                value={data.forecast_metric}
                name={"forecast_metric"}
                onChange={handleData}
              />

              <Input
                placeholder={"Time Series Column Name"}
                value={data.series_metric}
                name={"series_metric"}
                onChange={handleData}
              />

              <Input
                placeholder={"Number of data rows to skip"}
                value={data.skip_nrows}
                name={"skip_nrows"}
                onChange={handleData}
              />

              <Dropdown />

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
              <Uploader
                file={file}
                fileName={fileName}
                setFile={setFile}
                setFileName={setFileName}
              />
            </div>
            <div
              style={{
                marginTop: "4rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                button_title="Next"
                icon="next"
                button_link=""
                onClick={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <DataGuidance slider={slider} handleSideNav={handleSideNav} />
    </div>
  );
};

export default Upload;
