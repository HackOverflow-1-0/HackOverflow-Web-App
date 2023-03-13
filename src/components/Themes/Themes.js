import "./Themes.css";
import hoPurple from "../../assets/img/ho1.png";
import hoGreen from "../../assets/img/ho2.png";
import hoYellow from "../../assets/img/ho3.png";
import hoBlue from "../../assets/img/ho4.png";
import { motion } from "framer-motion";
import { useState } from "react";
const Themes = () => {
  const [click, setClick] = useState(false);
  return (
    <div>
      <h1>Themes</h1>
      <div className="cards-grid">
        {click ? (
          <motion.div
            className="theme-card"
            onClick={() => {
              setClick(!click);
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              rotateY: 360,
            }}
          >
            <h1 style={{ filter: "blur(8px)" }}>Education</h1>
            <img
              style={{ filter: "blur(4px)" }}
              src={hoPurple}
              alt="default.png"
            />
            <p>
              Developing a platform to help students learn and retain knowledge
              more effectively using modern technology.
            </p>
          </motion.div>
        ) : (
          <motion.div
            div
            className="theme-card"
            onClick={() => {
              setClick(!click);
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <h1>Education</h1>
            <img src={hoPurple} alt="default.png" />
          </motion.div>
        )}

        <div className="theme-card">
          <h1>Finance</h1>
        </div>
        <div className="theme-card">
          <h1>Healthcare</h1>
        </div>
        <div className="theme-card">
          <h1>Blockchain</h1>
        </div>
      </div>
    </div>
  );
};

export default Themes;
