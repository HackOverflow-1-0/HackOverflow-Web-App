import { useState, useEffect } from "react";
import Background from "../components/Background";
import "animate.css";
import SocialMedia from "./SocialMedia/SocialMedia";
import BannerText from "./BannerText/BannerText";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import "./Banner.css";
import ScrollDown from "./ScrollDown/ScrollDown";
import "./reg-button.css";

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
  const date = new Date("2024-03-14");
  date.setHours(10, 0, 0, 0); // sets the time to 10:00:00 AM
  return (
    <Background>
      <section className="section banner" id="home">
        <div className="container">
          <div className="bannerWrap">
            {/* Add your banner content here */}
          </div>
        </div>
        <br />
        <div className="socialMedia">
          <SocialMedia />
        </div>
        <div className="socialMain">
          <ScrollDown />
        </div>
      </section>
    </Background>
  );
};

export default Banner;