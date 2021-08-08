import { ChevronRight16 } from "@carbon/icons-react";
import React from "react";
import "./style.scss";

const Breadcrumbs = ({ data }) => {
  return (
    <div className="breadcrumbs-container">
      <a href="">{data}</a>
      <ChevronRight16 />
    </div>
  );
};

export default Breadcrumbs;
