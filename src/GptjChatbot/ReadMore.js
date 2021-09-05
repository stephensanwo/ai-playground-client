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
              GPT-J is the best-performing publicly available Transformer LM in
              terms of zero-shot performance on various down-streaming tasks.
              GPT-J allows more flexible and faster inference than Tensorflow +
              TPU counterparts. This project required a substantially smaller
              amount of person-hours than other large-scale model developments
              did, which demonstrates that JAX + xmap + TPUs is the right set of
              tools for quick development of large-scale models.
            </p>

            <h4
              style={{
                color: "#039874",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            >
              Model Design
            </h4>
            <p>
              Model design: Our model design and hyperparameter choice closely
              follow those of 6.7B GPT-3 with some differences. Notably, The
              model was trained on 400B tokens from The Pile dataset with 800GB
              text. Efficient attention (linear, local/sliding window, etc) was
              not used for simplicity, as it would not have significantly
              improved throughput at this scale. The dimension of each attention
              head is set to 256, which is twice larger than that of GPT-3 of
              comparable size. This noticeably improved the throughput with
              minimal performance degradation.
            </p>
            <div className="slider-datalist"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReadMore;
