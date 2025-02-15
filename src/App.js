import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect, useState, Suspense, useCallback } from "react";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import HackathonOverview from "./components/HackthonOverview";
import { Special } from "./components/Special/Special";
import PreLoader from "./components/PreLoader/PreLoader";
import ScrollToTop from "react-scroll-to-top";
import CollegeClub from './components/CollegeClub/CollegeClub';
import { GlobeNewComponent } from './components/GlobeNewComponent/GlobeNewComponent';
import { Schedule } from './components/Schedule/Schedule';
import AppTeam from './components/AppTeam/AppTeam';
import Sponsors from './components/Sponsors';
import FAQs from './components/FAQ/FAQs';
import About from './components/About';
import InstagramReelsCards from './components/InstagramReelsCards';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import GalleryLayout from './components/GalleryLayout';

// Optimized component wrapper with intersection observer
const OptimizedComponent = ({ children, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [id]);

  return (
    <div id={id} style={{ minHeight: '10px' }}>
      {isVisible && children}
    </div>
  );
};

function App() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  const [loading, setLoading] = useState(true);

  const handleWindowResize = useCallback(() => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 13000);

    window.addEventListener("resize", handleWindowResize);
    
    // Optimize scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Your scroll handling code here
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleWindowResize]);

  // Kommunicate chat widget with delayed initialization
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        const kommunicateSettings = {
          appId: process.env.REACT_APP_CHAT_TOKEN,
          popupWidget: true,
          automaticChatOpenOnNavigation: true,
        };

        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        document.head.appendChild(s);
        window.kommunicate = window.kommunicate || {};
        window.kommunicate._globals = kommunicateSettings;
      }, 2000); // Delay chat widget load

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <BrowserRouter>
      {loading ? (
        <PreLoader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <ScrollToTop
                  className="scroll-to-top"
                  smooth
                  color="#fff"
                  style={{
                    backgroundColor: "#5B8F81",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    right: "35px",
                    bottom: "100px",
                  }}
                />
                <NavBar />
                <Banner />
                
                <OptimizedComponent id="special">
                  <Special />
                </OptimizedComponent>

                <OptimizedComponent id="hackathon">
                  <HackathonOverview />
                </OptimizedComponent>

                <OptimizedComponent id="college">
                  <CollegeClub />
                </OptimizedComponent>

                <OptimizedComponent id="globe">
                  <GlobeNewComponent />
                </OptimizedComponent>

                <OptimizedComponent id="schedule">
                  <Schedule />
                </OptimizedComponent>

                <OptimizedComponent id="appteam">
                  <AppTeam />
                </OptimizedComponent>

                <OptimizedComponent id="sponsors">
                  <Sponsors />
                </OptimizedComponent>

                <OptimizedComponent id="faqs">
                  <FAQs />
                </OptimizedComponent>

                <OptimizedComponent id="about">
                  <About />
                </OptimizedComponent>

                <OptimizedComponent id="instagram">
                  <InstagramReelsCards />
                </OptimizedComponent>

                <OptimizedComponent id="footer">
                  <Footer />
                </OptimizedComponent>

                {windowSize[0] < 600 && <MobileNavbar />}
              </Fragment>
            }
          />
          <Route path="/gallery" element={<GalleryLayout />} />
          <Route path="/preloader" element={<PreLoader />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
