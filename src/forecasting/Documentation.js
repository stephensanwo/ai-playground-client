import React from "react";
import "./style.scss";

import Breadcrumbs from "../components/Breadcrumbs";
import { CloudDownload16 } from "@carbon/icons-react";

import SampleData from "./SampleData";
import Links from "../components/Links";

const Documentation = ({ slider, handleSideNav }) => {
  return (
    <div className="container">
      <div className="content">
        <Breadcrumbs
          data={[
            { title: "Home", link: "/navigation" },
            { title: "Forecasting", link: "/forecasting" },
          ]}
        />
        <div className="header">
          <h2>Time Series Forecasting</h2>
        </div>
        <div className="forecasting-content">
          <div className="forecasting-description">
            <p>
              Run forecasts on any data with advanced AI models like Facebook
              Prophet and Uber's Ludwig. Galluim Provides two (2) models
            </p>

            <h4>Facebook Prophet</h4>
            <p>
              Prophet is a procedure for forecasting time series data based on
              an additive model where non-linear trends are fit with yearly,
              weekly, and daily seasonality, plus holiday effects. It works best
              with time series that have strong seasonal effects and several
              seasons of historical data. Prophet is robust to missing data and
              shifts in the trend, and typically handles outliers well. Prophet
              is open source software released by Facebook’s Core Data Science
              team.
            </p>

            <h4>Uber - Ludwig</h4>
            <p>
              Ludwig is a toolbox that allows to train and test deep learning
              models without the need to write code.
            </p>

            <h4>Uber - Orbit</h4>
            <p>
              Orbit is a Python package for Bayesian time series forecasting and
              inference. It provides a familiar and intuitive
              initialize-fit-predict interface for time series tasks, while
              utilizing probabilistic programming languages under the hood.
            </p>

            <div className="forecasting-link" onClick={handleSideNav}>
              <a style={{ color: "#039874" }}>
                Try out Gallium Forecasting with sample data
              </a>
              <CloudDownload16 fill="#039874" />
            </div>
            <Links
              link_text="Ready? Create New Project"
              link_to="/forecasting/upload"
            />
          </div>
        </div>
      </div>
      <SampleData slider={slider} handleSideNav={handleSideNav} />
    </div>
  );
};

export default Documentation;
