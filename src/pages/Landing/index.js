import React from "react";
import "./style.scss";
import openai from "../../assets/images/svg/openai.svg";
import ludwig from "../../assets/images/svg/ludwig.svg";
import prophet from "../../assets/images/svg/prophet.svg";
import Badges from "../../components/Badges";
import Button from "../../components/Button";
import gallium_logo from "../../assets/images/svg/gallium-logo.svg";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        {/* <div className="gallium-badge">
          <Badges badge_name="Gallium" />
        </div> */}
        <div style={{ display: "flex" }}>
          <img src={gallium_logo} width="10%" />
          <h1>Gallium</h1>
        </div>

        <h1>
          No Code Platform for Open Source <br />
          Artificial Intelligence and Machine Learning Models
        </h1>
        <h4></h4>
        <div className="button-container">
          <Button button_title={"Launch Galluim"} />
        </div>
      </div>
      <div className="logo-container">
        <img src={openai} width="150px" />
        <img src={ludwig} width="150px" />
        <img src={prophet} width="150px" />
      </div>
    </div>
  );
};

export default Landing;
