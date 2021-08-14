import React from "react";
import "./style.scss";

const index = ({ placeholder }) => {
  return (
    <div className="text-input">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default index;
