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
          <a
            href="https://www.freecodecamp.org/news/how-to-build-an-ai-chatbot-with-redis-python-and-gpt/"
            target="blank"
          >
            <div className="nav-category">
              <div>
                <h4>Learn: Build a Fullstack AI Chatbot</h4>
                <p>
                  The AI Chatbot Handbook – How to Build an AI Chatbot with
                  Redis, Python, and GPT (FreeCodeCamp)
                </p>
              </div>

              <img src={forecasting} alt="" />
            </div>
          </a>
          <a
            href="https://github.com/stephensanwo/fullstack-ai-chatbot"
            target="blank"
          >
            <div className="nav-category">
              <div>
                <h4>AI Chatbot Project</h4>
                <p>
                  Opensource fullstack conversational AI Chatbot project and
                  source code (Github)
                </p>
              </div>

              <img src={nlp} alt="" />
            </div>
          </a>
          <a href="https://hypercompose.com" target="blank">
            <div className="nav-category">
              <div>
                <h4>HYPERCOMPOSE (Alpha)</h4>
                <p>
                  Supercharge your writing with the world's most powerful
                  Artificial Intelligence
                </p>
              </div>

              <img src={summarize} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
