import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight16, ArrowRight24 } from "@carbon/icons-react";
import ReadMore from "./ReadMore";
import { axios } from "./middleware";
import { InlineLoading } from "carbon-components-react";
import architecture from "../assets/images/svg/full-stack-chatbot-architecture.svg";
const ChatLaunch = (props) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState({});
  const [error, setError] = useState({});
  const { path } = useRouteMatch();

  console.log(path);
  const history = useHistory();

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const CREATE_SESSION = async () => {
    setLoading(true);
    try {
      const token = await axios.post(`/token?name=${name}`);
      setToken(token);
      console.log(token);
      setLoading(false);
      setError({});
      history.push({
        pathname: `${path}/chat/${token.data.token}`,
        state: { token: token.data },
      });
    } catch (error) {
      setError(error.response);
      setLoading(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    CREATE_SESSION();
  };

  return (
    <div className="container">
      <div className="content">
        <Breadcrumbs
          data={[
            { title: "Explore", link: "/navigation" },
            { title: "GPT-J Chat Bot", link: "/gptj-chatbot" },
          ]}
        />
        <div className="header">
          <h2>Conversational AI Chat Bot with GPT-J-6B</h2>
        </div>
        <form
          className={`start-chat ${
            Object.keys(error).length > 0 ? "start-chat-error" : ""
          }`}
          onSubmit={onSubmit}
        >
          <input
            placeholder="Enter your name to start the chat"
            value={name}
            type="text"
            onChange={handleInput}
          />
          <button>
            <div
              style={{
                width: "180px",
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <h4>Launch Chat Session </h4>{" "}
            </div>
            <div
              style={{
                height: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {loading ? <InlineLoading /> : <ArrowRight24 />}
            </div>
          </button>
        </form>
        <div className="chat-content">
          <div className="chat-description">
            <h4>Why this Project?</h4>
            <p>
              For this project I wanted to build an end to end conversational
              bot that includes a chat interface for the user, and an API that
              communicates with an AI model and returns information to the user
              in real time, uisng React, Python, Websockets and Redis
            </p>

            <p>
              <strong>Important!: </strong>
              This chat bot is for experimental purposes only! Use with caution!
              Please do not spam the bot.
            </p>

            <h4>What is GPT-J-6B ?</h4>
            <p>
              GPT-J-6B is a General Purpose; 6 billion parameter Transformer
              Language (NLP) model, trained on a dataset from{" "}
              <a
                href="https://github.com/kingoflolz/mesh-transformer-jax/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eleuther AI
              </a>
              , called{" "}
              <a
                href="https://pile.eleuther.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Pile
              </a>
              , which is a 825GiB dataset from a mixture of sources. GPT-J-6B
              performs nearly on par with 6.7B GPT-3 on some tasks.
            </p>

            <p>
              This Chat Bot is an interface to interact with a version of
              GPT-J-6B fined tuned as a conversational chatbot
            </p>

            <div className="chat-link" onClick={props.handleSideNav}>
              <a style={{ color: "#039874" }}>Read more about GPT-J-6B</a>
              <ArrowRight16 fill="#039874" />
            </div>

            <h4 style={{ marginTop: "2rem" }}>Links & Architecture </h4>
            <p>
              A simple architecture of the chatbot is below. View the project
              repo here: <br />
              <a
                href="https://github.com/stephensanwo/ai-playground-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Playground Client
              </a>{" "}
              <br />{" "}
              <a
                href="https://github.com/stephensanwo/ai-playground-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Playground API
              </a>
            </p>
            <div style={{ minWidth: "320px" }}>
              <img src={architecture} alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>
      <ReadMore slider={props.slider} handleSideNav={props.handleSideNav} />
    </div>
  );
};

export default ChatLaunch;
