import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Options = ({ data }) => {
  if (data.type === "internal") {
    return (
      <Link to={data.link} style={{ textDecoration: "none" }}>
        <div className="options-container">
          <div className="options-text">
            <a>{data.name}</a>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <a>
        <div className="options-container">
          <div className="options-text">
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              {data.name}
            </a>
          </div>
        </div>
      </a>
    );
  }
};

export default Options;
