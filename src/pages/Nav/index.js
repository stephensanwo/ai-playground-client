import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import forecasting from "../../assets/images/svg/forecasting.svg";
import nlp from "../../assets/images/svg/nlp.svg";
import summarize from "../../assets/images/svg/summarize.svg";

const Nav = () => {
  return (
    <div className="container">
      <div className="content">
        <Breadcrumbs data={[{ title: "Explore", link: "/navigation" }]} />
        <div className="header">
          <h2>Welcome, what do you want to do?</h2>
        </div>
        <div className="nav-categories">
          <Link to="/">
            <div className="nav-category">
              <div>
                <h4>Forecasting</h4>
                <p>
                  Run forecasts on any data with advanced AI models like
                  Facebook Prophet and Uber's Ludwig{" "}
                </p>
              </div>

              <img src={forecasting} alt="" />
            </div>
          </Link>
          <Link to="/">
            <div className="nav-category">
              <div>
                <h4>GPT-J Chat Bot</h4>
                <p>
                  Take the GPT-J 6b AI Model for a spin by engaging it in a
                  conversation
                </p>
              </div>

              <img src={nlp} alt="" />
            </div>
          </Link>
          <Link>
            <div className="nav-category">
              <div>
                <h4>Essay Summarisation</h4>
                <p>
                  Too lazy to read?, Get a summarized version of a long article
                  or book.
                </p>
              </div>

              <img src={summarize} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
