import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-illustration.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import classes from "./Banner.module.css";
import Countdown from "react-countdown";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./Banner.css";

export const Banner = () => {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  const [tickerVisible, setTickerVisible] = useState(false);
  const date = new Date("2023-03-17");
  const toggleText = tickerVisible ? "Hide Countdown" : "Show Countdown";
  return (
    <section className="section banner" id="home">
      <div className="container">
        <div className="bannerWrap">
          <div className="welcometoText">Welcome to</div>
          <div className="middleTitle">
            <svg viewBox="0 0 1320 230">
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                HackOverflow 1.0
              </text>
            </svg>
            <div className="orgText">
              Organized by <span>Computer department of PHCET</span>
            </div>
          </div>
          <div className="slogan">Think. Code. Innovate.</div>
          <div className="countDownContainer">
            <FlipClockCountdown
              to={date}
              labelStyle={{
                fontFamily: "Centra",
                textTransform: "uppercase",
                paddingTop: "5px",
                fontWeight: 500,
                fontSize: width > 400 ? "24px" : "12px",
              }}
              digitBlockStyle={{
                width: width > 400 ? 50 : 30,
                height: width > 400 ? 60 : 40,
                fontSize: width > 400 ? "40px" : "25px",
                fontFamily: "Aldrich",
                backgroundColor: "purple",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// {/* <Row className="aligh-items-center">
//   <Col xs={12} md={6} xl={7}>
//     <TrackVisibility>
//       {({ isVisible }) => (
//         <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//           {/* <span className="tagline">Welcome to my Portfolio</span> */}
//           <h1 id="main-text" style={{ height: "160px" }}>
//             {`HackOverflow 1.0`}
//             <br />
//             <span
//               className="txt-rotate"
//               dataPeriod="1000"
//               data-rotate='[ "16th March 2023", "Compete with the best", "Register today on Devfolio" ]'
//             >
//               <span className="wrap">{text}</span>
//             </span>
//           </h1>
//           {/* <Countdown
//                     date={date + 10000}
//                     renderer={({ days, hours, minutes, seconds }) => {
//                       return (
//                         <>
//                           <span className="tagline">Starts In</span>
//                           <h1 id={classes.countDown}>
//                             <span className={classes.countDown}>{days}d</span>:
//                             <span className={classes.countDown}>{hours}h</span>:
//                             <span className={classes.countDown}>
//                               {minutes}m
//                             </span>
//                             :
//                             <span className={classes.countDown}>
//                               {seconds}s
//                             </span>
//                           </h1>
//                         </>
//                       );
//                     }}
//                   /> */}
//           <div className="">
//             <CountDownTimer />
//           </div>
//           <p className="banner-content" style={{ fontSize: "1.5vw" }}>
//             Join us on 17th March 2023 with students from across the nation for
//             36 hours of creation, innovation, & fun.
//           </p>
//           <button onClick={() => console.log("connect")}>Register</button>
//         </div>
//       )}
//     </TrackVisibility>
//   </Col>
//   <Col xs={12} md={6} xl={5}>
//     <TrackVisibility>
//       {({ isVisible }) => (
//         <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//           <img src={headerImg} alt="Header Img" />
//         </div>
//       )}
//     </TrackVisibility>
//   </Col>
// </Row>; */}
