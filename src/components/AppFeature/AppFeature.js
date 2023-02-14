import app1 from "../../assets/img/app_1.png";
import app2 from "../../assets/img/app_2.png";
import playStore from "../../assets/img/play_store.png";
import "./AppFeature.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const AppFeature = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  console.log(visible);
  return (
    <>
      <section id="app-section" style={{ marginTop: "60px" }}>
        <div className="container">
          <motion.div
            className="row"
            onViewportEnter={() => {
              setVisible(true);
            }}
            onViewportLeave={() => setVisible(false)}
          >
            {visible && (
              <motion.div
                initial={{ x: -800 }}
                animate={{ x: 0, transition: " 5s" }}
                className="col-lg-6 col-sm-12"
              >
                <h1 className="side-text1">
                  <p>Download our app on Play Store.</p>
                </h1>
                <div className="play-store">
                  <a href="https://phcet.tech/app" target="_blank">
                    <img src={playStore} />
                  </a>
                </div>
              </motion.div>
            )}

            <div className="col-lg-6 col-sm-12">
              {visible && (
                <motion.div
                  initial={{ x: 800 }}
                  animate={{ x: 0, transition: " 5s" }}
                  className="app-preview1"
                >
                  <img src={app1} />
                </motion.div>
              )}
            </div>
          </motion.div>
          <motion.div
            onViewportEnter={() => {
              setVisible2(true);
            }}
            onViewportLeave={() => setVisible2(false)}
            className="row"
            style={{ marginTop: "50px" }}
          >
            <div className="col-lg-6 col-sm-12">
              {visible2 && (
                <motion.div
                  initial={{ x: -800 }}
                  animate={{ x: 0, transition: " 2s" }}
                  className="app-preview2"
                >
                  <img src={app2} />
                </motion.div>
              )}
            </div>
            <div className="col-lg-6 col-sm-12">
              {visible2 && (
                <motion.div
                  initial={{ x: 800 }}
                  animate={{ x: 0, transition: "2s" }}
                >
                  <h1 className="side-text2">
                    <p>
                      Get all info related to Hackathon.
                      <br />
                      Get digital personalized digital id.
                      <br />
                      All your and your team's info at one place.
                    </p>
                  </h1>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default AppFeature;
