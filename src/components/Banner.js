import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-illustration.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import Typewriter from "typewriter-effect";

import TrackVisibility from "react-on-screen";
import classes from "./Banner.module.css";
import Countdown from "react-countdown";
import CountDownTimer from "./CountDown/CountDownTimer";
export const Banner = () => {
  const Slogan = () => {
    return (
      // eslint-disable-next-line
      <span className={"slogan sloganBeginning"} role="text">
        <h1 className={"sloganBeginning"}>
          HackOverflow 1.0
          <h2 className="animatedtext text-[#8D1F97] text-[2rem]">
            &nbsp;
            <span className={"typewriterPlaceholder"}>
              <TypewriterWelcome />
            </span>
          </h2>
        </h1>
      </span>
    );
  };

  const TypewriterWelcome = () => {
    const [displayPlaceholder, setDisplayPlaceholder] = useState(true);
    const strings = [
      "Save the date 16th March 2023.",
      "Compete with the best.",
      "Register today on Devfolio.",
      "Explore Different Themes.",
    ];
    const typewriterInit = (typewriter) => {
      if (displayPlaceholder) {
        setDisplayPlaceholder(false);
      }
      const typeString = (string, pauseTime) => {
        typewriter.typeString(string).pauseFor(pauseTime).deleteAll(30);
      };
      for (const string of strings) {
        typeString(string, 2500);
      }
      typewriter.start();
    };
    return (
      <>
        {displayPlaceholder && (
          <span className={"typewriterPlaceholder"}>inspiration.</span>
        )}
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 30,
            deleteSpeed: 30,
          }}
          onInit={(typewriter) => typewriterInit(typewriter)}
        />
      </>
    );
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <Slogan />
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <Countdown
                    date={date + 10000}
                    renderer={({ days, hours, minutes, seconds }) => {
                      return (
                        <>
                          <span className="tagline">Starts In</span>
                          <h1 id={classes.countDown}>
                            <span className={classes.countDown}>{days}d</span>:
                            <span className={classes.countDown}>{hours}h</span>:
                            <span className={classes.countDown}>
                              {minutes}m
                            </span>
                            :
                            <span className={classes.countDown}>
                              {seconds}s
                            </span>
                          </h1>
                        </>
                      );
                    }}
                  /> */}
                  <div className="">
                    <CountDownTimer />
                  </div>
                  <p className="banner-content" style={{ fontSize: "1.5vw" }}>
                    Join us on 17th March 2023 with students from across the
                    nation for 36 hours of creation, innovation, & fun.
                  </p>
                  <div className={classes.registerButton}>
                    <button>Register</button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}></Col>
        </Row>
      </Container>
    </section>
  );
};
