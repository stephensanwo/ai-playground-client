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
            <h1>No Code</h1>
            <h1 style={{ color: "#039874" }}>AI Playground</h1>
            <p>
              From predictive analytics to natural language understanding,
              Gallium is a playground for Non-technical users across several
              functions to explore powerful open source AI models without
              learning to code.
            </p>
            <p style={{ marginTop: "2rem" }}>
              The tools deployed on Gallium are built by Stephen Sanwo, mostly
              with publicly available open source models. Check out my blog at
              stephensanwo.dev/blog and follow me on twitter @stephensanwo
            </p>
            <div className="landing-navs">
              <Button button_title="Explore" button_link="/navigation" />
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
        </div>
      </div>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5rem",
          marginTop: "8rem",
        }}
      ></Link>
    </div>
  );
};

export default Landing;
