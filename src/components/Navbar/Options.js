import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Options = ({ data }) => {
  return (
    <Link to={data.link} style={{ textDecoration: "none" }}>
      <div className="options-container">
        <div className="options-text">
          <a>{data.name}</a>
        </div>
      </div>
    </Link>
  );
};

export default Options;
