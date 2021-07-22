import React from "react";
import "./style.scss";

const Button = ({ button_title }) => {
  return (
    <div className="button">
      <h4>{button_title}</h4>
    </div>
  );
};

export default Button;
