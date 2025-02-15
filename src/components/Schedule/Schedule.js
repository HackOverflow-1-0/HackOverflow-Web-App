import colorSharp2 from "../../assets/img/color-sharp2.png";
import offlineDesktopView from "../../assets/img/timeline_website.png";
import offlineMobileView from "../../assets/img/offline_mobile-resize.png";
import onlineDesktopView from "../../assets/img/online_web.png";
import onlineMobileView from "../../assets/img/online_mobile.png";
import "animate.css";
import "./Schedule.css";
// import TrackVisibility from "react-on-screen";
import classes from "./Schedule.module.css";
import { useEffect, useState, memo, useCallback } from "react";
// import { Stack } from "@mui/material";

// Memoized image component for better performance
const ScheduleImage = memo(({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    decoding="async"
    width="100%"
    height="auto"
  />
));

// Memoized date card component
const DateCard = memo(({ date, month, title, description }) => (
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
        <div className="col-5" id="green-yellow" style={{ padding: "2rem" }}>
          <h1 style={{ fontWeight: "bold", fontSize: date.length > 3 ? "55px" : "70px" }}>{date}</h1>
          <h3 style={{ fontSize: "25px" }}>{month}</h3>
        </div>
        <div className="col-7" style={{ padding: "2rem" }}>
          <h1>{title}</h1>
          <h5>{description}</h5>
        </div>
      </div>
    </div>
  </div>
));

export const Schedule = () => {
  const [path, setPath] = useState("offline");

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // Memoized resize handler
  const handleWindowResize = useCallback(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }, []);

  useEffect(() => {
    // Preload images
    const images = [offlineDesktopView, offlineMobileView, onlineDesktopView, onlineMobileView];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [handleWindowResize]);

  // Memoized image source selection
  const currentImage = windowSize[0] > 600 || windowSize[1] > 2000
    ? (path === "offline" ? offlineDesktopView : onlineDesktopView)
    : (path === "offline" ? offlineMobileView : onlineMobileView);

  // Date cards data
  const dateCards = [
    {
      date: "5th",
      month: "February",
      title: "Registrations Starts",
      description: "Registrations starts, register yourself soon"
    },
    {
      date: "5th",
      month: "March",
      title: "Registrations Ends",
      description: "Registrations ends, get your name registered by this date"
    },
    {
      date: "20th",
      month: "March",
      title: "Hackathon Starts!!!",
      description: "Get your programming skills ready as the event will start soon."
    },
    {
      date: "23rd",
      month: "March",
      title: "Hackathon Ends",
      description: "36 hour long hackathon will end and winners will be announced."
    }
  ];

  return (
    <section className="schedule" id="schedule">
      <div className="container-fluid">
        <h1
         id="green-yellow"
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
            <ScheduleImage src={currentImage} alt="schedule" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row" style={{ marginTop: "40px" }}>
          <h1
           id="green-yellow"
            className="text-center text-[45px] sm:text-[25px] md:text-[35px] lg:text-[45px] capitalize cursor-pointer"
            style={{
              fontFamily: "Poppins,sans-serif",
              fontWeight: 700,
              textAlign: "center",
              
            }}
          >
            Key Dates
          </h1>
          {dateCards.map((card, index) => (
            <DateCard key={index} {...card} />
          ))}
        </div>
        {/* <div className="row">
          <Stack>
            <button>Add to Calendar</button>
          </Stack>
        </div> */}
      </div>
      {/* <img
        className="background-image-right"
        alt="hackathon"
        src={colorSharp2}
      ></img> */}
    </section>
  );
};

export default memo(Schedule);
