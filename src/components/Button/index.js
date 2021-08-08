import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ button_title, button_link }) => {
  return (
    <Link className="button" to={button_link}>
      <h4>{button_title}</h4>
    </Link>
  );
};

export default Button;
