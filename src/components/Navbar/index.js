import {
  Close24,
  Menu24,
  ArrowRight24,
  ArrowRight16,
} from "@carbon/icons-react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Options from "./Options";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import galliumlogo from "../../assets/images/svg/gallium-logo.svg";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const handleClick = () => {
    if (isNavOpen === "open") {
      setIsNavOpen("closed");
    } else {
      setIsNavOpen("open");
    }
  };
  return (
    <Fragment>
      <div className="app-nav">
        <div className="app-nav-container">
          <div className="nav-tabs">
            <Link
              to={"/"}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <img
                src={galliumlogo}
                width="32px"
                style={{ marginRight: "1rem" }}
              />
              <a style={{ color: "#039874" }}>Gallium</a>
            </Link>
          </div>

          <div className="nav-actions">
            <div className="nav-action-1">
              <Options data={{ name: "Tools", link: "/navigation" }} />
            </div>
            <div className="nav-action-2">
              <Options data={{ name: "Github", link: "/" }} />
            </div>
            <div className="nav-action-3">
              <Options data={{ name: "Developer", link: "/" }} />
            </div>
          </div>
          <div className="nav-switcher">
            <motion.div onClick={handleClick}>
              {isNavOpen === "open" ? (
                <Close24 style={{ color: "#039874" }} />
              ) : isNavOpen === "closed" ? (
                <Menu24 style={{ color: "#039874" }} />
              ) : (
                <Menu24 style={{ color: "#039874" }} />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isNavOpen === "open" && (
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: "100%", speed: "100ms" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            exit={{ height: "0%", speed: "100ms" }}
            className="slider-menu"
          >
            <div className="slider-menu-container">
              <motion.div
                initial={{ x: "-100px" }}
                animate={{ x: "0", speed: "100ms" }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                exit={{ display: "none", speed: "1000ms" }}
                className="slider-item"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleClick}
                >
                  <Link to="/navigation">Tools</Link>
                </div>

                <div className="see-all-container">
                  <ArrowRight16 fill="#039874" />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-100px" }}
                animate={{ x: "0", speed: "100ms" }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
                exit={{ display: "none", speed: "10000ms" }}
                className="slider-item"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleClick}
                >
                  <a>Github</a>
                </div>
                <div className="see-all-container">
                  <ArrowRight16 fill="#039874" />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-100px" }}
                animate={{ x: "0", speed: "100ms" }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
                exit={{ display: "none", speed: "10000ms" }}
                className="slider-item"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={handleClick}
                >
                  <a>Developer</a>
                </div>

                <div className="see-all-container">
                  <ArrowRight16 fill="#039874" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
