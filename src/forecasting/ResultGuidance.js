import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudDownload16, Close32 } from "@carbon/icons-react";
import sample_img from "../assets/images/img/csv_file_example.png";

const ResultGuidance = ({ slider, handleSideNav }) => {
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
              Result Guidance
            </h4>
            <p>
              Your file should contain at least 2 columns (the data field and
              the prediction field) and look something like this (when viewing
              in excel):
            </p>
            <div className="slider-datalist"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultGuidance;
