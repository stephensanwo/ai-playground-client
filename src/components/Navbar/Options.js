import React from "react";
import { motion } from "framer-motion";
import "./style.scss";
import { Link } from "react-router-dom";

const Options = ({ data }) => {
  return (
    <Link to={data.link} style={{ textDecoration: "none" }}>
      <motion.div
        className="options-container"
        whileHover={{ borderBottom: "2px solid #05aa82" }}
        transition={{ ease: "easeIn", duration: 0.2 }}
      >
        <div className="options-text">
          <a>{data.name}</a>
        </div>
      </motion.div>
    </Link>
  );
};

export default Options;
