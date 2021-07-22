import React from "react";
import "./style.scss";

const Badges = ({ badge_name }) => {
  return (
    <div className="badge-container">
      <h4>{badge_name}</h4>
    </div>
  );
};

export default Badges;
