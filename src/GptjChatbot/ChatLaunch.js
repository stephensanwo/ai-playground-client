import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import { ArrowRight16, ArrowRight24 } from "@carbon/icons-react";
import ReadMore from "./ReadMore";
import { axios } from "./middleware";
import { InlineLoading } from "carbon-components-react";

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
            { title: "Home", link: "/navigation" },
            { title: "GPT-J Chat Bot", link: "/gptj-chatbot" },
          ]}
        />
        <div className="header">
          <h2>Conversational AI Chat Bot with GPT-J 6B</h2>
        </div>
        <div className="chat-content">
          <div className="chat-description">
            <h4>What is GPT-J-6B ?</h4>
            <p>
              GPT-J-6B Chat Bot is an interface to interact with the GPT-J
              language model GPT-J-6B is a 6 billion parameter Transformer
              model, trained on a dataset from Eleuther AI, called "The Pile,"
              which is a 825GiB dataset from a mixture of sources. GPT-J-6B
              performs nearly on par with 6.7B GPT-3 on some tasks.
            </p>
            <div className="chat-link" onClick={props.handleSideNav}>
              <a style={{ color: "#039874" }}>Read More about GPT-J-6B</a>
              <ArrowRight16 fill="#039874" />
            </div>

            <form
              className={`start-chat ${
                Object.keys(error).length > 0 ? "start-chat-error" : ""
              }`}
              onSubmit={onSubmit}
            >
              <input
                placeholder="Enter your name to sart the chat"
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
          </div>
        </div>
      </div>
      <ReadMore slider={props.slider} handleSideNav={props.handleSideNav} />
    </div>
  );
};

export default ChatLaunch;
