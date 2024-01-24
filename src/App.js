import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import { Schedule } from "./components/Schedule/Schedule";
import HackathonOverview from "./components/HackthonOverview";
import { Fragment, useEffect, useState } from "react";
// import Themes from "./components/Themes/Themes";
import NewThemes from "./components/New Themes/NewThemes";
import { Sponsors } from "./components/Sponsors";
import FAQ from "./components/FAQ/FAQ";
import MobileFAQ from "./components/FAQ/MobileFAQ";
import Prizes from "./components/Prizes/Prizes";
import About from "./components/About";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import GlobeComp from "./globe";
// import CollegeClub from "./components/CollegeClub/CollegeClub";
// import FaceGallery from "./components/FaceGallery/FaceGallery";
import GalleryLayout from "./components/GalleryLayout";
// import TeamLayout from "./components/TeamLayout";
// import Teampage from "./components/Teams/Teams";
// import ImageSeparatorGallery from "./components/FaceGallery/FaceGallery";
// import AppFeature from "./components/AppFeature/AppFeature";
// import Register from "./components/Register/Register";
// import RegisterMobile from "./components/Register/RegisterMobile";
// import PreLoader from "./components/PreLoader/PreLoader";
import ScrollToTop from "react-scroll-to-top";
// import InstaFeeds from "./components/InstaDisplay/InstaFeeds";
// import Loadop from "./components/loadop";
import WinnerCard from "./components/PastWinners/WinnerCard";
import FAQs from "./components/FAQ/FAQs";

function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    // componentDidMount logic
    (function () {
      var kommunicateSettings = {
        appId: process.env.REACT_APP_CHAT_TOKEN,
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = window.kommunicate || {};
      window.kommunicate._globals = kommunicateSettings;
    })();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 6000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <BrowserRouter>
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
                  backgroundColor: "#891A98",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  right: "35px",
                  bottom: "100px",
                  // boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)'
                }}
              />
              <NavBar />
              <Banner />
              <HackathonOverview />
              {/* <CollegeClub /> */}
              <WinnerCard/>
              <GlobeComp />
              {/* <Prizes /> */}
              <Schedule />
              {/* <NewThemes /> */}
              <Sponsors />
              <FAQs/>
              {/* {windowSize[0] < 1200 ? <MobileFAQ /> : <FAQ />} */}
              <About />
              {/* <FaceGallery /> */}
              {/* <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} /> */}
              <Footer />
              {windowSize[0] < 600 && <MobileNavbar />}
            </Fragment>
          }
        />

        <Route path="/gallery" element={<GalleryLayout />} />
        {/* <Route path="/team" element={<TeamLayout />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
