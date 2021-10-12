import React from "react";
import "./style.scss";
import {
  ChartLineSmooth32,
  Cognitive32,
  PhraseSentiment32,
} from "@carbon/icons-react";
import { Link } from "react-router-dom";
import openai from "../../assets/images/svg/openai.svg";
import ludwig from "../../assets/images/svg/ludwig.svg";
import prophet from "../../assets/images/svg/prophet.svg";
import eleutherai from "../../assets/images/svg/eleutherai.svg";
import Button from "../../components/Button";
import screen_image from "../../assets/images/svg/screen-image.svg";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-description">
          <div className="landing-description-content">
            <h1>No Code Platform for </h1>
            <h1 style={{ color: "#039874" }}>Open Source AI Models</h1>
            <p>
              From predictive analytics to natural language understanding,
              Non-technical users across several functions can now leverage
              powerful open source AI models without learning to code.
            </p>
            <div className="landing-navs">
              <Button button_title="Launch Gallium" button_link="/navigation" />
              <a>Documentation</a>
            </div>
            <div className="logo-container">
              <img src={openai} width="80px" />
              <img src={ludwig} width="80px" />
              <img src={prophet} width="80px" />
              <h4
                style={{
                  fontFamily: "display-text-bold",
                  fontSize: "1rem",
                }}
              >
                GPT-3
              </h4>
            </div>
          </div>
          <div className="landing-image">
            <img src={screen_image} />
          </div>
        </div>
        <div className="landing-categories">
          <div className="landing-category">
            <div className="category-header">
              <ChartLineSmooth32 fill="#039874" />
              <h4>Forecasting Analytics</h4>
            </div>

            <p>
              From predicting user growth to revenue forecasts, Non-technical
              users across several functions can now leverage the powerful
              facebook prophet analytics
            </p>
          </div>
          <div className="landing-category">
            <div className="category-header">
              <Cognitive32 fill="#039874" />
              <h4>Natural Language Processing</h4>
            </div>

            <p>
              From predicting user growth to revenue forecasts, Non-technical
              users across several functions can now leverage the powerful
              facebook prophet analytics
            </p>
          </div>
          <div className="landing-category">
            <div className="category-header">
              <PhraseSentiment32 fill="#039874" />
              <h4>Sentiment Analytics</h4>
            </div>

            <p>
              From predicting user growth to revenue forecasts, Non-technical
              users across several functions can now leverage the powerful
              facebook prophet analytics
            </p>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Landing;
