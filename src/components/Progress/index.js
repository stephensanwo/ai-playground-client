import React from "react";
import "./style.scss";
import { CircleFilled16, RadioButton16 } from "@carbon/icons-react";

const Progress = () => {
  return (
    <div className="progress-container">
      <div className="progress-indicator active-indicator">
        <CircleFilled16 fill="#3569f8" />
        <p>Data Upload</p>
      </div>
      <div className="progress-indicator">
        <RadioButton16 fill="#c6c6c6" />
        <p>Run Model</p>
      </div>
      <div className="progress-indicator">
        <RadioButton16 fill="#c6c6c6" />
        <p>View Result</p>
      </div>
    </div>
  );
};

export default Progress;
