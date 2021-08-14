import { ArrowRight32 } from "@carbon/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = ({ button_title, button_link, icon }) => {
  return (
    <Link className="button" to={button_link}>
      <div className="button-content">
        <h4>{button_title}</h4>
        {icon === "next" ? <ArrowRight32 fill="#ffffff" /> : ""}
      </div>
    </Link>
  );
};

export default Button;
