import React from "react";
import "./style.scss";
import {
  CheckmarkOutline16,
  CircleFilled16,
  RadioButton16,
} from "@carbon/icons-react";

const Progress = ({ state }) => {
  return (
    <div className="progress-container">
      <div
        className={`progress-indicator ${
          state === "1" ? "active-indicator" : ""
        }`}
      >
        {state === 1 ? (
          <CircleFilled16 fill="#3569f8" />
        ) : state > 1 ? (
          <CheckmarkOutline16 fill="#3569f8" />
        ) : (
          <RadioButton16 fill="#c6c6c6" />
        )}
        <p>Data Upload</p>
      </div>
      <div
        className={`progress-indicator ${
          state === 2 ? "active-indicator" : ""
        }`}
      >
        {state === 2 ? (
          <CircleFilled16 fill="#3569f8" />
        ) : state > 2 ? (
          <CheckmarkOutline16 fill="#3569f8" />
        ) : (
          <RadioButton16 fill="#c6c6c6" />
        )}
        <p>Run Model</p>
      </div>
      <div
        className={`progress-indicator ${
          state === 3 ? "active-indicator" : ""
        }`}
      >
        {state === 3 ? (
          <CircleFilled16 fill="#3569f8" />
        ) : state > 3 ? (
          <CheckmarkOutline16 fill="#3569f8" />
        ) : (
          <RadioButton16 fill="#c6c6c6" />
        )}
        <p>View Result</p>
      </div>
    </div>
  );
};

export default Progress;
