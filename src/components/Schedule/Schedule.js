import colorSharp2 from "../../assets/img/color-sharp2.png";
import offlineDesktopView from "../../assets/img/offline_web-resize.webp";
import offlineMobileView from "../../assets/img/offline_mobile-resize-min.svg";
import onlineDesktopView from "../../assets/img/online_web.png";
import onlineMobileView from "../../assets/img/online_mobile.png";
import "animate.css";
import "./Schedule.css";
// import TrackVisibility from "react-on-screen";
import classes from "./Schedule.module.css";
import { useEffect, useState } from "react";
// import { Stack } from "@mui/material";

export const Schedule = () => {
  const [path, setPath] = useState("offline");

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <section className="schedule" id="schedule">
      <div className="container-fluid">
        <h1
          // id="purple-pink"
          className="text-center text-[45px] capitalize cursor-pointer"
          style={{
            fontFamily: "Poppins,sans-serif",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Schedule
        </h1>
        <div className="row">
          <div id={classes.schedule}>
            <div className={classes.pathSelectors}>
              {/* <button
                onClick={() => {
                  setPath("offline");
                }}
              >
                <span>Offline</span>
              </button> */}
              {/* <button
                onClick={() => {
                  setPath("online");
                }}
              >
                <span>Online</span>
              </button> */}
            </div>
          </div>
          <div className="col">
            {path === "offline" && (
              <img
                src={
                  windowSize[0] > 600 || windowSize[1] > 2000
                    ? offlineDesktopView
                    : offlineMobileView
                }
                alt={"schedule"}
                // style={{ marginTop: "40px" }}
              />
            )}
            {path === "online" && (
              <img
                src={
                  windowSize[0] > 600 || windowSize[1] > 2000
                    ? onlineDesktopView
                    : onlineMobileView
                }
                alt={"schedule"}
                // style={{ marginTop: "40px" }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: "40px" }}>
          <h1
            className="text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Key Dates
          </h1>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  id="blue-cyan"
                  className="col-5"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "70px" }}>31st</h1>
                  <h3 style={{ fontSize: "25px" }}>January</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1>Registrations Starts</h1>
                  <h5>Registrations starts, register yourself soon</h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  className="col-5"
                  id="purple-pink"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "70px" }}>29th</h1>
                  <h3 style={{ fontSize: "25px" }}>Feb</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1>Registrations Ends</h1>
                  <h5>
                    Registrations ends, get your name registered by this date
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  className="col-5"
                  id="green-yellow"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "70px" }}>14th</h1>
                  <h3 style={{ fontSize: "25px" }}>March</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1>Hackathon Starts!!!</h1>
                  <h5>
                    Get your programming skills ready as the event will start
                    soon.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={`${classes.keyDatesCards} my-5`}>
              <div className="row">
                <div
                  className="col-5"
                  id="orange-pink"
                  style={{ padding: "2rem" }}
                >
                  <h1 style={{ fontWeight: "bold", fontSize: "70px" }}>16th</h1>
                  <h3 style={{ fontSize: "25px" }}>March</h3>
                </div>
                <div className="col-7" style={{ padding: "2rem" }}>
                  <h1>Hackathon Ends</h1>
                  <h5>
                    36 hour long hackathon will end and winners will be
                    announced.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <Stack>
            <button>Add to Calendar</button>
          </Stack>
        </div> */}
      </div>
      <img
        className="background-image-right"
        alt="hackathon"
        src={colorSharp2}
      ></img>
    </section>
  );
};
