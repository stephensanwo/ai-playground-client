import { Renew16, SendFilled24 } from "@carbon/icons-react";
import React, { useState, Fragment } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { axios } from "./middleware";

const Chat = (props) => {
  const [data, setData] = useState([]);
  const [human, setHuman] = useState([]);
  const [bot, setBot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const location = useLocation();
  console.log(location);

  const handleInput = (event) => {
    setData(event.target.value);
  };

  const CHAT = async () => {
    setLoading(true);

    // Create WebSocket connection.
    const socket = new WebSocket(
      `ws://192.168.0.149:8558/chat/${location.state.token.token}?token=${location.state.token.token}`
    );
    // Connection opened
    socket.addEventListener("open", function (event) {
      setHuman(human.concat(data));
      socket.send(data);
    });
    // Listen for messages
    socket.addEventListener("message", function (event) {
      setBot(bot.concat(event.data));
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    CHAT();
    setData([]);
  };

  const HANDLE_REFRESH = async () => {
    try {
      const token = await axios.post(
        `/refresh_token?token=${location.state.token.token}`
      );
      setHuman([]);
      setBot([]);
    } catch (error) {
      setError(error.response);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <Breadcrumbs
          data={[
            { title: "Home", link: "/navigation" },
            { title: "Chat", link: "/gpt-chatbot/chat" },
          ]}
        />
        <div className="header">
          <h2>Welcome, {location.state.token.name}</h2>
        </div>
        <div className="chat-content">
          <small>Session Token: {location.state.token.token}</small>
          <small>Chat Session will end in 60 minutes</small>
        </div>

        <div style={{ maxWidth: "600px" }}>
          <small>
            Note: This model stores human and bot inputs in short term memory,
            in communicating with the model. Should the response become
            irregular, please refresh the session.
          </small>
          <div className="refresh-link" onClick={HANDLE_REFRESH}>
            <p>Refresh Chat Session</p>
            <Renew16 fill="#039874" />
          </div>
        </div>

        <form className="chat-container" onSubmit={onSubmit}>
          <div className="chat-container-input">
            <input
              placeholder="Enter your message"
              value={data}
              type="text"
              onChange={handleInput}
            />

            <button>
              <SendFilled24 color="#039874" />
            </button>
          </div>
          <div className="chat-container-message">
            {human.length > 0 ? (
              human.map((item, index) => (
                <Fragment>
                  <div key={index} className="chat-container-message-human">
                    <p>{item}</p>
                  </div>
                  <div key={index} className="chat-container-message-bot">
                    <p>{bot[index]}</p>
                  </div>
                </Fragment>
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  height: "200px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h4 style={{ color: "#e0e0e0" }}>No Chat History</h4>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
