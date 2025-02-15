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
import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  const [width, setWindowWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });

    const handleScroll = () => {
      const bannerSection = document.getElementById('home');
      if (bannerSection) {
        const bannerHeight = bannerSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition < bannerHeight * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  date.setHours(10, 0, 0, 0);

  return (
    <Background>
      <section className="section banner" id="home">
        <div className="container">
          <div className="bannerWrap">
            {/* Add your banner content here */}
          </div>
        </div>
        <br />
        {isVisible && (
          <div 
            className="socialMedia"
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <SocialMedia />
          </div>
        )}
        <div className="socialMain">
          <ScrollDown />
        </div>
      </section>
    </Background>
  );
};

export default Banner;