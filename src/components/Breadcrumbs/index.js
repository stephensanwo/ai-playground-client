import { ChevronRight16 } from "@carbon/icons-react";
import React, { Fragment } from "react";
import "./style.scss";

const Breadcrumbs = ({ data }) => {
  console.log(data);
  return (
    <div className="breadcrumbs-container">
      {data.map((item, index) => (
        <Fragment key={index}>
          <a
            href={item.link}
            style={
              index < data.length - 1 ? { color: "" } : { color: "#039874" }
            }
          >
            {item.title}
          </a>
          {console.log(index)}
          {console.log(data.length - 1)}
          {index < data.length - 1 ? <ChevronRight16 /> : <Fragment />}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
