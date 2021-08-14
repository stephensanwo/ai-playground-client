import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { CloudDownload16, Close32 } from "@carbon/icons-react";

const SampleData = ({ slider, handleSideNav }) => {
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
              Sample Data
            </h4>
            <p>
              Leverage Gallium's data library to test Gallium Forecasting. Build
              your time series forecast now with sample csv files to get
              started.
            </p>
            <div className="slider-datalist">
              <a href="">
                <CloudDownload16 />
                Shampoos Sales Data
              </a>
              <a href="">
                {" "}
                <CloudDownload16 /> Saugeen River Temp
              </a>
              <a href="">
                {" "}
                <CloudDownload16 />
                Manning Wikipedia Log Scale PVs
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SampleData;
