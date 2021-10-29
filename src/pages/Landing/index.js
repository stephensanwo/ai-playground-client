import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import openai from "../../assets/images/svg/openai.svg";
import ludwig from "../../assets/images/svg/ludwig.svg";
import prophet from "../../assets/images/svg/prophet.svg";
import Button from "../../components/Button";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-description">
          <div className="landing-description-content">
            <h1>Artificial Intelligence</h1>
            <h1 style={{ color: "#039874" }}>Playground</h1>
            <p style={{ marginTop: "2rem" }}>
              AI Playground is where I test stuff I build with open source and
              custom Machine Learning and Deep Learning models
            </p>
            <p style={{ marginTop: "1rem" }}>
              The tools deployed on AI Playground are built by Stephen Sanwo,
              mostly with publicly available open source models. Check out my
              blog at stephensanwo.dev/blog and follow me on twitter
              @stephensanwo
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
                  fontSize: "1rem",
                  fontWeight: 800,
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
