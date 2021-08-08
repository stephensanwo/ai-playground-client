import React from "react";
import "./style.scss";
import Breadcrumbs from "../../components/Breadcrumbs";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <Breadcrumbs data="Home" />
      </div>
    </div>
  );
};

export default Nav;
