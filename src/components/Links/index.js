import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ArrowRight16 } from "@carbon/icons-react";
const Links = ({ link_text, link_to }) => {
  return (
    <Link className="links" to={link_to}>
      <h4 style={{ color: "#039874", marginRight: "1rem" }}>{link_text}</h4>
      <ArrowRight16 fill="#039874" />
    </Link>
  );
};

export default Links;
