import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudDownload16, Close32 } from "@carbon/icons-react";
import sample_img from "../assets/images/img/csv_file_example.png";

const ReadMore = ({ slider, handleSideNav }) => {
  return (
    <AnimatePresence>
      {slider === true && (
        <motion.div
          initial={{ x: "500px" }}
          animate={{ x: "0", speed: "1000ms" }}
          transition={{ ease: "easeIn", duration: 0.4 }}
          exit={{ x: "500px", speed: "1000ms" }}
          className={slider === true ? "slider" : "slider-out"}
        >
          <div className="slider-close">
            <Close32 onClick={handleSideNav} fill="#999999" />
          </div>
          <div className="slider-content">
            <h4 style={{ color: "#039874", marginBottom: "1rem" }}>
              About GPT-J GB
            </h4>
            <p>
              Eleuther AI claims GPT-J is the best-performing publicly available
              Transformer LM in terms of zero-shot performance on various
              down-streaming tasks. You can read more about it on their blog
              post{" "}
              <a
                href="https://arankomatsuzaki.wordpress.com/2021/06/04/gpt-j/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Here
              </a>
            </p>

            <h4
              style={{
                color: "#039874",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            >
              Links
            </h4>
            <a
              href="https://6b.eleuther.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test the model in Eleuther AI's Web Demo
            </a>
            <br />
            <a
              href="http://colab.research.google.com/github/kingoflolz/mesh-transformer-jax/blob/master/colab_demo.ipynb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Run the model in colab
            </a>
            <br />
            <a
              href="              https://github.com/kingoflolz/mesh-transformer-jax/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Github{" "}
            </a>
            <div className="slider-datalist"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReadMore;
