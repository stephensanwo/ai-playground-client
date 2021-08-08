import React from "react";
import "./style.scss";
import Breadcrumbs from "../../components/Breadcrumbs";
import forecasting from "../../assets/images/svg/forecasting.svg";
import nlp from "../../assets/images/svg/nlp.svg";
import summarize from "../../assets/images/svg/summarize.svg";
const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <Breadcrumbs data="Home" />
        <div className="nav-header">
          <h2>Welcome, what do you want to do?</h2>
        </div>
        <div className="nav-categories">
          <div className="nav-category">
            <div>
              <h4>Forecasting</h4>
              <p>
                Run forecasts on any data with advanced AI models like Facebook
                Prophet and Uber's Ludwig{" "}
              </p>
            </div>

            <img src={forecasting} alt="" />
          </div>
          <div className="nav-category">
            <div>
              <h4>Essay Generation</h4>
              <p>
                Run forecasts on any data with advanced AI models like Facebook
                Prophet and Uber's Ludwig{" "}
              </p>
            </div>

            <img src={nlp} alt="" />
          </div>
          <div className="nav-category">
            <div>
              <h4>Essay Summarisation</h4>
              <p>
                Run forecasts on any data with advanced AI models like Facebook
                Prophet and Uber's Ludwig{" "}
              </p>
            </div>

            <img src={summarize} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
